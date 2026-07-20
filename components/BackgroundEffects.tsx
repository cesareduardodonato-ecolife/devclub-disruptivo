"use client";

import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // As letras exatas que vão chover
    const letters = "DEVCLUB";
    const matrix = letters.split("");
    const fontSize = 22; // Aumentado para ficar mais claro
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Ajuste no Fade para as letras ficarem mais nítidas e não borrarem
      ctx.fillStyle = "rgba(5, 5, 5, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#4ade80"; // Verde mais claro/brilhante (green-400)
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45); // Velocidade da chuva
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // 'fixed inset-0' garante que pegue a tela toda e acompanhe o scroll
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-3] opacity-30 pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, black 10%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 10%, transparent 100%)"
      }}
    />
  );
};

export const BackgroundEffects = () => {
  return (
    <>
      {/* Fundo ultra escuro base */}
      <div className="fixed inset-0 z-[-4] bg-[#050505]" />
      
      {/* A Chuva Matrix Global que criamos acima */}
      <MatrixRain />
      
      {/* Grade Sutil por cima da chuva para dar textura */}
      <div className="fixed inset-0 z-[-2] h-full w-full bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Luzes difusas nos cantos */}
      <div className="fixed top-[-10%] left-[-10%] z-[-1] h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] z-[-1] h-[500px] w-[500px] rounded-full bg-green-900/10 blur-[120px] pointer-events-none" />
    </>
  );
};