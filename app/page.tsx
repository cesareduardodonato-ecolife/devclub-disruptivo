import { Hero } from "../components/Hero";
import { TechBanner } from "../components/TechBanner";
import { ScrollReveal } from "../components/ScrollReveal";
import { Formacoes } from "../components/Formacoes";
import { TerminalTutores } from "../components/TerminalTutores";
import { Depoimentos } from "../components/Depoimentos";
import CompanyBanner from "../components/CompanyBanner";
import { CustomCursor } from "../components/CustomCursor";
import { Footer } from "../components/Footer";
import { BackgroundEffects } from "../components/BackgroundEffects";
import { ScrollProgress } from "../components/ScrollProgress";
import { MagneticElement } from "../components/MagneticElement";
import { TiltCard } from "../components/TiltCard";

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden md:cursor-none relative">
      
      {/* Efeitos Globais */}
      <BackgroundEffects />
      <ScrollProgress />
      <CustomCursor />
      
      {/* Hero */}
      <Hero />
      <TechBanner />

      {/* Efeito 3D Tilt */}
      <section className="py-32 px-4 max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Nossos <span className="text-green-400">Números</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <TiltCard>
              <div className="h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors shadow-2xl">
                <h3 className="text-5xl font-bold text-white mb-2">+5.000</h3>
                <p className="text-zinc-400">Alunos Formados</p>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <TiltCard>
              <div className="h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors shadow-2xl">
                <h3 className="text-5xl font-bold text-white mb-2">+900</h3>
                <p className="text-zinc-400">Empresas Parceiras</p>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <TiltCard>
              <div className="h-full bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors shadow-2xl">
                <h3 className="text-5xl font-bold text-white mb-2">100%</h3>
                <p className="text-zinc-400">Foco no Mercado</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </section>

      <Formacoes />
      <TerminalTutores />
      <Depoimentos />
      <CompanyBanner />
      {/* Seção Final Botão Magnético */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Pronto para dar o <span className="text-green-400">próximo passo?</span>
          </h2>
          <p className="text-zinc-400 mb-12 text-lg md:text-xl">
            Junte-se à nossa comunidade e comece a construir o seu futuro como desenvolvedor hoje mesmo.
          </p>
          <div className="flex justify-center">
            <MagneticElement>
              <button className="bg-green-500 hover:bg-green-400 text-black font-extrabold py-5 px-12 rounded-full text-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:scale-105 flex items-center gap-3">
                Quero tomar a pílula verde
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </MagneticElement>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
      
    </main>
  );
}