"use client"; // Chat bileşenlerini ve context'i kullandığımız için layout'u client component yapmamız gerekebilir.
// Veya daha iyi bir yöntem olarak, bu bileşenleri ayrı bir client component'e taşıyabiliriz.
// Şimdilik en basit yöntemle ilerleyelim.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatProvider, useChat } from "@/context/ChatContext";

// --- Yeni Bileşenler Import Ediliyor ---
import { ChatBubble } from "@/components/chat/ChatBubble";
import { ChatWindow } from "@/components/chat/ChatWindow";

const inter = Inter({ subsets: ["latin"] });

// Metadata'yı bu şekilde dışarıda bırakabiliriz.
// export const metadata: Metadata = { ... };

// Bu sarmalayıcı, layout'un kendisinin 'use client' olmasını engeller. Daha iyi bir pratiktir.
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

      {/* --- Sohbet Bileşenleri State'e Bağlandı --- */}
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
