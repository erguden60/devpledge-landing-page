import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        bg-gray-800/50 backdrop-blur-sm 
        border border-gray-700/60 
        rounded-xl 
        p-8 
        transition-all duration-300 
        hover:border-cyan-400/50 
        hover:shadow-lg hover:shadow-cyan-500/10
        hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </div>
  );
};
