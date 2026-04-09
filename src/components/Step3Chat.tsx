import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Shield } from "lucide-react";

interface Step3ChatProps {
  onNext: () => void;
}

const MESSAGES = [
  {
    text: "Acceso concedido. Iniciando análisis patrimonial...",
    delay: 400,
  },
  {
    text: "El sistema tradicional te hace asumir TODO el riesgo.",
    delay: 1800,
  },
  {
    text: "Los millonarios usan Planes Estructurados: Crecimiento sin riesgo y retiros libres de impuestos.",
    delay: 3400,
  },
  {
    text: "Este es el mismo sistema que usan los bancos para proteger SU dinero... no el tuyo.",
    delay: 5400,
  },
];

export default function Step3Chat({ onNext }: Step3ChatProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    MESSAGES.forEach((msg, i) => {
      setTimeout(() => {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, i]);
        }, 800);
      }, msg.delay);
    });

    setTimeout(() => setShowButton(true), 7200);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 flex flex-col"
    >
      <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center gap-3">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-red-900/30 border border-red-800/50 flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-700" />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-zinc-900" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Asesor Patrimonial IA</div>
          <div className="text-[10px] font-mono text-green-500 tracking-wider">● CIFRADO ACTIVO</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[9px] font-mono text-zinc-600">E2E-256</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence>
          {visibleMessages.map((idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-3 max-w-[85%]"
            >
              <div className="w-7 h-7 rounded-full bg-red-900/30 border border-red-800/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-3.5 h-3.5 text-red-700" />
              </div>
              <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl rounded-tl-sm px-4 py-3 shadow-lg">
                <p className="text-sm text-zinc-200 leading-relaxed">{MESSAGES[idx].text}</p>
                <div className="text-[9px] text-zinc-600 mt-1.5 font-mono">
                  {new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" })}
                  <span className="ml-1.5 text-green-600">✓✓</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 max-w-[85%]"
            >
              <div className="w-7 h-7 rounded-full bg-red-900/30 border border-red-800/40 flex items-center justify-center flex-shrink-0">
                <Shield className="w-3.5 h-3.5 text-red-700" />
              </div>
              <div className="bg-zinc-900 border border-zinc-700/60 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1 items-center h-4">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-4 pb-8 pt-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={onNext}
              className="w-full py-4 bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-black font-black text-sm tracking-widest uppercase rounded-xl shadow-[0_0_30px_rgba(161,123,32,0.4)] transition-all duration-300 active:scale-[0.98]"
            >
              VER EVIDENCIA →
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
