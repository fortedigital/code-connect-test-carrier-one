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
};

const Button = ({
  variant = "primary",
  size = "default",
  roundness = "default",
  label,
  children,
  ...props
}: ButtonProps) => {
  const content = children ?? label;

  return (
    <button className="bg-blue-500 text-white p-2 rounded-md inline-flex items-center gap-2" {...props}>
      {content}
    </button>
  );
};

export default Button;
