import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "outline",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent"
      : "border border-ink text-ink hover:bg-ink hover:text-paper";

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}