import Button from "@/components/Button/Button";
import type { ButtonVariant, ButtonSize } from "@/components/Button/Button";

type ButtonConfig = {
  variant: ButtonVariant;
  size?: ButtonSize;
  roundness?: "default" | "round";
  disabled?: boolean;
  label: string;
};

const buttons: ButtonConfig[] = [
  // All 7 variants, default size
  { variant: "primary", label: "Primary" },
  { variant: "secondary", label: "Secondary" },
  { variant: "destructive", label: "Destructive" },
  { variant: "ghost", label: "Ghost" },
  { variant: "ghost-muted", label: "Ghost Muted" },
  { variant: "ghost-nav", label: "Ghost Nav" },
  { variant: "outline", label: "Outline" },
  // Sizes: sm, lg, mini for primary
  { variant: "primary", size: "sm", label: "Primary Sm" },
  { variant: "primary", size: "lg", label: "Primary Lg" },
  { variant: "primary", size: "mini", label: "Primary Mini" },
  // Round
  { variant: "primary", roundness: "round", label: "Primary Round" },
  { variant: "outline", roundness: "round", label: "Outline Round" },
  // Disabled
  { variant: "primary", disabled: true, label: "Primary Disabled" },
  { variant: "secondary", disabled: true, label: "Secondary Disabled" },
  { variant: "destructive", disabled: true, label: "Destructive Disabled" },
  { variant: "ghost", disabled: true, label: "Ghost Disabled" },
  { variant: "outline", disabled: true, label: "Outline Disabled" },
  // Variant + size combos
  { variant: "secondary", size: "sm", label: "Secondary Sm" },
  { variant: "destructive", size: "lg", label: "Destructive Lg" },
  { variant: "ghost", size: "mini", label: "Ghost Mini" },
  { variant: "ghost-muted", size: "sm", label: "Ghost Muted Sm" },
  { variant: "ghost-nav", size: "lg", label: "Ghost Nav Lg" },
  { variant: "outline", size: "sm", label: "Outline Sm" },
  // More variety
  { variant: "primary", size: "lg", roundness: "round", label: "Primary Lg Round" },
  { variant: "secondary", size: "mini", label: "Secondary Mini" },
  { variant: "destructive", size: "mini", roundness: "round", label: "Destructive Mini Round" },
  { variant: "ghost-muted", size: "lg", disabled: true, label: "Ghost Muted Lg Disabled" },
  { variant: "outline", size: "lg", roundness: "round", label: "Outline Lg Round" },
  { variant: "secondary", roundness: "round", label: "Secondary Round" },
  { variant: "ghost-nav", size: "mini", label: "Ghost Nav Mini" },
];

export default function ButtonPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <h1 className="mb-2 text-2xl font-semibold text-foreground">
        Button variants
      </h1>
      <p className="mb-8 text-muted-foreground">
        30 different button types (variant, size, roundness, state)
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {buttons.map((config, i) => (
          <div key={i} className="flex flex-col gap-1">
            <Button
              variant={config.variant}
              size={config.size ?? "default"}
              roundness={config.roundness ?? "default"}
              disabled={config.disabled}
            >
              {config.label}
            </Button>
            <span className="text-xs text-neutral-500">
              {config.label}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
