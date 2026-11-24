import type {
  ButtonHTMLAttributes,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",

    secondary:
      "bg-surface-light text-white hover:bg-[#252a48]",

    outline:
      "border border-border text-white hover:bg-surface-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}