from fastapi import FastAPI, UploadFile, File
import docx2txt
from transformers import pipeline
from sentence_transformers import SentenceTransformer, util
import nltk
from nltk.tokenize import sent_tokenize
import statistics
import os
import docx2txt

nltk.download("punkt")

# Load NLP Models
difficulty_model = pipeline("text-classification", model="cross-encoder/ms-marco-MiniLM-L-12-v2")
plagiarism_model = SentenceTransformer("all-MiniLM-L6-v2")  # Sentence embeddings for plagiarism
relevance_model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")  # Best for relevance checking

from sentence_transformers import SentenceTransformer, util
import nltk
from nltk.tokenize import sent_tokenize
import statistics
import os

nltk.download("punkt")

# Load Hugging Face NLP models
difficulty_model = pipeline("text-classification", model="cross-encoder/ms-marco-MiniLM-L-12-v2")
plagiarism_model = SentenceTransformer("all-MiniLM-L6-v2")  # Efficient sentence embedding model
import nltk
from nltk.tokenize import sent_tokenize
import statistics
import nltk
from nltk.tokenize import sent_tokenize

# Download nltk tokenizer
nltk.download('punkt')

app = FastAPI()

# Load Hugging Face models for spell check and summarization
spell_check_model = pipeline("text-generation", model="t5-small")
relevancy_model = pipeline("text-classification", model="cross-encoder/ms-marco-MiniLM-L-12-v2")

@app.post("/analyze-question-paper/")
async def analyze_question_paper(
    question_paper: UploadFile = File(...), syllabus_file: UploadFile = File(...)
):
    try:
        # Extract text from question paper
        question_text = docx2txt.process(question_paper.file)
        question_sentences = sent_tokenize(question_text)

        # Extract text from syllabus
        syllabus_text = docx2txt.process(syllabus_file.file)
        syllabus_sentences = sent_tokenize(syllabus_text)

        # Compute Relevance Score (Similarity Between Questions & Syllabus)
        relevance_scores = []
        for question in question_sentences:
            q_embedding = relevance_model.encode(question, convert_to_tensor=True)
            syllabus_embedding = relevance_model.encode(syllabus_sentences, convert_to_tensor=True)
            similarity = util.pytorch_cos_sim(q_embedding, syllabus_embedding).max().item()
            relevance_scores.append(similarity)

        average_relevance = sum(relevance_scores) / len(relevance_scores)

        # Compute Difficulty Scores
        difficulty_scores = [difficulty_model(q)[0]["score"] for q in question_sentences]
        avg_difficulty = sum(difficulty_scores) / len(difficulty_scores)
        difficulty_variation = statistics.stdev(difficulty_scores) if len(difficulty_scores) > 1 else 0

        return {
            "original_text": question_text,
            "average_difficulty": avg_difficulty,
            "difficulty_variation": difficulty_variation,
            "difficulty_scores": difficulty_scores,
            "relevance_score": average_relevance,  # Higher = better match with syllabus
        }

    except Exception as e:
        return {"error": str(e)}
