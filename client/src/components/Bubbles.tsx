/*
 * シャボン玉アニメーション
 * ミントグリーンのシャボン玉がゆっくり浮遊する背景装飾
 * bubbleFloat キーフレームで実装（index.css に定義）
 */
import { useMemo } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function Bubbles() {
  const bubbles = useMemo<Bubble[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 16,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 18,
      opacity: Math.random() * 0.22 + 0.08,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {bubbles.map((bubble) => {
        const s = bubble.size;
        const o = bubble.opacity;
        return (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${s}px`,
              height: `${s}px`,
              left: `${bubble.left}%`,
              bottom: "-10%",
              background: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,${o * 1.5}) 0%, transparent 40%),
                radial-gradient(circle at 70% 75%, rgba(152,224,210,${o * 0.4}) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%,
                  rgba(152,230,210,${o * 0.15}) 0%,
                  rgba(170,235,200,${o * 0.1}) 40%,
                  rgba(200,245,225,${o * 0.05}) 70%,
                  transparent 100%)
              `,
              boxShadow: `
                inset 0 0 ${s * 0.4}px rgba(152,224,210,${o * 0.3}),
                inset ${s * 0.08}px ${s * 0.08}px ${s * 0.15}px rgba(255,255,255,${o * 1.2}),
                0 0 ${s * 0.2}px rgba(152,224,210,${o * 0.15})
              `,
              border: `1px solid rgba(152,224,210,${o * 0.4})`,
              animation: `bubbleFloat ${bubble.duration}s ${bubble.delay}s infinite ease-in-out`,
            }}
          />
        );
      })}
    </div>
  );
}
