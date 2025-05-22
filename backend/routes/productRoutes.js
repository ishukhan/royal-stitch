import express from "express";
import upload from "../middleware/multerConfig.js";
import {
  uploadProduct,
  removeProduct,
  getAllProduct,
  newCollection,
  populerProduct,
  relatedProducts,
} from "../controller/productController.js";

const router = express.Router();

router.post("/addProduct",  upload.fields([
    { name: "product", maxCount: 1 },
    { name: "images", maxCount: 3  },
  ]), uploadProduct);

router.post("/removeProduct", removeProduct);

router.get("/allProduct", getAllProduct)

router.get("/newCollection", newCollection)

router.get("/popularproduct",populerProduct)

router.get("/relatedproduct", relatedProducts)


export default router;
