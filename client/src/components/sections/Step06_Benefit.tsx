/*
 * ⑥ ベネフィット（未来の変化）【安心】+ CTA③
 * 役割：商品説明ではなく「生活の変化」を見せる
 * 使用シーン写真で未来を想像させる
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PRODUCTS, SPRING, NEW_PRODUCTS } from "@/lib/images";
import CtaButton from "@/components/CtaButton";

const benefits = [
  {
    image: NEW_PRODUCTS.APRON_DRESS_2,
    title: "春のおでかけが、もっと楽しくなる",
    text: "手作りのお洋服を着て、桜の下をおさんぽ。\nお子さまの「かわいい！」がひとつ増えて、\n季節を一緒に楽しむ時間が生まれます。",
    rotate: "-1.5deg",
  },
  {
    image: NEW_PRODUCTS.VEST_BOY,
    title: "男の子も女の子も、みんなほっこり",
    text: "カラフルなニットベストは、\nお子さまの元気な姿にぴったり。\n性別を選ばない手作りの温もりです。",
    rotate: "1.5deg",
  },
  {
    image: NEW_PRODUCTS.APRON_DRESS_1,
    title: "「見て見て！」の瞬間が、宝物になる",
    text: "お気に入りの一着を身につけて走り出す姿。\nその何気ない一瞬が、\n親子のかけがえのない思い出になります。",
    rotate: "-1deg",
  },
  {
    image: PRODUCTS.IMG_9243,
    title: "朝、出かける前のほっとする瞬間",
    text: "お気に入りのニットを手に取るだけで、\n「今日もがんばろう」と思える。\nそんな小さなスイッチになります。",
    rotate: "1.5deg",
  },
  {
    image: NEW_PRODUCTS.APRON_DRESS_3,
    title: "ちいさな背中に、やさしさを込めて",
    text: "ひと針ひと針に込めた想いは、\nお子さまの毎日をそっと包みます。\n手作りだから伝わる、温もりがあります。",
    rotate: "-1deg",
  },
  {
    image: PRODUCTS.IMG_9234,
    title: "大切な人に、気持ちが届く",
    text: "「ありがとう」の代わりに、\n手作りのぬくもりを贈る。\n言葉にできない想いが、伝わります。",
    rotate: "1.5deg",
  },
];

export default function Step06Benefit() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28">
      <div className="container" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border mb-5" style={{ color: "#A0907E", borderColor: "#D4C5A0" }}>
              Benefit
            </span>
            <h2 className="font-accent text-xl sm:text-2xl lg:text-3xl leading-relaxed" style={{ color: "#5C4D3C" }}>
              ほっこりハンドクラフトがある暮らし
            </h2>
            <p className="font-body text-sm mt-3" style={{ color: "#A0907E" }}>
              ——こんな「ちいさな変化」が生まれます
            </p>
          </div>

          {/* Benefit cards — alternating layout */}
          <div className="space-y-12 lg:space-y-16">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`lg:flex lg:items-center lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                {/* Image */}
                <div className="lg:w-5/12 mb-6 lg:mb-0">
                  <div
                    className="photo-frame rounded-sm overflow-hidden"
                    style={{ "--rotate": item.rotate } as React.CSSProperties}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:w-7/12">
                  <h3 className="font-heading text-base lg:text-lg font-bold mb-4" style={{ color: "#5C4D3C" }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm lg:text-base leading-[2] whitespace-pre-line" style={{ color: "#8C7B6B" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA③ */}
          <div className={`mt-14 lg:mt-20 text-center transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <p className="font-accent text-base lg:text-lg mb-6" style={{ color: "#C4908F" }}>
              あなたの毎日に、ほっこりを——
            </p>
            <CtaButton variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
