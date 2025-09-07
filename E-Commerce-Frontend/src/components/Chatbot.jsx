import { useState } from "react";
import axios from "axios";
import "../components/ChatbotStyle.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState("Hi there! How can I assist you?");
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3005/chatbot", {
        question: value,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setResponse("Oops! Something went wrong.");
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating toggle button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {/* Chatbot popup */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h4>DevShri Bot 🤖</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatbot-body">
            <input type="text" value={value} onChange={onChange} />
            <button onClick={handleSubmit}>Ask</button>
            <p>Chatbot: {response}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
