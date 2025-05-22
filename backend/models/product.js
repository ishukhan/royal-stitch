import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true }, // main image
  images: { type: [String], default: [] }, // additional thumbnails
  description: { type: String, default: "" },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});


export default mongoose.model("Product", ProductSchema);
