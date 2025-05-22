// ✅ WITH .js extension
import express from "express";
import upload from "../middleware/multerConfig.js";
import { uploadFile } from "../controller/uploadController.js";

const router = express.Router();

router.post("/upload", upload.single("product"), uploadFile);


export default router;
