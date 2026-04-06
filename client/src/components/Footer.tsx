/*
 * フッター — ブランドロゴ + ナビゲーション
 * ブランド：ほっこりハンドクラフト（PAW Co.）
 */
import { LOGO_CAT } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="relative py-12 lg:py-16" style={{ background: "rgba(92,77,60,0.04)" }}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 mb-10">
            {/* Brand Logo */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                <img
                  src={LOGO_CAT}
                  alt="Paw Company ロゴ"
                  className="w-9 h-9 object-contain drop-shadow-sm"
                />
                <span className="font-heading text-lg font-bold" style={{ color: "#6B5B4E" }}>
                  Paw Company
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: "#A0907E" }}>
                ひと針ひと針、心を込めて。
                <br />
                手作りの温もりをあなたに届けます。
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {[
                { label: "コンセプト", href: "#concept" },
                { label: "商品紹介", href: "#products" },
                { label: "口コミ", href: "#reviews" },
                { label: "作り手の想い", href: "#maker" },
                { label: "よくある質問", href: "#faq" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-body text-xs transition-colors duration-300 hover:opacity-70"
                  style={{ color: "#8C7B6B" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="washi-divider mb-6" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs" style={{ color: "#B0A598" }}>
              &copy; 2025 Paw Company All rights reserved.
            </p>
            <a
              href="https://hokkorinit.base.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs transition-colors duration-300 hover:opacity-70"
              style={{ color: "#A0907E" }}
            >
              BASEショップ →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
