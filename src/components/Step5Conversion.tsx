import { motion } from "framer-motion";
import { Shield, Download, Calendar, CheckCircle } from "lucide-react";

interface Step5ConversionProps {}

const benefits = [
  "Sin riesgo de mercado — protección total del capital",
  "Crecimiento acelerado indexado al mercado",
  "Retiros 100% libres de impuestos en el futuro",
  "Beneficio de muerte accidental incluido",
  "Acceso al dinero en emergencias — sin penalidades",
];

export default function Step5Conversion({}: Step5ConversionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 flex flex-col overflow-y-auto"
    >
      <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800 px-4 py-6">
        <div className="max-w-sm mx-auto flex flex-col items-center text-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-700/20 rounded-full blur-xl scale-150" />
            <Shield className="w-14 h-14 text-yellow-600 relative z-10" strokeWidth={1} />
          </div>
          <h1 className="text-2xl font-black text-white leading-tight">
            Tu Patrimonio,{" "}
            <span className="text-yellow-600">Blindado.</span>
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Has completado tu diagnóstico financiero. Ahora es momento de actuar.
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 space-y-5 max-w-sm mx-auto w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900 border border-zinc-700/60 rounded-2xl p-5 space-y-3"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-green-500 tracking-wider uppercase">Plan Validado</span>
          </div>
          <h2 className="text-base font-bold text-white">Lo que incluye tu Escudo Financiero:</h2>
          <div className="space-y-2.5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" />
                <span className="text-sm text-zinc-300 leading-snug">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-2">
            PASO 1 — DESCARGA TU LIBRO
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-3 w-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-zinc-600/60 rounded-xl px-5 py-4 transition-all duration-200 group active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-yellow-900/30 border border-yellow-800/40 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-900/50 transition-colors">
              <Download className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-bold text-white">Descargar Libro Gratis</div>
              <div className="text-xs text-zinc-500">El Escudo de un Millón de Dólares — PDF</div>
            </div>
            <div className="text-yellow-600 font-mono text-xs">PDF →</div>
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
            PASO 2 — AGENDA TU AUDITORÍA PATRIMONIAL
          </div>
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-b from-red-900/30 to-transparent rounded-xl" />
            <div className="relative bg-zinc-900 border border-zinc-700/60 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/80 border-b border-zinc-700/50 px-4 py-2.5 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-700" />
                <span className="text-xs font-mono text-zinc-400 tracking-wider">
                  AGENDA TU SESIÓN — 30 MIN GRATIS
                </span>
              </div>
              <div className="w-full bg-zinc-950 flex items-center justify-center" style={{ minHeight: "280px" }}>
                <div className="text-center p-8 space-y-3">
                  <Calendar className="w-12 h-12 text-zinc-700 mx-auto" strokeWidth={1} />
                  <p className="text-xs font-mono text-zinc-600 leading-relaxed">
                    Aquí va tu enlace de Calendly o GoHighLevel para que tus prospectos agenden su consulta directamente.
                  </p>
                  <div className="text-[9px] font-mono text-zinc-700 tracking-widest border border-zinc-800 rounded px-2 py-1">
                    iframe / embed placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="bg-gradient-to-br from-red-950/50 to-zinc-950 border border-red-900/30 rounded-2xl p-5 text-center space-y-2"
        >
          <p className="text-xs text-zinc-400 leading-relaxed">
            <span className="text-white font-semibold">⚠️ Cupos limitados esta semana.</span> Solo trabajo con un selecto grupo de familias que toman en serio la protección de su patrimonio.
          </p>
          <p className="text-[10px] font-mono text-zinc-600">
            Sin costo • Sin compromiso • 100% confidencial
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
