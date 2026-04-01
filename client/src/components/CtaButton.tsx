/*
 * 共通CTAボタン — 感情が動いた瞬間に配置
 * BASEショップへの導線
 * 柔らかいトーンで、押し売り感を排除
 */

interface CtaButtonProps {
  variant?: "primary" | "secondary" | "soft";
  className?: string;
}

export default function CtaButton({ variant = "primary", className = "" }: CtaButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-heading text-sm lg:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary: "hover:shadow-lg text-[#FDF8F0]",
    secondary: "hover:shadow-md text-[#FDF8F0]",
    soft: "hover:shadow-md border-2",
  };

  const styles = {
    primary: { background: "linear-gradient(135deg, #D4A0A0, #C4908F)" },
    secondary: { background: "linear-gradient(135deg, #C4A882, #B89872)" },
    soft: { borderColor: "#D4A0A0", color: "#D4A0A0", background: "rgba(212, 160, 160, 0.06)" },
  };

  return (
    <a
      href="https://hokkorinit.base.shop/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={styles[variant]}
    >
      ショップを見てみる
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-0.5">
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}
