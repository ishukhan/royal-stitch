import { useState } from "react";
import uploadArea from "../assets/upload_area.svg";
import { MdAdd } from "react-icons/md";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [image, setImage] = useState(null); // main image
  const [thumbImages, setThumbImages] = useState([]); // thumbnail images
  const [isLoading, setIsLoading] = useState(false);

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
      const files = Array.from(e.target.files);
      if (files.length > 4) {
        Swal.fire({
          icon: "warning",
          title: "Maximum 4 thumbnails allowed",
          text: "Only the first 4 images will be selected",
        });
        setThumbImages(files.slice(0, 4));
      } else {
        setThumbImages(files);
      }
    }
  };

  const imageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const add_designe = async () => {
    const { name, category, old_price, new_price, description } = designeDetail;

    // Validation
    if (!name || !category || !old_price || !new_price || !description) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill all required fields",
      });
      return;
    }

    if (!image) {
      Swal.fire({
        icon: "error",
        title: "Main Image Required",
        text: "Please upload a main product image",
      });
      return;
    }

    if (isNaN(old_price) || isNaN(new_price)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Price",
        text: "Prices must be numbers",
      });
      return;
    }

    try {
      setIsLoading(true);

      // Show loading alert
      Swal.fire({
        title: "Uploading Product",
        html: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const formData = new FormData();
      formData.append("product", image); // main image

      thumbImages.forEach((file) => {
        formData.append("images", file); // thumbnails
      });

      formData.append("name", name);
      formData.append("category", category);
      formData.append("new_price", new_price);
      formData.append("old_price", old_price);
      formData.append("description", description);

      const addRes = await fetch(
        "https://royal-stitch.onrender.com/api/addProduct",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await addRes.json();

      if (result.product) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product added successfully!",
        });

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
        throw new Error(result.message || "Failed to add product");
      }
    } catch (err) {
      console.error("Upload error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
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
          <label className="block mb-2 font-medium">
            Thumbnail Images (4 max):
          </label>
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
          disabled={isLoading}
          className="btn_dark_rounded mt-4 flexCenter gap-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            "Uploading..."
          ) : (
            <>
              <MdAdd />
              Add Product
            </>
          )}
        </button>
      </div>
    </>
  );
};
export default AddProduct;
