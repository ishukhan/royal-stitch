import { useState } from "react";
import uploadArea from "../assets/upload_area.svg";
import { MdAdd } from "react-icons/md";

const AddProduct = () => {
  const [image, setImage] = useState(null); // main image
  const [thumbImages, setThumbImages] = useState([]); // thumbnail images
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [designeDetail, setDesigneDetail] = useState({
    name: "",
    image: "",
    images: [],
    description: "",
    category: "men",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setDesigneDetail({ ...designeDetail, [e.target.name]: e.target.value });
  };

  const handleThumbChange = (e) => {
    if (e.target.files) {
      setThumbImages([...e.target.files]);
    }
  };

  const showPopup = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const add_designe = async () => {
    const { name, category, old_price, new_price, description } = designeDetail;

    if (!name || !category || !old_price || !new_price || !description) {
      showPopup("Please fill all required fields.");
      return;
    }

    if (!image) {
      showPopup("Please upload a main product image.");
      return;
    }

    let formData = new FormData();
    formData.append("product", image);

    try {
      // Upload main image
      const uploadRes = await fetch("https://royal-stitch.onrender.com/api/upload", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        return showPopup("❌ Upload failed: " + (uploadData.message || "Image error"));
      }

      // Upload thumbnails
      let thumbUrls = [];
      for (let file of thumbImages) {
        let thumbForm = new FormData();
        thumbForm.append("product", file);

        const res = await fetch("https://royal-stitch.onrender.com/api/upload", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: thumbForm,
        });
        const data = await res.json();
        if (data.success) {
          thumbUrls.push(data.image_url);
        }
      }

      // Build final payload
      const productPayload = {
        ...designeDetail,
        image: uploadData.image_url,
        images: thumbUrls,
      };

      // Upload product
      const addRes = await fetch("https://royal-stitch.onrender.com/api/addProduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productPayload),
      });

      const result = await addRes.json();

      if (result.product) {
        showPopup("✅ Product added successfully!");

        // Reset form
        setDesigneDetail({
          name: "",
          image: "",
          images: [],
          description: "",
          category: "men",
          new_price: "",
          old_price: "",
        });
        setImage(null);
        setThumbImages([]);
      } else {
        showPopup("❌ Upload failed: " + (result.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Upload error:", err);
      showPopup("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="p-8 bg-white w-full rounded-sm mt-4 lg:m-7">
        <h2 className="text-xl font-semibold mb-6">Add New Product</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Product Title:</label>
          <input
            value={designeDetail.name}
            onChange={changeHandler}
            type="text"
            name="name"
            className="bg-primary outline-none w-full py-2 px-4 rounded-md"
            placeholder="Type here.."
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Old Price:</label>
          <input
            value={designeDetail.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            className="bg-primary outline-none w-full py-2 px-4 rounded-md"
            placeholder="Old price"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">New Price:</label>
          <input
            value={designeDetail.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            className="bg-primary outline-none w-full py-2 px-4 rounded-md"
            placeholder="Discounted price"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Category:</label>
          <select
            value={designeDetail.category}
            onChange={changeHandler}
            name="category"
            className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none w-full py-2 px-4"
          >
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description:</label>
          <textarea
            name="description"
            value={designeDetail.description}
            onChange={changeHandler}
            rows={4}
            className="bg-primary outline-none w-full py-2 px-4 rounded-md resize-none"
            placeholder="Write product description..."
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Main Image:</label>
          <label htmlFor="main-image-input">
            <img
              src={image ? URL.createObjectURL(image) : uploadArea}
              alt="Main preview"
              className="w-24 h-24 rounded object-cover cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="main-image-input"
            hidden
            onChange={imageHandler}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Thumbnail Images (4 max):</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleThumbChange}
            className="w-full"
          />
          <div className="flex gap-2 mt-2 flex-wrap">
            {thumbImages.length > 0 &&
              [...thumbImages].map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  className="w-16 h-16 rounded object-cover border"
                  alt="thumb"
                />
              ))}
          </div>
        </div>

        <button
          onClick={add_designe}
          className="btn_dark_rounded mt-4 flexCenter gap-x-1"
        >
          <MdAdd />
          Add Product
        </button>
      </div>

      {/* ✅ Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">{modalMessage}</h2>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
