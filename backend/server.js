const PORT = process.env.PORT || 3000;
import express from "express";
import path from "path";
import cors from "cors";
import uploadRoutes from "./routes/multerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js"
import { fileURLToPath } from "url";
import ConnectDB from "./db/DataBase.js";

// Recreate __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

ConnectDB();

// API CREATION
app.get("/", (req, res) => {
  res.send("Express running succesfully");
});

// Middleware to serve uploaded files statically (optional)
app.use("/images", express.static(path.join(__dirname, "upload/images")));

// Routes
app.use("/api", uploadRoutes);
// Routes
app.use("/api", productRoutes);

app.use("/api", userRoutes);

app.use("/api", subscribeRoutes)

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  else console.log(`✅ Server running at: http://localhost:${PORT}`);
});
