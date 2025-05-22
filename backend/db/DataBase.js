import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGODB_URI;
export default async () => {
    try {
      if (!db) {
        throw new Error('MongoDB URI is not defined');
      }
      console.log('Connecting to MongoDB...');
      await mongoose.connect(db);
      console.log('MongoDB connected...');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
  };