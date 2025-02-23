# 🚀 FastAPI Ollama Chatbot 

A FastAPI-based chatbot using **Ollama** for local AI-powered responses. Supports real-time chat via Swagger UI.  

## 🔥 Features  
✅ FastAPI + Ollama - Harness the power of FastAPI and Ollama for intelligent AI responses.
✅ Streaming Responses - Get responses in real-time for a seamless chat experience.
✅ Interactive API Docs - Use the built-in Swagger UI (/docs) for easy API testing.
✅ Lightweight & Fast - Minimal dependencies with high efficiency.
✅ Easy Deployment - Run locally or deploy on a server with minimal configuration. 

## 🛠 Installation  

### 1️⃣ Clone the Repository  
```sh
 git clone https://github.com/abhishekKumar253/fastapi-ollama-chat.git  
 cd fastapi-ollama-chat 

2️⃣ Create & Activate Virtual Environment
python -m venv myenv  
myenv\Scripts\activate  # Windows  
source myenv/bin/activate  # macOS/Linux  

3️⃣ Install Dependencies  

pip install -r requirements.txt  

4️⃣ Run the FastAPI Server

uvicorn app.main:app --reload   

5️⃣ Test the API via Swagger UI
Open your browser and go to:
http://127.0.0.1:8000/docs

📂 Project Structure
fastapi-ollama-chat/
│── app/
│   ├── routes/
│   │   ├── chat.py  # Handles chat interactions
│   ├── services/
│   │   ├── ollama_service.py  # AI processing logic
│   ├── main.py  # FastAPI application entry point
│── myenv/  # Virtual environment (excluded in .gitignore)
│── .gitignore  # Excludes unnecessary files from version control
│── requirements.txt  # Dependencies list
│── README.md  # Project documentation

