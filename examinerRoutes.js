import express from "express";
import multer from "multer";
import path from "path";
import Exam from "../models/Exam.js";

const router = express.Router();

// Set up storage
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Handle question paper upload
router.post("/upload", upload.single("questionPaper"), async (req, res) => {
  try {
    const { examId } = req.body;
    const filePath = req.file.path;

    await Exam.findByIdAndUpdate(examId, { questionPaper: filePath });
    res.json({ message: "Question paper uploaded successfully", filePath });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
