"use client";

import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Array com os dados fictícios
const depoimentos = [
  {
    nome: "Thiago Mendes",
    cargo: "Dev Front-end Jr no Itaú",
    texto: "Eu tentava estudar sozinho pelo YouTube, mas parecia que estava andando em círculos. O DevClub me deu o mapa exato. Em 5 meses, saí do zero absoluto para a minha primeira vaga.",
  },
  {
    nome: "Sarah Linhares",
    cargo: "Full Stack Engineer no Canadá",
    texto: "O diferencial não é só o código, é como eles te ensinam a pensar como um engenheiro e a se vender para o mercado. O módulo de carreira mudou meu jogo. Hoje ganho em dólar.",
  },
  {
    nome: "Lucas Batista",
    cargo: "Desenvolvedor Mobile",
    texto: "As aulas são diretas ao ponto, sem enrolação. A comunidade e os tutores te puxam pra cima o tempo todo. Você é literalmente forçado a evoluir e criar projetos de alto nível.",
  }
];

export const Depoimentos = () => {
  return (
    <section className="py-24 px-4 relative max-w-7xl mx-auto">
      {/* Efeito de luz no fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none" />

      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center relative z-10">
          O que dizem nossos <span className="text-green-400">Alunos</span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto relative z-10">
          Histórias reais (que para este teste/concurso são inventadas) de pessoas que transformaram suas vidas através do DevClub.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {depoimentos.map((depoimento, index) => (
          /* O delay multiplica pelo index para eles aparecerem em escadinha: 0.1s, 0.3s, 0.5s... */
          <ScrollReveal key={index} delay={index * 0.2}>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
              
              {/* Ícone de aspas gigante e transparente no fundo do card */}
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-zinc-800/30 -rotate-12 group-hover:text-green-500/10 transition-colors duration-500" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                ))}
              </div>
              
              <p className="text-zinc-300 text-lg mb-8 flex-grow leading-relaxed">
                "{depoimento.texto}"
              </p>
              
              <div className="flex items-center gap-4">
                {/* Avatar genérico CSS */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-xl">
                  {depoimento.nome.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{depoimento.nome}</h4>
                  <p className="text-green-400/80 text-sm">{depoimento.cargo}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};