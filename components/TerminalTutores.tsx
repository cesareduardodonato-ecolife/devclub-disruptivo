"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// O roteiro do nosso terminal hacker
const linhas = [
  { id: 1, type: "cmd", text: "visitor@devclub:~$ ./conhecer_tutores.sh", delay: 0.5, duration: 1.5 },
  { id: 2, type: "sys", text: "Iniciando varredura no sistema...", delay: 2.2, duration: 0.1 },
  { id: 3, type: "success", text: "[+] Rodolfo Mori - Fundador & Hacker de Carreiras", delay: 2.8, duration: 0.1 },
  { id: 4, type: "info", text: "    -> Especialidade: Destravar sua mente para a programação.", delay: 3.2, duration: 0.1 },
  { id: 5, type: "success", text: "[+] Comunidade DevClub - Tropa de Elite", delay: 4.0, duration: 0.1 },
  { id: 6, type: "info", text: "    -> Status: Online 24/7. Ninguém fica para trás.", delay: 4.4, duration: 0.1 },
  { id: 7, type: "cmd", text: "visitor@devclub:~$ echo $OBJETIVO", delay: 5.5, duration: 1 },
  { id: 8, type: "highlight", text: "> \"Te colocar nas melhores vagas, custe o que custar.\"", delay: 6.8, duration: 0.1 },
  { id: 9, type: "info", text: "    -> Status: Lembre-se. Não existe almoço grátis.", delay: 7.2, duration: 0.1 },
];


export const TerminalTutores = () => {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto w-full">
      <ScrollReveal>
        <div className="flex items-center justify-center gap-4 mb-12">
          <Terminal className="w-10 h-10 text-green-400" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Quem <span className="text-green-400">Somos</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* A Janela do Terminal */}
        <div className="bg-[#0f0f0f] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl shadow-green-500/10">
          
          {/* Barra superior estilo macOS */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-zinc-500 font-mono hidden md:block">root@devclub:~</span>
          </div>

          {/* Tela do Terminal (Tela preta) */}
          <div className="p-4 md:p-8 font-mono text-xs md:text-base flex flex-col gap-3 min-h-[320px]">
            {linhas.map((linha) => (
              <motion.div
                key={linha.id}
                // largura 0 e vai até 100%
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: linha.delay,
                  duration: linha.duration,
                  // Comandos digitados 
                  ease: linha.type === "cmd" ? "linear" : "easeOut"
                }}
                className={`whitespace-nowrap overflow-hidden ${
                  linha.type === "cmd" ? "text-green-400" :
                  linha.type === "sys" ? "text-zinc-500" :
                  linha.type === "success" ? "text-emerald-300 font-bold" :
                  linha.type === "highlight" ? "text-yellow-400 font-bold mt-4" :
                  "text-zinc-400"
                }`}
              >
                {linha.text}
              </motion.div>
            ))}

            {/* O cursor piscando no final */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 7.5 }}
              className="mt-4 text-green-400 flex items-center"
            >
              <span className="mr-2">visitor@devclub:~$</span>
              <motion.div
                // Animação de piscar (opacity 1 -> 0 infinito)
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-2.5 h-5 md:h-6 bg-green-400"
              />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};