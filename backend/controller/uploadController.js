export function uploadFile(req, res) {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }

  const image_url = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
    image_url,
  });
}