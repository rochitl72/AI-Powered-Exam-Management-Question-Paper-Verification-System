# college-exam-managementHere’s a **professional `README.md` file** for your **College Exam Management System** project. It includes an **overview, features, installation guide, technologies used, and more.**  

---

### **📌 README.md – College Exam Management System**
```md
# 🎓 College Exam Management System

**An AI-powered platform for seamless exam management, question paper verification, and automated workflows.**  
This system enables COEs, Examiners, and the Printing Press to manage, verify, and process question papers efficiently using AI.

---

## 📌 Features

### ✅ **User Authentication**
- Secure login & role-based access (COE, Examiners, Printing Press).
  
### ✅ **Exam Creation & Management**
- COE can create new exams, upload syllabus, and assign Examiners.

### ✅ **AI-Powered Question Paper Verification**
- **Spelling & Logical Error Check**
- **Difficulty Level Analysis**
- **Plagiarism Detection**
- **Relevance to Syllabus Check**

### ✅ **Examiner Question Paper Workflow**
- Examiners can **upload**, **modify**, and **resubmit** question papers.

### ✅ **COE Review & Approval Process**
- COE can **approve or request modifications** based on AI-generated feedback.

### ✅ **Printing Press Workflow Automation**
- Receives **verified question papers** and updates the status:  
  `Preparing` → `Waiting for Dispatch` → `Delivered`

---

## 📌 Tech Stack

### 🔹 **Frontend** (Next.js)
- React + Next.js (App Router)
- Tailwind CSS for UI
- Axios for API requests

### 🔹 **Backend** (Node.js + Express)
- Express.js for REST APIs
- MongoDB + Mongoose for database
- Multer for file uploads

### 🔹 **AI Processing Server** (FastAPI + Python)
- **Hugging Face Transformers** for NLP-based question verification
- **Sentence Transformers** for syllabus relevance & plagiarism detection
- **NLTK** for text processing
- **Uvicorn** for API server

---

## 📌 Installation Guide

### 🚀 **Step 1: Clone the Repository**
```sh
git clone https://github.com/rochitl72/college-exam-management.git
cd college-exam-management
```

### 🚀 **Step 2: Backend Setup**
```sh
cd backend
npm install  # Install dependencies
```
#### **Configure `.env` file in `backend/`**
```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```
Run the backend server:
```sh
npm run dev
```

### 🚀 **Step 3: AI Processing Setup**
```sh
cd backend/ai_processing
python3 -m venv venv
source venv/bin/activate  # Activate virtual environment
pip install -r requirements.txt
```
Run the AI Processing Server:
```sh
uvicorn ai_server:app --host 0.0.0.0 --port 8001 --reload
```

### 🚀 **Step 4: Frontend Setup**
```sh
cd frontend
npm install  # Install dependencies
npm run dev  # Start frontend server
```

### 🚀 **Step 5: Open the Application**
- **Frontend:** [`http://localhost:3000`](http://localhost:3000)  
- **Backend API:** [`http://localhost:5000`](http://localhost:5000)  
- **AI Server API:** [`http://localhost:8001/docs`](http://localhost:8001/docs)

---

## 📌 API Endpoints

### 🔹 **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate user |

### 🔹 **Exam Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/exams/create` | COE creates an exam |
| `GET` | `/api/exams` | Get all exams |

### 🔹 **AI-Based Question Paper Analysis**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/analyze-question-paper/` | AI checks spelling, difficulty, and relevance |
| `POST` | `/api/coe/review` | COE submits feedback |

---

## 📌 To-Do List (Future Enhancements)
- **🔜 Mobile App Version (React Native)**
- **🔜 Automatic Exam Scheduling**
- **🔜 Real-Time Notifications**

---

## 📌 Contributors
- **Rochit** ([@rochitl72](https://github.com/rochitl72)) - Developer

---

## 📌 License
This project is **open-source** under the MIT License.
```
