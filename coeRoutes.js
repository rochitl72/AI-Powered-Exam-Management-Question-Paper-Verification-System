import express from "express";
import Exam from "../models/Exam.js";

const router = express.Router();

// COE Review Exam Submission
router.post("/review", async (req, res) => {
  try {
    const { examId, reviewMessage, approvalStatus } = req.body;

    await Exam.findByIdAndUpdate(examId, { reviewMessage, approvalStatus });

    res.json({ message: "Review submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
