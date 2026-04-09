import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";

interface Step2VideoProps {
  onNext: (answer: string) => void;
}

export default function Step2Video({ onNext }: Step2VideoProps) {
  const [isMuted, setIsMuted] = useState(true);
  const answers = [
    { key: "A", label: "Mis ahorros" },
    { key: "B", label: "Mi 401(k) / Bolsa" },
    { key: "C", label: "No tengo protección" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-sm mx-auto">
        <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "85vh" }}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
            <video
              src={`${import.meta.env.BASE_URL}videofrancocomp.mp4`}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <AnimatePresence>
              {isMuted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMuted(false)}
                  className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-3 bg-red-900 text-white px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(153,27,27,0.6)] border border-red-700 active:scale-95 transition-all"
                  >
                    <Volume2 className="w-8 h-8" />
                    <span className="font-mono font-bold text-xs tracking-widest uppercase text-center">
                      TOCA PARA ESCUCHAR
                    </span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-6"
              >
                <div className="text-4xl mb-3">📊</div>
                <div className="text-xs font-mono text-red-700 tracking-widest uppercase mb-2">
                  DIAGNÓSTICO FINANCIERO
                </div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-red-800/50 to-transparent mb-4" />
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full h-px bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent mb-4"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/95 to-transparent">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white font-semibold text-base text-center leading-snug mb-5"
                >
                  Si hoy sufres una emergencia médica o el mercado colapsa,{" "}
                  <span className="text-yellow-500">¿quién paga las cuentas?</span>
                </motion.p>

                <div className="space-y-2">
                  {answers.map((a, i) => (
                    <motion.button
                      key={a.key}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      onClick={() => onNext(a.key)}
                      className="w-full flex items-center gap-3 bg-zinc-900/80 border border-zinc-700/60 rounded-xl px-4 py-3 text-left hover:bg-zinc-800/90 hover:border-red-800/60 active:scale-[0.98] transition-all duration-200 group"
                    >
                      <span className="w-7 h-7 rounded-full border border-red-800/60 flex items-center justify-center text-red-700 font-mono font-bold text-xs group-hover:bg-red-900/30 transition-colors flex-shrink-0">
                        {a.key}
                      </span>
                      <span className="text-sm text-zinc-200 font-medium">{a.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
