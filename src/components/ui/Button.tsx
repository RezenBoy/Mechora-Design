import { useState, type ButtonHTMLAttributes, type ReactNode, type MouseEvent } from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  icon?: ReactNode;
  as?: "button" | "a";
  href?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-secondary text-white hover:bg-[#004a9e] shadow-[0_8px_24px_-8px_rgba(0,86,179,0.55)]",
  outline:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  ghost:
    "bg-white text-primary border border-line hover:border-accent hover:text-secondary",
};

export default function Button({
  variant = "primary",
  children,
  icon,
  className = "",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 650);
  };

  const classes = `relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase rounded-sm transition-all duration-300 focus-ring cursor-pointer ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-[ripple_0.65s_ease-out]"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%,-50%)",
          }}
        />
      ))}
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} onClick={handleClick as unknown as (e: MouseEvent<HTMLAnchorElement>) => void}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {content}
    </button>
  );
}
