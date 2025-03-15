import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import coeRoutes from "./routes/coeRoutes.js";

import coeRoutes from "./routes/coeRoutes.js";

import examinerRoutes from "./routes/examinerRoutes.js";

import examRoutes from "./routes/examRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/coe", coeRoutes);

app.use("/api/examiner", examinerRoutes);

app.use("/api/exams", examRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
