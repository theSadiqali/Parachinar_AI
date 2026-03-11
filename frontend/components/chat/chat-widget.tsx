'use client';

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaRobot, FaUser, FaTimes } from "react-icons/fa";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, typing, open]);

  async function sendMessage() {
    if (!input.trim() || submitting) return;
    const userText = input.trim();

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");
    setTyping(true);
    setSubmitting(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userText }),
      });

      const data = (await res.json()) as { response?: string };
      const nextText =
        typeof data.response === "string"
          ? data.response
          : "I am here to answer questions about Parachinar.";

      setMessages((prev) => [...prev, { sender: "bot", text: nextText }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I could not reach the server just now. Please try again in a moment.",
        },
      ]);
    } finally {
      setTyping(false);
      setSubmitting(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      void sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-4 z-50" aria-label="Parachinar AI chat">
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-forest-900 px-4 py-2 text-xs font-medium text-alabaster shadow-soft-elevated hover:bg-forest-700"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97, y: 0 }}
        >
          <FaComments className="h-4 w-4" />
          Ask Parachinar
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="w-[320px] sm:w-[360px] h-[460px] rounded-2xl bg-alabaster/95 backdrop-blur-xl shadow-soft-elevated border border-white/40 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/40 bg-gradient-to-r from-forest-900 via-forest-700 to-forest-900 text-alabaster">
              <div className="flex items-center gap-2 text-xs">
                <FaRobot className="h-4 w-4" />
                <span>Parachinar Guide</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-alabaster/70 hover:text-alabaster"
              >
                <FaTimes className="h-3 w-3" />
              </button>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-xs">
              {messages.map((m, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: m.sender === "user" ? 16 : -16,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-start gap-2 ${
                    m.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.sender === "bot" && (
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-forest-900 text-[0.6rem] text-alabaster">
                      <FaRobot />
                    </span>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 ${
                      m.sender === "user"
                        ? "bg-forest-900 text-alabaster"
                        : "bg-white/90 text-slateLuxury-900 border border-white/60"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.sender === "user" && (
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slateLuxury-900 text-[0.6rem] text-alabaster">
                      <FaUser />
                    </span>
                  )}
                </motion.div>
              ))}

              {typing && (
                <div className="flex items-center gap-2 text-[0.7rem] text-slateLuxury-500">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slateLuxury-300/40">
                    <span className="h-1 w-1 rounded-full bg-slateLuxury-700 animate-pulse" />
                  </span>
                  Composing a reply…
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form
              className="border-t border-white/40 bg-white/90 px-3 py-2 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage();
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about rituals, seasons, routes…"
                className="flex-1 bg-transparent text-xs outline-none placeholder:text-slateLuxury-300"
              />
              <motion.button
                type="submit"
                disabled={submitting}
                whileTap={{ scale: submitting ? 1 : 0.96 }}
                className="rounded-full bg-forest-900 px-3 py-1.5 text-[0.7rem] font-medium text-alabaster disabled:opacity-60"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

