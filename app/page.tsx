"use client";

import { useState, useEffect, MouseEvent } from "react";
import { Hero } from "../components/Hero";
import { BackgroundEffects } from "../components/BackgroundEffects";
import TerminalTutores from "../components/TerminalTutores";
import CompanyBanner from "../components/CompanyBanner";
import { Footer } from "../components/Footer"; // <-- Footer de volta!

// --- COMPONENTE: MOUSE VERDINHO CUSTOMIZADO ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: globalThis.MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="w-6 h-6 bg-[#00FF41]/40 border-2 border-[#00FF41] rounded-full shadow-[0_0_15px_rgba(0,255,65,0.8)] transition-transform duration-75 ease-out" />
    </div>
  );
};

// --- COMPONENTE: CARDS DE DEPOIMENTO COM EFEITO 3D (TILT) ---
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      className="h-full rounded-xl bg-zinc-900/40 backdrop-blur-sm border border-[#00FF41]/20 p-8 shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] hover:border-[#00FF41]/50 transition-all duration-200 ease-out flex flex-col justify-between"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// --- PÁGINA PRINCIPAL ---
export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans w-full flex flex-col md:cursor-none selection:bg-[#00FF41] selection:text-black bg-black">
      
      {/* 1. O Mouse Customizado */}
      <CustomCursor />

      {/* 2. Fundo Matrix Corrigido (Fixo atrás de tudo com z-0) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundEffects />
        {/* Overlay escuro para garantir que os textos fiquem legíveis em cima da chuva de código */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 3. Container de conteúdo (z-10 para ficar ACIMA do Matrix) */}
      <div className="relative z-10 flex flex-col w-full">
        
        {/* Hero Section */}
        <Hero />

        {/* Seção de Depoimentos */}
        <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 drop-shadow-lg uppercase tracking-tighter">
              Efeito <span className="text-[#00FF41] drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]">DevClub</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
              Quem toma a pílula verde não volta para a mediocridade. Veja o impacto real na carreira de quem já domina o sistema.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <TiltCard>
              <div>
                <div className="text-[#00FF41] mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.713L3 21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.213-.5 1.713-1.5 1.713L15 21z"/></svg>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  "A didática do DevClub mudou minha forma de ver a programação. O conteúdo é direto, sem enrolação. Em poucos meses consegui minha primeira vaga."
                </p>
              </div>
              <div>
                <p className="text-[#00FF41] font-bold text-xl">João P.</p>
                <p className="text-zinc-400 text-sm">Desenvolvedor Front-end</p>
              </div>
            </TiltCard>

            <TiltCard>
              <div>
                <div className="text-[#00FF41] mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.713L3 21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.213-.5 1.713-1.5 1.713L15 21z"/></svg>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  "Nunca vi uma comunidade tão engajada. O suporte dos tutores é insano, eles te pegam pela mão, mas te ensinam a pensar como um dev sênior."
                </p>
              </div>
              <div>
                <p className="text-[#00FF41] font-bold text-xl">Maria S.</p>
                <p className="text-zinc-400 text-sm">Engenheira de Software</p>
              </div>
            </TiltCard>

            <TiltCard>
              <div>
                <div className="text-[#00FF41] mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.713L3 21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.5c0 1.213-.5 1.713-1.5 1.713L15 21z"/></svg>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  "Os projetos reais que construímos me deram a confiança exata que eu precisava. O terminal no final não é brincadeira: não existe almoço grátis."
                </p>
              </div>
              <div>
                <p className="text-[#00FF41] font-bold text-xl">Carlos E.</p>
                <p className="text-zinc-400 text-sm">Desenvolvedor Full Stack</p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Faixa de Empresas */}
        <CompanyBanner />

        {/* Terminal dos Tutores */}
        <section className="w-full py-20 bg-gradient-to-b from-transparent to-zinc-950/80">
          <TerminalTutores />
        </section>

        {/* Footer (Recuperado!) */}
        <Footer />

      </div>
    </main>
  );
}