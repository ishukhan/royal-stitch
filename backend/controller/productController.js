import Product from "../models/product.js";

export const uploadProduct = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ id: -1 }).limit(1);
    let newId = 1;
    if (products.length > 0 && !isNaN(products[0].id)) {
      newId = Number(products[0].id) + 1;
    }

    const {  name, category, new_price, old_price, image, images, description } = req.body;

    // ✅ Validate the image URL instead of expecting a file
    if (!image) {
      return res.status(400).json({ message: "Product image is required" });
    }

    const newProduct = new Product({
  id: newId,
  name,
  category,
  image,        // main image
  images,       // additional image URLs (array)
  description,  // product description
  new_price,
  old_price,
});

    // console.log("Saving product:", newProduct);
    await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("UploadProduct error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const deletedProduct = await Product.findOneAndDelete({ id });

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // console.log("Product removed:", deletedProduct);
    res.status(201).json({
      message: "Product remove successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products)
    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

export const newCollection = async (req, res) => {
  try {
    const products = await Product.find({});
    const newProduct = products.slice(1).slice(-8);
    // console.log(products)
    res.status(200).json({
      message: "Products fetched successfully new Collection",
      newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

export const populerProduct = async (req, res) => {
  try {
    const products = await Product.find({ category: "men" });
    const newProduct = products.slice(0, 4);
    // console.log(products)
    res.status(200).json({
      message: "Products fetched successfully Popular product",
      newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

export const relatedProducts = async (req, res) => {
  try {
    // Use query parameters instead of params
    // const { category } = req.query;

    // if (!category) {
    //   return res.status(400).json({ message: "Category is required" });
    // }

    // Fetch related products from the same category excluding the current product
    const products = await Product.find({});

    res.status(200).json({
      message: "Related products fetched successfully",
      relatedProducts: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch related products",
      error: error.message,
    });
  }
};

// export default { uploadProduct, removeProduct };
