// components/chat/ChatBubble.tsx

import { BsChatDotsFill } from "react-icons/bs";

interface ChatBubbleProps {
  onClick: () => void;
}

export const ChatBubble = ({ onClick }: ChatBubbleProps) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-8 right-8 z-50
        w-16 h-16 
        bg-cyan-500 
        rounded-full 
        shadow-lg 
        flex items-center justify-center 
        text-white 
        hover:bg-cyan-600 
        hover:scale-110 
        focus:outline-none 
        focus:ring-4 focus:ring-cyan-300
        transition-all duration-300 ease-in-out
        animate-pulse-slow
        cursor-pointer /* <-- YENİ EKLENEN CLASS */
      "
      aria-label="Sohbeti aç"
    >
      <BsChatDotsFill size={32} />
    </button>
  );
};
