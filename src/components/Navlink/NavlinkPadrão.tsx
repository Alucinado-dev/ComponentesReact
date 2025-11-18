import type { LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/* 
  npm install lucide-react 
  npm install class-variance-authority tailwind-merge
  npm install @radix-ui/react-slot
*/

const navlinkVariants = cva(
  /* Base styles */
  "flex items-center justify-center gap-2 py-3 px-2 transition-colors duration-200",
  {
    variants: {
      /* Default variant styles */
      variant: {
        default:
          "bg-[var(--navlink-box-color)] border-[var(--navlink-box-border)] shadow-[var(--navlink-box-shadow)] hover:bg-[var(--navlink-box-hover)] active:bg-[var(--navlink-box-active)] text-[var(--navlink-text-color)] text-shadow-[var(--navlink-text-shadow)] hover:text-[var(--navlink-text-hover)] active:text-[var(--navlink-text-active)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type NavlinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof navlinkVariants> & {
    text: string;
    Icon: LucideIcon;
    asChild?: boolean;
  };

const Navlink = ({
  className,
  variant,
  Icon,
  text,
  asChild = false,
  ...props
}: NavlinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={twMerge(navlinkVariants({ variant, className }))}
      {...props}
    >
      <Icon size={24} />
      <span>{text}</span>
    </Comp>
  );
};

export default Navlink;
