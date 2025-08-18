import { BsChatDotsFill } from 'react-icons/bs';

interface ChatBubbleProps {
  onClick: () => void;
}

export const ChatBubble = ({ onClick }: ChatBubbleProps) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-4 right-4 z-50  
        sm:bottom-8 sm:right-8      
        w-14 h-14                     
        sm:w-16 sm:h-16               
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
        cursor-pointer
      "
      aria-label="Sohbeti aç"
    >
      {/* İkon boyutu da ekran boyutuna göre ayarlandı */}
      <BsChatDotsFill className="w-7 h-7 sm:w-8 sm:h-8" />
    </button>
  );
};
