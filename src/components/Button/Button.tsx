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

export type ButtonShape = "default" | "round";

type ButtonNoIcon = {
  iconPosition?: "none";
  icon?: never;
  leftIcon?: never;
  rightIcon?: never;
};

type ButtonOneIcon = {
  iconPosition: "left" | "right";
  icon: ReactNode;
  leftIcon?: never;
  rightIcon?: never;
};

type ButtonBothIcons = {
  iconPosition: "both";
  icon?: never;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
};

export type ButtonIconProps = ButtonNoIcon | ButtonOneIcon | ButtonBothIcons;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonIconProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    label?: string;
  };

const Button = ({
  variant = "primary",
  size = "default",
  shape = "default",
  iconPosition,
  icon,
  leftIcon,
  rightIcon,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded-md" {...props}>
      {label}
    </button>
  );
};

export default Button;
