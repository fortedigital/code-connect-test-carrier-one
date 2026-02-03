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

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary)] text-[var(--button-primary-foreground)] hover:bg-[var(--button-primary-hover)] focus-visible:ring-[var(--button-focus-ring)]",
  secondary:
    "bg-[var(--button-secondary)] text-[var(--button-secondary-foreground)] hover:bg-[var(--button-secondary-hover)] hover:text-white focus-visible:ring-[var(--button-focus-ring)]",
  destructive:
    "bg-[var(--button-destructive)] text-[var(--button-destructive-foreground)] hover:bg-[var(--button-destructive-hover)] focus-visible:ring-[var(--button-focus-ring-error)]",
  ghost:
    "bg-[var(--button-ghost)] text-[var(--button-ghost-foreground)] hover:bg-[var(--button-ghost-hover)] focus-visible:ring-[var(--button-focus-ring)]",
  "ghost-muted":
    "bg-[var(--button-ghost)] text-[var(--button-ghost-muted-foreground)] hover:bg-[var(--button-ghost-hover)] focus-visible:ring-[var(--button-focus-ring)]",
  "ghost-nav":
    "bg-[var(--button-ghost)] text-[var(--button-ghost-foreground)] hover:bg-[var(--button-ghost-hover)] focus-visible:ring-[var(--button-focus-ring)]",
  outline:
    "border border-[var(--button-outline-border)] bg-transparent text-[var(--button-ghost-foreground)] hover:bg-[var(--button-outline-hover)] hover:border-[var(--button-outline-hover-border)] focus-visible:ring-[var(--button-focus-ring)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  mini: "py-1.5 px-2 text-xs",
  sm: "py-1.5 px-3 text-sm",
  default: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-base",
};

const roundnessClasses: Record<ButtonRoundness, string> = {
  default: "rounded-lg",
  round: "rounded-full",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const Button = ({
  variant = "primary",
  size = "default",
  roundness = "default",
  disabled = false,
  label,
  children,
  className,
  ...props
}: ButtonProps) => {
  const content = children ?? label;
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    roundnessClasses[roundness],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
