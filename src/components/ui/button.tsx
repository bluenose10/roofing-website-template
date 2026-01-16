import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#4B4239] text-white border-2 border-[#F3CD45] hover:bg-[#5D544A]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[#F3CD45] bg-transparent text-[#F3CD45] hover:bg-[#4B4239] hover:text-white",
        secondary: "bg-[#4B4239] text-white border-2 border-[#F3CD45] hover:bg-[#5D544A]",
        ghost: "hover:bg-[#4B4239]/20 hover:text-[#F3CD45]",
        link: "text-[#F3CD45] underline-offset-4 hover:underline",
        // Brown with gold border CTA
        cta: "bg-[#4B4239] text-white border-2 border-[#F3CD45] hover:bg-[#5D544A] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        // WhatsApp specific - stays green
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5",
        // Hero button - brown with gold border
        heroOutline: "bg-[#4B4239] text-white border-2 border-[#F3CD45] hover:bg-[#5D544A]",
        // Glass button - brown with gold border
        glass: "bg-[#4B4239]/90 text-white border-2 border-[#F3CD45] hover:bg-[#5D544A] shadow-lg",
        // Minimal with gold
        minimal: "text-foreground hover:text-[#F3CD45] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
