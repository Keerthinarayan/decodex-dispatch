import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const vintageButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300 font-display font-medium tracking-wide",
  {
    variants: {
      variant: {
        hero: "bg-gradient-gold text-vintage-sepia shadow-golden hover:shadow-vintage border-2 border-vintage-brass hover:scale-105",
        detective: "bg-vintage-leather text-vintage-parchment shadow-deep hover:bg-vintage-sepia border border-vintage-gold hover:shadow-golden",
        register: "bg-gradient-mystery text-vintage-gold shadow-vintage hover:bg-vintage-sepia border-2 border-vintage-gold hover:scale-110 animate-glow",
        ghost: "border-2 border-vintage-brass text-vintage-sepia hover:bg-vintage-smoke hover:text-vintage-leather",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "detective",
      size: "default",
    },
  }
);

export interface VintageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof vintageButtonVariants> {
  asChild?: boolean;
}

const VintageButton = React.forwardRef<HTMLButtonElement, VintageButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <Button
        className={cn(vintageButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vintage-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </Button>
    );
  }
);
VintageButton.displayName = "VintageButton";

export { VintageButton, vintageButtonVariants };