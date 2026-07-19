import { Hero } from "../components/Hero";
import { BackgroundEffects } from "../components/BackgroundEffects";
import TerminalTutores from "../components/TerminalTutores";
import CompanyBanner from "../components/CompanyBanner";

export default function Home() {
  return (
    // overflow-x-hidden é o segredo aqui: impede que qualquer componente vaze para os lados no celular
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans w-full flex flex-col">
      
      {/* Efeito Matrix Global de Fundo */}
      <BackgroundEffects />

      {/* Container principal de conteúdo com z-10 para ficar acima do Matrix */}
      <div className="relative z-10 flex flex-col w-full">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Seção de Depoimentos */}
        <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#00FF41]">
            Nossos Alunos Estão no Topo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card de Depoimento 1 */}
            <div className="bg-zinc-900/70 backdrop-blur-md border border-[#00FF41]/20 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:border-[#00FF41]/50 transition-colors">
              <p className="text-gray-300 italic mb-4">
                "A didática do DevClub mudou minha forma de ver a programação. Em poucos meses consegui minha primeira vaga."
              </p>
              <p className="text-[#00FF41] font-bold">- João P.</p>
            </div>

            {/* Card de Depoimento 2 */}
            <div className="bg-zinc-900/70 backdrop-blur-md border border-[#00FF41]/20 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:border-[#00FF41]/50 transition-colors">
              <p className="text-gray-300 italic mb-4">
                "Nunca vi uma comunidade tão engajada. O suporte dos tutores é o que faz a diferença no dia a dia."
              </p>
              <p className="text-[#00FF41] font-bold">- Maria S.</p>
            </div>

            {/* Card de Depoimento 3 */}
            <div className="bg-zinc-900/70 backdrop-blur-md border border-[#00FF41]/20 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:border-[#00FF41]/50 transition-colors">
              <p className="text-gray-300 italic mb-4">
                "Os projetos reais que construímos me deram a confiança exata que eu precisava para as entrevistas."
              </p>
              <p className="text-[#00FF41] font-bold">- Carlos E.</p>
            </div>
          </div>
        </section>

        {/* 3. Faixa Verde de Empresas (Exatamente abaixo dos depoimentos, como solicitado) */}
        <CompanyBanner />

        {/* 4. Terminal dos Tutores (Fechando a página) */}
        <section className="w-full py-16 bg-gradient-to-b from-transparent to-zinc-950/90">
          <TerminalTutores />
        </section>

      </div>
    </main>
  );
}