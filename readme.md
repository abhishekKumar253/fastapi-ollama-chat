# 🚀 FastAPI + Ollama Chatbot

A **FastAPI-based** chatbot using **Ollama** for local AI-powered responses. This project integrates both **backend** (FastAPI + Ollama) and **frontend** (React) for seamless real-time interactions.

## 🔥 Features

### Backend
- **FastAPI + Ollama** for AI responses.
- **Streaming responses** for real-time chat.
- **Swagger UI** for easy testing at `/docs`.
- **Simple & fast setup** for quick deployment.

### Frontend
- **React** for the user interface.
- **Real-time chat interface** with message input and display.
- **Axios** for smooth API communication with the backend.
- **State management** using React’s `useState`.

## 🛠 Installation Guide

Follow these steps to get the project up and running:

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/abhishekKumar253/fastapi-ollama-chat.git
cd fastapi-ollama-chat

2️⃣ Set Up the Virtual Environment (Backend)
python -m venv myenv  
myenv\Scripts\activate  # Windows  
source myenv/bin/activate  # macOS/Linux  

3️⃣ Install Backend Dependencies  
cd app
pip install -r requirements.txt

4️⃣ Run the Backend Server

uvicorn app.main:app --reload

5️⃣ Test the API via Swagger UI
Open your browser and go to:
http://127.0.0.1:8000/docs

6️⃣  Set Up the Frontend (React)
 - Navigate to the frontend folder:
    cd frontend
 - Install the dependencies:
    npm install
 - Run the development server:
    npm run dev

📂 Project Structure
fastapi-ollama-chat/
│── app/                              # Backend (FastAPI) Code
│   ├── routes/                       # API Route Handlers
│   │   ├── chat.py                   # Handles chat interactions
│   ├── services/                     # Backend Logic
│   │   ├── ollama_service.py         # AI logic (Ollama interaction)
│   ├── main.py                       # FastAPI application entry point
│   ├── myenv/                        # Virtual environment (Backend)
│   ├── requirements.txt              # Backend dependencies
│── frontend/                         # Frontend (React) Code
│   ├── src/                          # React source code
│   │   ├── components/               # React components (e.g., Chat)
│   │   ├── App.js                    # Main React app component
│   │   ├── services/                 # Frontend API service (Axios)
│   ├── package.json                  # Frontend dependencies
│── .gitignore                        # Git ignore file
│── README.md                         # Project documentation


## 🎥 Working Demo

Experience the magic of the chatbot in action! Watch the demo below to see how it works:

[Watch the demo video](https://www.loom.com/share/377492702a4943489e6bf64fc9c9d62c?sid=f4ea9cde-04b1-4af4-8b9b-853f5c41f497)
