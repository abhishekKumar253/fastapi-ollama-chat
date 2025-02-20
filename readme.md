# 🚀 FastAPI Ollama Chat  

A FastAPI-based chatbot using **Ollama** for local AI-powered responses. Supports real-time chat via Swagger UI.  

## 🔥 Features  
- FastAPI + Ollama for AI responses  
- Streaming responses  
- Swagger UI for easy testing (`/docs`)  
- Simple & fast setup  

## 🛠 Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/abhishekKumar253/fastapi-ollama-chat.git  
cd fastapi-ollama-chat   

2️⃣ Create & Activate Virtual Environment
python -m venv myenv
myenv\Scripts\activate

3️⃣ Run FastAPI Server

uvicorn main:app --reload  

4️⃣ Test API in Swagger UI
http://127.0.0.1:8000/docs
