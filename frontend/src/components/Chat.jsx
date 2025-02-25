import { useState } from "react";
import { sendMessage } from "../services/chatService";
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setChatLog((prev) => [...prev, { sender: "user", message: input }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await sendMessage(input);

      setChatLog((prev) => [
        ...prev,
        { sender: "bot", message: response.response.content },
      ]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {chatLog.map((entry, idx) => (
          <div
            key={idx}
            className={
              entry.sender === "user" ? "user-message" : "bot-message"
            }>
            {entry.message}
          </div>
        ))}
        {isLoading && <div className="loading">Loading...</div>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
        <button onClick={handleSend} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
