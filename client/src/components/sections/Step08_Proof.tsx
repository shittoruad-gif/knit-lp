/*
 * ⑧ 実績（口コミ + 商品紹介）【信用】
 * 役割：「同じ人が良くなった証拠」を見せる
 * ルール：すごさのアピールではなく、共感できる声
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PRODUCTS, NEW_PRODUCTS } from "@/lib/images";

const reviews = [
  {
    name: "M.K さん",
    age: "30代・2児の親",
    text: "子どもが「これ、あったかーい！」と\n毎日抱きしめています。\n手作りのぬくもりが伝わるんですね。\n私も触るたびに、ほっとします。",
    stars: 5,
    product: "ハチワレ猫のぬいぐるみ",
  },
  {
    name: "S.T さん",
    age: "40代・会社員",
    text: "友人への出産祝いに贈りました。\n「こんな素敵なもの初めて！」と\nとても喜んでもらえました。\n自分用にもほしくなりました。",
    stars: 5,
    product: "ベビーニット帽",
  },
  {
    name: "A.N さん",
    age: "50代・主婦",
    text: "自分へのご褒美に購入しました。\n手に取ると、本当にあたたかくて。\n忙しい日の終わりに眺めるだけで\n心が落ち着きます。",
    stars: 5,
    product: "ニットポーチ",
  },
];

const products = [
  { image: NEW_PRODUCTS.APRON_DRESS_1, name: "エプロンドレス", desc: "桜の季節にぴったり。手作りのやさしいシルエット。" },
  { image: NEW_PRODUCTS.VEST_BOY, name: "カラフルニットベスト", desc: "男の子にも女の子にも。手編みの温もりを日常に。" },
  { image: PRODUCTS.IMG_9244, name: "もこもこベビーハット", desc: "ふわふわのくま耳がポイント。赤ちゃんの可愛さを引き立てます。" },
  { image: PRODUCTS.IMG_9237, name: "手編みのお花ブーケ", desc: "色とりどりのお花をひとつひとつ手編みで。特別な日の贈りものに。" },
  { image: PRODUCTS.IMG_9228, name: "バースデーデコレーション", desc: "お子さまの特別な日を、手作りの飾りで華やかに。" },
  { image: PRODUCTS.IMG_9223, name: "カラフルいもむし", desc: "にぎにぎできるカラフルなあみぐるみ。お子さまの遊び相手に。" },
];

const galleryImages = [
  NEW_PRODUCTS.APRON_DRESS_1, NEW_PRODUCTS.VEST_BOY,
  PRODUCTS.IMG_9221, PRODUCTS.IMG_9229, PRODUCTS.IMG_9230,
  NEW_PRODUCTS.APRON_DRESS_2, PRODUCTS.IMG_9231, PRODUCTS.IMG_9232,
  PRODUCTS.IMG_9240, PRODUCTS.IMG_9241, PRODUCTS.IMG_9242,
  NEW_PRODUCTS.APRON_DRESS_3, PRODUCTS.IMG_9233, PRODUCTS.IMG_9236,
  PRODUCTS.IMG_9239, PRODUCTS.IMG_9244,
];

function GalleryCarousel({ visible }: { visible: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      // If near the end, scroll back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth * 0.4, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className={`mt-10 lg:mt-14 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <p className="font-heading text-sm font-bold text-center mb-6" style={{ color: "#5C4D3C" }}>
        その他の作品
      </p>
      <div className="relative group">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          style={{ color: "#5C4D3C" }}
          aria-label="前へ"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        </button>
        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          style={{ color: "#5C4D3C" }}
          aria-label="次へ"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
        </button>
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 snap-start rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{ boxShadow: "0 1px 6px rgba(107,91,78,0.06)" }}
            >
              <img src={img} alt="ほっこりハンドクラフト作品" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Step08Proof() {
  const { ref: reviewRef, isVisible: reviewVisible } = useScrollAnimation();
  const { ref: productRef, isVisible: productVisible } = useScrollAnimation();
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container">
        {/* === 口コミ === */}
        <div className="max-w-4xl mx-auto mb-20 lg:mb-28" ref={reviewRef}>
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              Voice
            </span>
            <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
              届いた声をご紹介します
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: "#A0907E" }}>
              ——同じように悩んでいた方からの、うれしいお便り
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-7 transition-all duration-700 hover:shadow-md ${reviewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{
                  transitionDelay: `${300 + i * 200}ms`,
                  boxShadow: "0 2px 16px rgba(107,91,78,0.05)",
                }}
              >
                {/* Tape */}
                <div className="absolute -top-2 left-6 w-14 h-5 rounded-sm opacity-50" style={{ background: `linear-gradient(135deg, ${i === 0 ? "#D8CDE5, #C8BDD5" : i === 1 ? "#F2D5D0, #E8C5C0" : "#B8C9A3, #A8B993"})`, transform: `rotate(${i % 2 === 0 ? -2 : 3}deg)` }} />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#D4A0A0">
                      <path d="M8 1.5L9.8 5.2L14 5.8L11 8.7L11.7 12.8L8 10.9L4.3 12.8L5 8.7L2 5.8L6.2 5.2L8 1.5Z" />
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p className="font-body text-sm leading-[1.9] whitespace-pre-line mb-5" style={{ color: "#6B5B4E" }}>
                  {review.text}
                </p>

                {/* Reviewer info */}
                <div className="border-t pt-4" style={{ borderColor: "rgba(212,197,160,0.3)" }}>
                  <p className="font-heading text-xs font-bold" style={{ color: "#5C4D3C" }}>{review.name}</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "#A0907E" }}>{review.age}｜{review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === 商品紹介 === */}
        <div className="max-w-4xl mx-auto" id="products" ref={productRef}>
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${productVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              Products
            </span>
            <h2 className="font-heading text-xl lg:text-2xl font-bold" style={{ color: "#5C4D3C" }}>
              商品のご紹介
            </h2>
          </div>

          {/* Product gallery */}
          <div className={`transition-all duration-700 delay-200 ${productVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden mb-4" style={{ boxShadow: "0 4px 20px rgba(107,91,78,0.08)" }}>
              <img
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="w-full aspect-[4/3] object-cover transition-opacity duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7" style={{ background: "linear-gradient(transparent, rgba(92,77,60,0.7))" }}>
                <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-1">
                  {products[activeProduct].name}
                </h3>
                <p className="font-body text-xs lg:text-sm text-white/80">
                  {products[activeProduct].desc}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2 lg:gap-3">
              {products.map((product, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProduct(i)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    activeProduct === i
                      ? "ring-2 ring-[#D4A0A0] ring-offset-2 ring-offset-[#FDF8F0] scale-95"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* More products gallery — auto-sliding carousel */}
          <GalleryCarousel visible={productVisible} />
        </div>
      </div>
    </section>
  );
}
