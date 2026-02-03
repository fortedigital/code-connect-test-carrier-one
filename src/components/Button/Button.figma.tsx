import Button from "./Button";
import figma from "@figma/code-connect";
import type { ButtonProps, ButtonVariant } from "./Button";

// Figma passes the enum *values* (code values) to the example; keys must match Figma variant option names exactly
type FigmaButtonExampleProps = {
  variant?: ButtonVariant;
  size?: NonNullable<ButtonProps["size"]>;
  roundness?: NonNullable<ButtonProps["roundness"]>;
  state?: "default" | "hover" | "focus" | "disabled";
};

figma.connect(
  Button,
  "https://www.figma.com/design/LHYOb1IKNLz2h5wrWeqcv7/shadcn-ui-%E2%80%93-Carrier1?node-id=9-1071&m=dev",
  {
    props: {
      variant: figma.enum("Variant", {
        Primary: "primary",
        Secondary: "secondary",
        Destructive: "destructive",
        Ghost: "ghost",
        "Ghost Muted": "ghost-muted",
        "Ghost Nav": "ghost-nav",
        Outline: "outline",
      }),
      size: figma.enum("Size", {
        Regular: "default",
        Small: "sm",
        Large: "lg",
        Mini: "mini",
      }),
      roundness: figma.enum("Roundness", {
        Default: "default",
        Round: "round",
      }),
      // State: we only map Disabled to disabled prop; Default / Hover & Active / Focus are stylistic
      state: figma.enum("State", {
        Default: "default",
        "Hover & Active": "hover",
        Focus: "focus",
        Disabled: "disabled",
      }),
    },
    example: (props: FigmaButtonExampleProps) => {
      // Fallbacks so the panel shows a default when no variant/size/roundness is selected
      const variant = props.variant ?? "primary";
      const size = props.size ?? "default";
      const roundness = props.roundness ?? "default";
      const disabled = props.state === "disabled";
      return (
        <Button variant={variant} size={size} roundness={roundness} disabled={disabled}>
          Click me
        </Button>
      );
    },
  }
);
