import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  className = "",
  ariaLabel,
}) => {
  const baseStyles =
    "font-semibold rounded-full cursor-pointer transition-colors duration-200";

  const variantStyles = {
    primary:
      "bg-[#ff7e4f] hover:bg-orange-100 hover:border-orange-500 border-2 text-white hover:text-black",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline:
      "border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
};
