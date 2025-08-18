"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Message {
  id: string;
  text: string;
  from: "user" | "bot";
}

interface ChatContextType {
  isChatOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  toggleChat: () => void;
  addMessage: (message: Message) => void;
  setLoading: (loading: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-message",
      from: "bot",
      text: "Merhaba! DevPledge Eğitim Vakfı'na hoş geldin. Sana nasıl yardımcı olabilirim?",
    },
  ]);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const value = {
    isChatOpen,
    messages,
    isLoading,
    toggleChat,
    addMessage,
    setLoading,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
