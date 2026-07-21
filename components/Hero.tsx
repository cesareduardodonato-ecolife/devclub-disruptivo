"use client";

import { motion } from "framer-motion";

// 1. Avisamos ao TypeScript que esse componente vai receber a função "onOpenMatrix"
interface HeroProps {
  onOpenMatrix?: () => void;
}

// 2. Recebemos a função nas propriedades do componente
export const Hero = ({ onOpenMatrix }: HeroProps) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 overflow-hidden pt-10">
      
      {/* Sombra escura (Vignette) por trás do texto para garantir que ele nunca suma na chuva verde */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-black/60 blur-[60px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center mt-12">
        
        {/* Logo <DevClub> */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-block bg-zinc-950/80 backdrop-blur-md border border-green-500/40 px-8 py-3 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <span className="text-4xl md:text-5xl font-black tracking-widest text-white">
              <span className="text-green-500">&lt;</span>
              DevClub
              <span className="text-green-500">&gt;</span>
            </span>
          </div>
        </motion.div>

        {/* H1 Principal */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1] uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Tome a <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">Pílula Verde.</span> <br />
            Domine o Sistema.
          </h1>
        </motion.div>
        
        {/* Subtítulo Temático */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-lg md:text-2xl text-zinc-200 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
            Você está preso na Matrix dos tutoriais intermináveis? Desperte. O DevClub é solução no sistema: a rota direta e brutal para você reescrever o código da sua própria carreira.
          </p>
        </motion.div>

        {/* Botão de "Despertar" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          {/* 3. Adicionamos o onClick chamando o onOpenMatrix */}
          <button 
            onClick={onOpenMatrix}
            className="bg-green-500 hover:bg-green-400 text-black font-black py-4 px-10 rounded-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:shadow-[0_0_40px_rgba(34,197,94,1)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm hover:scale-105"
          >
            Desconectar da Ilusão
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
};