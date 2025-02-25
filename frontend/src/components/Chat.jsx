import { useState } from "react";
import { sendMessage } from "../services/chatService";

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
      const data = await sendMessage(input);
      setChatLog((prev) => [...prev, { sender: "bot", message: data }]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }

    setIsLoading(false); 
  };

  return (
    <div>
      <div className="chat-window">
        {chatLog.map((entry, idx) => (
          <div key={idx} className={entry.sender}>
            {entry.message}
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>} 
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend} disabled={isLoading}>
        Send
      </button>{" "}
    </div>
  );
};

export default Chat;
