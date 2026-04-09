import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, TrendingUp, Shield } from "lucide-react";

interface Step4TikTokProps {
  onNext: () => void;
}

const cards = [
  {
    id: 1,
    title: "El Secreto de los Millonarios",
    stat: "+340%",
    statLabel: "Crecimiento promedio en 10 años",
    body: "Mientras el mercado sube y baja, los planes estructurados solo van en una dirección: hacia arriba. Sin riesgo de pérdida.",
    icon: <TrendingUp className="w-10 h-10 text-yellow-600" strokeWidth={1.5} />,
    bg: "from-zinc-950 via-zinc-900 to-zinc-950",
    accent: "from-yellow-900/20 to-transparent",
    badge: "CASO DE ESTUDIO #1",
  },
  {
    id: 2,
    title: "Cero Impuestos en Retiro",
    stat: "100%",
    statLabel: "Libre de impuestos al retiro",
    body: "Los retiros de un plan estructurado no cuentan como ingreso tributable. Lo que ganas es tuyo — sin compartir con el gobierno.",
    icon: <Shield className="w-10 h-10 text-red-700" strokeWidth={1.5} />,
    bg: "from-zinc-950 via-zinc-900 to-zinc-950",
    accent: "from-red-900/20 to-transparent",
    badge: "CASO DE ESTUDIO #2",
    isLast: true,
  },
];

export default function Step4TikTok({ onNext }: Step4TikTokProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  function handleScroll() {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const idx = Math.round(scrollTop / height);
    setActiveCard(idx);
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-screen overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
    >
      {cards.map((card, i) => (
        <div
          key={card.id}
          className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${card.bg}`} />
          <div className={`absolute inset-0 bg-gradient-to-b ${card.accent}`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 w-full max-w-sm mx-auto px-6 flex flex-col items-center text-center gap-6"
          >
            <div className="text-[10px] font-mono text-zinc-500 tracking-[0.25em] uppercase border border-zinc-700/50 rounded-full px-3 py-1">
              {card.badge}
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-700/40 backdrop-blur-sm">
              {card.icon}
            </div>

            <div>
              <div className="text-5xl font-black text-white mb-1">{card.stat}</div>
              <div className="text-xs font-mono text-zinc-400 tracking-wider">{card.statLabel}</div>
            </div>

            <h2 className="text-xl font-black text-white leading-tight">{card.title}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">{card.body}</p>

            {card.isLast ? (
              <motion.button
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 0 20px rgba(153,27,27,0.3)",
                    "0 0 40px rgba(153,27,27,0.6)",
                    "0 0 20px rgba(153,27,27,0.3)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={onNext}
                className="w-full py-5 bg-gradient-to-r from-red-900 to-red-700 hover:from-red-800 hover:to-red-600 text-white font-black text-base tracking-widest uppercase rounded-xl border border-red-700/50 transition-all duration-200 active:scale-[0.98] mt-2"
              >
                CONSTRUIR MI ESCUDO →
              </motion.button>
            ) : (
              <div className="flex flex-col items-center gap-1 mt-2">
                <span className="text-xs text-zinc-500 font-mono">desliza para continuar</span>
                <ChevronDown className="w-5 h-5 text-zinc-600 animate-bounce" />
              </div>
            )}
          </motion.div>

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
            {cards.map((_, j) => (
              <div
                key={j}
                className={`w-1 rounded-full transition-all duration-300 ${
                  activeCard === j ? "h-6 bg-white" : "h-2 bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
