import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

const sampleMessages: { role: "user" | "assistant"; text: string }[] = [
  { role: "assistant", text: "Welcome to the CAD AI Assistant. I can help you with design suggestions, simulation setup, and material selection. How can I help?" },
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user" as const, text: input },
      { role: "assistant" as const, text: "I'll analyze your request. For detailed CAD simulations, I recommend starting with a mesh convergence study. Shall I set that up?" },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{ background: '#00D4FF', boxShadow: '0 0 30px rgba(0,212,255,0.4)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="w-6 h-6 text-[#060d1a]" /> : <MessageSquare className="w-6 h-6 text-[#060d1a]" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[500px] glass-panel flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Bot className="w-5 h-5 text-neon-blue" />
              <span className="font-heading text-sm tracking-wider text-foreground">AI Design Assistant</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[350px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[80%] text-xs p-3 rounded-lg"
                    style={{
                      background: msg.role === "user" ? "rgba(0,212,255,0.15)" : "rgba(10,22,40,0.8)",
                      border: `1px solid ${msg.role === "user" ? "rgba(0,212,255,0.3)" : "rgba(0,212,255,0.1)"}`,
                      color: '#e2e8f0',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about design, simulation..."
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-transparent border border-border text-foreground placeholder:text-muted-foreground outline-none focus:border-neon-blue"
                style={{ borderColor: 'rgba(0,212,255,0.2)' }}
              />
              <button onClick={handleSend} className="btn-neon-solid p-2 rounded-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
