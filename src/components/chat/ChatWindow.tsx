'use client';

import { useState, useRef, useEffect } from 'react';
import { IoMdClose, IoMdSend } from 'react-icons/io';
import { useChat, Message } from '@/context/ChatContext';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageBubble = ({ text, from }: { text: string; from: 'user' | 'bot' }) => {
  const isUser = from === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-md ${
          isUser
            ? 'bg-cyan-500 text-white rounded-br-none'
            : 'bg-gray-700 text-gray-200 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const { messages, addMessage, isLoading, setLoading } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      from: 'user',
      text: input,
    };
    addMessage(userMessage);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentInput }),
      });

      if (!response.ok) {
        throw new Error('API isteği başarısız oldu.');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        from: 'bot',
        text: data.text,
      };
      addMessage(botMessage);
    } catch (error) {
      console.error('Mesaj gönderilirken hata:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        from: 'bot',
        text: 'Üzgünüm, bir sorunla karşılaştım. Lütfen daha sonra tekrar dene.',
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`
        fixed z-50
        bg-gray-800 rounded-2xl shadow-2xl
        flex flex-col
        transition-all duration-500 ease-in-out
        bottom-4 right-4 left-4 h-[75vh] 
        sm:bottom-28 sm:left-auto sm:right-8 sm:w-full sm:max-w-sm sm:h-[60vh]
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <header className="bg-gray-900 rounded-t-2xl p-4 flex justify-between items-center border-b border-gray-700 flex-shrink-0">
        <h3 className="text-lg font-bold text-white">DevPledge Bot</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <IoMdClose size={24} />
        </button>
      </header>
      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <MessageBubble key={message.id} from={message.from} text={message.text} />
        ))}
        {isLoading && <MessageBubble from="bot" text="Yazıyor..." />}
        <div ref={messagesEndRef} />
      </div>
      <footer className="p-4 bg-gray-900/50 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? 'Lütfen bekleyin...' : 'Mesajını yaz...'}
            disabled={isLoading}
            className="flex-grow bg-gray-700 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-cyan-500 hover:bg-cyan-600 rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <IoMdSend size={20} />
          </button>
        </form>
      </footer>
    </div>
  );
};
