/*
 * ヘッダー — ブランドロゴ（ハチワレ猫）+ ナビゲーション
 * ブランド：ほっこりハンドクラフト（PAW Co.）
 */
import { useState, useEffect } from "react";
import { PAW_CO_LOGOS } from "@/lib/images";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "コンセプト", href: "#concept" },
    { label: "商品紹介", href: "#products" },
    { label: "口コミ", href: "#reviews" },
    { label: "作り手の想い", href: "#maker" },
    { label: "よくある質問", href: "#faq" },
    { label: "ショップ", href: "#cta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDF8F0]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-3 lg:py-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Paw Company トップへ戻る">
          <img
            src={PAW_CO_LOGOS.LOGO_3}
            alt="Paw Company ロゴ"
            className="w-10 h-10 lg:w-12 lg:h-12 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
          />
          <span className="font-heading text-lg lg:text-xl font-bold transition-colors duration-300" style={{ color: "#6B5B4E" }}>
            Paw Company
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading text-sm tracking-wide transition-colors duration-300 hover:opacity-70"
              style={{ color: "#8C7B6B" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
            style={{ background: "#8C7B6B" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
            style={{ background: "#8C7B6B" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
            style={{ background: "#8C7B6B" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(253, 248, 240, 0.98)" }}
      >
        <nav className="container flex flex-col gap-1 pb-4">
          {/* Mobile logo repeat */}
          <div className="flex items-center gap-2 px-4 py-3 mb-1 border-b" style={{ borderColor: "rgba(212,197,160,0.3)" }}>
            <img src={PAW_CO_LOGOS.LOGO_3} alt="Paw Company ロゴ" className="w-8 h-8 object-contain" />
            <span className="font-heading text-sm font-bold" style={{ color: "#6B5B4E" }}>Paw Company</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-sm py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-[#F2D5D0]/30"
              style={{ color: "#8C7B6B" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
