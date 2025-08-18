import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // Buton varyantları
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4";

  const variantStyles = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-300",
    secondary:
      "border-2 border-gray-500 hover:border-cyan-400 hover:text-cyan-400 text-gray-200 bg-transparent focus:ring-gray-600",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
