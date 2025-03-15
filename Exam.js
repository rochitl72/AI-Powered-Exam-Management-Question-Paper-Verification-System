import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    subject: { type: String, required: true },
    duration: { type: String, required: true },
    examinerEmail: { type: String, required: true },
    questionPaper: { type: String }, // File path of uploaded paper
    reviewMessage: { type: String },
    approvalStatus: { type: String, enum: ["pending", "approved", "needs_changes"], default: "pending" },
  });
  

const Exam = mongoose.model("Exam", examSchema);
export default Exam;
