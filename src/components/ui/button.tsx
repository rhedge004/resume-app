import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-black tracking-[2px] border-[3px] relative cursor-pointer py-[0.25em] px-[0.5em] transition-all duration-100 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-white border-sky-500 shadow-sky-400 shadow-[1px_1px_0_0,2px_2px_0_0,3px_3px_0_0,4px_4px_0_0,5px_5px_0_0] active:translate-x-[5px] active:translate-y-[5px]",
        danger:
          "bg-white border-red-500 shadow-red-400 shadow-[1px_1px_0_0,2px_2px_0_0,3px_3px_0_0,4px_4px_0_0,5px_5px_0_0] active:translate-x-[5px] active:translate-y-[5px]",
      },
      size: {
        default: "",
        sm: "py-[0.1em] px-[0.3em] text-sm",
        lg: "py-[0.4em] px-[0.7em] text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
