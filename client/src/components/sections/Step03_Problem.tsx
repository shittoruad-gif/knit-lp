/*
 * ③ 問題提起（放置リスク）
 * 役割：「このままだとどうなるか」を優しく伝える
 * ルール：脅しではなく、気づきを与える。柔らかいトーン
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { LOGO_CAT_SLEEPING } from "@/lib/images";

export default function Step03Problem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Soft gradient bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(242,213,208,0.08) 0%, rgba(242,213,208,0.15) 50%, rgba(242,213,208,0.08) 100%)" }} />

      <div className="container relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className={`font-heading text-lg lg:text-xl font-bold mb-10 lg:mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ color: "#5C4D3C" }}
          >
            でも、こんなふうに思っていませんか？
          </h2>

          {/* Problem cards */}
          <div className="space-y-4 lg:space-y-5 text-left">
            {[
              "「自分へのご褒美なんて、贅沢かな……」",
              "「忙しいから、また今度でいいか」",
              "「どうせすぐ飽きるし、すぐ大きくなるから勿体ない」",
            ].map((text, i) => (
              <div
                key={i}
                className={`relative p-5 lg:p-6 rounded-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{
                  transitionDelay: `${300 + i * 200}ms`,
                  background: "rgba(255,255,255,0.6)",
                  borderLeft: "3px solid rgba(212,160,160,0.4)",
                }}
              >
                <p className="font-accent text-sm lg:text-base leading-relaxed" style={{ color: "#6B5B4E" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Gentle warning with brand logo */}
          <div className={`mt-12 lg:mt-16 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="relative inline-block">
              <img
                src={LOGO_CAT_SLEEPING}
                alt="ほっこりハンドクラフト ロゴ"
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain opacity-60 mx-auto mb-6 drop-shadow-sm"
              />
            </div>
            <p className="font-body text-sm lg:text-base leading-[2]" style={{ color: "#8C7B6B" }}>
              「自分のこと」を後回しにし続けると、
              <br />
              いつの間にか、心の余裕がなくなってしまいます。
            </p>
            <p className="font-body text-sm lg:text-base leading-[2] mt-4" style={{ color: "#8C7B6B" }}>
              小さな疲れは、気づかないうちに積み重なるもの。
              <br />
              <span className="font-accent" style={{ color: "#C4908F" }}>
                だからこそ、「ちいさなご褒美」が大切なのです。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
