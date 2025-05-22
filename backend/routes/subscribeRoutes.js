import express from "express";
import { subscibeUser } from "../controller/subscribeController.js";

const router = express.Router();

router.post("/subscribe", subscibeUser);

export default router;
