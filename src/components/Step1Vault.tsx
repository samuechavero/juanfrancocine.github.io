import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { saveLead } from "@/lib/supabase";

interface Step1VaultProps {
  onNext: () => void;
}

export default function Step1Vault({ onNext }: Step1VaultProps) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = nombre.trim() !== "" && telefono.trim() !== "";

  async function handleSubmit() {
    if (!canSubmit || loading) return;
    setLoading(true);
    await saveLead(nombre.trim(), telefono.trim());
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    onNext();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-start px-4 py-8 overflow-y-auto"
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-900/30 rounded-full blur-xl scale-150" />
            <Shield className="w-14 h-14 text-yellow-600 relative z-10" strokeWidth={1.5} />
            <Lock className="w-5 h-5 text-red-700 absolute -bottom-1 -right-1 z-20" fill="currentColor" />
          </div>
          <div className="text-xs font-mono text-red-800 tracking-[0.3em] uppercase mt-1">
            [ CLASIFICADO — ACCESO RESTRINGIDO ]
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-center space-y-3"
        >
          <h1 className="text-2xl font-black text-white leading-tight tracking-tight uppercase">
            El Escudo de{" "}
            <span className="text-yellow-600">un Millón</span>{" "}
            de Dólares
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            El archivo confidencial que explica por qué trabajar duro ya no es suficiente para{" "}
            <span className="text-zinc-200 font-medium">proteger tu dinero.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-yellow-800/30 via-red-900/20 to-zinc-800/30 rounded-2xl blur-sm" />
            <div className="relative bg-zinc-900 border border-zinc-700/60 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 pt-4 px-4 pb-2 flex items-center justify-center">
                <div className="w-full max-w-xs md:max-w-sm mx-auto">
                  <img
                    src="/libro.png"
                    alt="El Escudo de un Millón de Dólares"
                    width={400}
                    height={600}
                    className="w-full h-auto object-cover rounded-md drop-shadow-[0_0_25px_rgba(220,38,38,0.2)]"
                  />
                </div>
              </div>
              <div className="px-4 pb-4 pt-2 text-center">
                <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                  DESCARGA GRATUITA — VALOR $97
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="w-full"
        >
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-b from-red-900/40 to-zinc-800/20 rounded-xl" />
            <div className="relative bg-zinc-950 border border-zinc-700/50 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/80 border-b border-zinc-700/50 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  <div className="w-2 h-2 rounded-full bg-yellow-600" />
                  <div className="w-2 h-2 rounded-full bg-green-700" />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                  TERMINAL DE ACCESO SEGURO — v2.1
                </span>
              </div>

              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-red-700 tracking-[0.2em] uppercase">
                    &gt; Identificación (Tu Nombre)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-red-800 font-mono text-sm">_</div>
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ingresa tu nombre completo"
                      className="w-full bg-black/50 border border-zinc-700 rounded-lg pl-7 pr-3 py-3 text-sm font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-900/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-red-700 tracking-[0.2em] uppercase">
                    &gt; Clave de Acceso (Tu Teléfono)
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-red-800 font-mono text-sm">_</div>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="Tu número de teléfono"
                      className="w-full bg-black/50 border border-zinc-700 rounded-lg pl-7 pr-3 py-3 text-sm font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-900/50 transition-all"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit || loading}
                  className={`w-full py-4 rounded-lg font-mono font-bold text-sm tracking-widest uppercase transition-all duration-300 mt-2 relative overflow-hidden ${
                    canSubmit && !loading
                      ? "bg-gradient-to-r from-red-900 to-red-800 text-white border border-red-700 hover:from-red-800 hover:to-red-700 cursor-pointer shadow-[0_0_20px_rgba(153,27,27,0.4)]"
                      : "bg-zinc-800 text-zinc-600 border border-zinc-700 cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-pulse">▓▓▓</span>
                      <span>Desencriptando archivo...</span>
                      <span className="animate-pulse">▓▓▓</span>
                    </span>
                  ) : (
                    "[ INICIAR DIAGNÓSTICO Y DESBLOQUEAR LIBRO ]"
                  )}
                </button>

                <p className="text-[9px] font-mono text-zinc-600 text-center">
                  🔒 Datos protegidos con cifrado AES-256. Sin spam. Sin compromisos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
