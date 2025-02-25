# 🚀 FastAPI + Ollama Chatbot

A **FastAPI-based** chatbot using **Ollama** for local AI-powered responses. This project includes both **backend** (FastAPI + Ollama) and **frontend** (React) for real-time interactions.

## 🔥 Features

### Backend
- **FastAPI + Ollama** for AI responses
- **Streaming responses** for real-time chat
- **Swagger UI** for testing at `/docs`
- **Simple & fast setup**

### Frontend
- **React** for user interface
- **Real-time chat interface** with input and messages
- **Axios** for API communication with the backend
- **State management** using React `useState`

## 🛠 Installation

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


