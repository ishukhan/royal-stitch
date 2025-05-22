import multer from "multer";
import path from "path";

// image storage engine
const Storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${(file.fieldname)}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// File filter (optional)
const fileFilter = (req, file, cb) => {
  // Accept only images
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({ storage: Storage, fileFilter });



export default upload;
