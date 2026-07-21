"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// O roteiro do nosso terminal hacker (Mantido exatamente como você pediu)
const linhas = [
  { id: 1, type: "cmd", text: "visitor@devclub:~$ ./conhecer_tutores.sh", delay: 0.5, duration: 1.5 },
  { id: 2, type: "sys", text: "Iniciando varredura no sistema...", delay: 2.2, duration: 0.1 },
  { id: 3, type: "success", text: "[+] Rodolfo Mori - Fundador & Hacker de Carreiras", delay: 2.8, duration: 0.1 },
  { id: 4, type: "info", text: "    -> Especialidade: Destravar sua mente para a programação.", delay: 3.2, duration: 0.1 },
  { id: 5, type: "success", text: "[+] Comunidade DevClub - Tropa de Elite", delay: 4.0, duration: 0.1 },
  { id: 6, type: "info", text: "    -> Status: Online 24/7. Ninguém fica para trás.", delay: 4.4, duration: 0.1 },
  { id: 7, type: "cmd", text: "visitor@devclub:~$ echo $OBJETIVO", delay: 5.5, duration: 1.0 },
  { id: 8, type: "highlight", text: "> \"Te colocar nas melhores vagas, custe o que custar.\"", delay: 6.8, duration: 0.1 },
  { id: 9, type: "info", text: "    -> Status: Lembre-se. Não existe almoço grátis.", delay: 7.2, duration: 0.1 },
];

// ----------------------------------------------------------------------
// SUB-COMPONENTE: Linha do Terminal
// Responsável por digitar a linha letra por letra com segurança
// ----------------------------------------------------------------------
const TerminalLine = ({ linha }: { linha: typeof linhas[0] }) => {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    // Se não for um comando (cmd), mostra o texto instantaneamente
    if (linha.type !== "cmd" && linha.type !== "highlight") {
      setTexto(linha.text);
      return;
    }

    // Se for comando (cmd) ou destaque, faz a digitação à prova de balas
    let index = 0;
    setTexto(""); // Zera para garantir
    
    // Calcula a velocidade baseado na duração que você configurou no array
    const tempoPorLetra = (linha.duration * 1000) / linha.text.length;

    const intervalo = setInterval(() => {
      if (index < linha.text.length) {
        setTexto((prev) => prev + linha.text.charAt(index));
        index++;
      } else {
        clearInterval(intervalo);
      }
    }, tempoPorLetra);

    // Função de limpeza (evita vazamento de memória e travamentos)
    return () => clearInterval(intervalo);
  }, [linha]);

  // Aplica as exatas mesmas cores que você definiu
  const textColor = 
    linha.type === "cmd" ? "text-green-400" :
    linha.type === "sys" ? "text-zinc-500" :
    linha.type === "success" ? "text-emerald-300 font-bold" :
    linha.type === "highlight" ? "text-yellow-400 font-bold mt-4" :
    "text-zinc-400";

  return (
    <div className={`whitespace-pre-wrap break-words ${textColor}`}>
      {texto}
    </div>
  );
};

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL: TerminalTutores
// ----------------------------------------------------------------------
export const TerminalTutores = () => {
  const [iniciou, setIniciou] = useState(false);
  const [linhasAtivas, setLinhasAtivas] = useState<number[]>([]);
  const [mostrarCursorFinal, setMostrarCursorFinal] = useState(false);

  useEffect(() => {
    // Só começa a rodar o script quando o usuário ver o terminal na tela
    if (!iniciou) return;

    // Zera o estado (importante para o React Strict Mode)
    setLinhasAtivas([]);
    setMostrarCursorFinal(false);

    // Cria os agendamentos (timeouts) para cada linha baseando-se no 'delay'
    const timeouts = linhas.map((linha) => {
      return setTimeout(() => {
        setLinhasAtivas((prev) => [...prev, linha.id]);
      }, linha.delay * 1000); // Multiplica por 1000 pois o seu delay é em segundos
    });

    // O cursor final aparece depois de todo o roteiro acabar (7.5s)
    const cursorTimeout = setTimeout(() => {
      setMostrarCursorFinal(true);
    }, 7500);

    // Limpeza de todos os timeouts se o usuário sair da página no meio
    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(cursorTimeout);
    };
  }, [iniciou]); // Executa quando 'iniciou' vira true

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
        <motion.div 
          // Isso aciona a animação de digitação APENAS quando o terminal entra na tela
          onViewportEnter={() => setIniciou(true)}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#0f0f0f] rounded-xl border border-zinc-800 overflow-hidden shadow-2xl shadow-green-500/10"
        >
          
          {/* Barra superior estilo macOS */}
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-zinc-500 font-mono hidden md:block">root@devclub:~</span>
          </div>

          {/* Tela do Terminal */}
          <div className="p-4 md:p-8 font-mono text-xs md:text-base flex flex-col gap-3 min-h-[320px]">
            
            {/* Renderiza as linhas que já passaram do 'delay' */}
            {linhasAtivas.map((id) => {
              const linhaConfig = linhas.find((l) => l.id === id);
              if (!linhaConfig) return null;
              return <TerminalLine key={id} linha={linhaConfig} />;
            })}

            {/* O cursor piscando no final aguardando o usuário */}
            {mostrarCursorFinal && (
              <div className="mt-4 text-green-400 flex items-center">
                <span className="mr-2">visitor@devclub:~$</span>
                <motion.div
                  // Animação de piscar (opacity 1 -> 0 infinito)
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="w-2.5 h-5 md:h-6 bg-green-400"
                />
              </div>
            )}
            
            {/* O cursor piscando enquanto as outras linhas ainda estão sendo digitadas */}
            {iniciou && !mostrarCursorFinal && (
               <motion.div
                 animate={{ opacity: [1, 0] }}
                 transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                 className="w-2.5 h-5 md:h-6 bg-green-400 mt-2"
               />
            )}
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
};