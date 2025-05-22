export function uploadFile(req, res) {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  // Cloudinary automatically returns the secure_url
  const image_url = req.file.path;

  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
    image_url,
  });
}
