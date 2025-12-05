// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaComments, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [open, setOpen] = useState(false); // chat window open/close
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("https://parachinar-ai.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });


      const data = await res.json();
      const botMsg = { sender: "bot", text: data.response };
      setTimeout(() => {
        setMessages((prev) => [...prev, botMsg]);
        setTyping(false);
      }, 500); // simulate typing delay
    } catch (err) {
      console.error(err);
      setTyping(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Chat Button */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 dark:bg-indigo-500 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaComments size={24} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-96 h-[600px] bg-white dark:bg-gray-800 shadow-lg rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-indigo-600 dark:bg-indigo-500 text-white p-4 font-bold flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaRobot /> Parachinar Chatbot
              </div>
              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-indigo-100 self-end dark:bg-indigo-700 text-gray-900 dark:text-white"
                      : "bg-gray-100 self-start dark:bg-gray-700 text-gray-900 dark:text-white"
                  } flex items-center gap-2`}
                >
                  {msg.sender === "user" ? <FaUser /> : <FaRobot />} {msg.text}
                </motion.div>
              ))}
              {typing && (
                <motion.div className="bg-gray-200 dark:bg-gray-700 self-start p-2 rounded-lg flex items-center gap-2 animate-pulse">
                  <FaRobot /> Typing...
                </motion.div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-200 dark:border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 focus:outline-none dark:bg-gray-700 dark:text-white"
                placeholder="Ask me about Parachinar..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
