import type { ButtonHTMLAttributes } from "react";
import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "ghost"
  | "ghost-muted"
  | "ghost-nav"
  | "outline";

export type ButtonSize = "default" | "sm" | "lg" | "mini";

export type ButtonRoundness = "default" | "round";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  roundness?: ButtonRoundness;
  label?: string;
  children?: ReactNode;
  disabled?: boolean;
};

const Button = ({
  variant = "primary",
  size = "default",
  roundness = "default",
  disabled = false,
  label,
  children,
  ...props
}: ButtonProps) => {
  const content = children ?? label;

  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md inline-flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
      {...props}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
