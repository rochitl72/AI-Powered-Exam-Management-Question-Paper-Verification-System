import express from "express";
import Exam from "../models/Exam.js";

const router = express.Router();

// Create an Exam
router.post("/", async (req, res) => {
  try {
    const { name, date, subject, duration, examinerEmail } = req.body;
    const exam = new Exam({ name, date, subject, duration, examinerEmail });
    await exam.save();
    res.status(201).json({ message: "Exam created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Exams
router.get("/", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
