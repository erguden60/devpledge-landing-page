"use client"; 


import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatProvider, useChat } from "@/context/ChatContext";


import { ChatBubble } from "@/components/chat/ChatBubble";
import { ChatWindow } from "@/components/chat/ChatWindow";

const inter = Inter({ subsets: ["latin"] });


const ClientLayoutComponents = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isChatOpen, toggleChat } = useChat();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      
      <ChatWindow isOpen={isChatOpen} onClose={toggleChat} />
      <ChatBubble onClick={toggleChat} />
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <ChatProvider>
          <ClientLayoutComponents>{children}</ClientLayoutComponents>
        </ChatProvider>
      </body>
    </html>
  );
}
