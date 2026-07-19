"use client";
import { useState, useEffect } from "react";

export default function TerminalTutores() {
  const [text, setText] = useState("");
  const fullText = "Lembre-se, não existe almoço grátis!";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="rounded-xl bg-zinc-900 border border-zinc-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Barra superior estilo Mac */}
        <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-zinc-400 text-sm font-mono hidden md:block">tutores@devclub: ~/root</span>
        </div>
        
        {/* Corpo do Terminal */}
        <div className="p-6 md:p-10 bg-[#050505] min-h-[250px] font-mono text-lg md:text-2xl text-[#00FF41]">
          <p>
            <span className="text-blue-400">dev@sistema</span>:<span className="text-blue-400">~</span>$ ./iniciar_jornada.sh
          </p>
          <p className="mt-4 text-zinc-400">Iniciando protocolo de aceleração...</p>
          <p className="mt-2 text-zinc-400">Carregando lógica pesada...</p>
          <div className="mt-8 flex items-center">
            <span className="mr-2 text-pink-500">&gt;</span>
            <span className="text-white font-bold">{text}</span>
            <span className="w-3 h-6 bg-[#00FF41] ml-1 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}