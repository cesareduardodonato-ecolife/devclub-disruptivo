"use client";

import { motion } from "framer-motion";

// As tecnologias que os recrutadores e o Rodolfo amam ver
const techs = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "PostgreSQL", "Docker", "AWS", "Git", "Figma", "Prisma"
];

export const TechBanner = () => {
  return (
    <section className="relative my-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Faixa Verde Inclinada */}
      <div className="absolute w-[110%] h-16 bg-green-500 rotate-[-2deg] flex items-center shadow-[0_0_40px_rgba(34,197,94,0.4)] z-10" />
      
      {/* Faixa Escura Inclinada (faz um X com a verde) */}
      <div className="absolute w-[110%] h-16 bg-zinc-900 border-y border-zinc-700 rotate-[2deg] flex items-center z-0" />

      <div className="relative z-20 w-full overflow-hidden flex whitespace-nowrap rotate-[-2deg] pointer-events-none">
        <motion.div
          className="flex gap-8 text-2xl font-black uppercase text-black"
          // Animação de loop infinito movendo para a esquerda
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Velocidade (menor = mais rápido)
          }}
        >
          {/* Duplicamos a lista várias vezes para o loop não quebrar */}
          {[...techs, ...techs, ...techs, ...techs].map((tech, index) => (
            <div key={index} className="flex items-center gap-8">
              <span>{tech}</span>
              <span className="text-black/30">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};