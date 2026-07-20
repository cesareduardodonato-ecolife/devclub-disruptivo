"use client";

import { ScrollReveal } from "./ScrollReveal";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#050505] pt-16 pb-8 relative overflow-hidden">
      {/* Linha de luz neon  do Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Logo e Missão */}
            <div className="col-span-1">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                DEV<span className="text-green-400">CLUB</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Transformando vidas através da programação. O caminho mais rápido e prático para a sua primeira vaga como Full Stack.
              </p>
            </div>

            {/* Links Institucionais */}
            <div>
              <h4 className="text-white font-bold mb-6">Institucional</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Início</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Nossas Formações</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Quem Somos</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Depoimentos de Alunos</li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-white font-bold mb-6">Suporte</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Central de Ajuda (FAQ)</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Fale Conosco</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Termos de Uso</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors w-fit">Políticas de Privacidade</li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-white font-bold mb-6">Siga o DevClub</h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-green-500/10 hover:text-green-400 transition-all border border-zinc-800 hover:border-green-500/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* Youtube */}
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-green-500/10 hover:text-green-400 transition-all border border-zinc-800 hover:border-green-500/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 3.8 3.6 4.9 3.6 5.4 3.5 8 3.3 12 3.3 12 3.3s4 0 6.6.2c.5.1 1.6.1 2.4 1.1.7.8.5 2.5.5 2.5s.2 2 .2 4v1.8c0 2-.2 4-.2 4s.2 1.7-.5 2.5c-.8 1-1.9 1-2.4 1.1-2.6.2-6.6.2-6.6.2s-4 0-6.6-.2c-.5-.1-1.7-.1-2.5-1.1-.7-.8-.5-2.5-.5-2.5s-.2-2-.2-4V9.1c0-2 .2-4 .2-4z"/><path d="M9.7 13.5v-3.8l4.4 1.9-4.4 1.9z"/>
                  </svg>
                </a>
                {/* Linkedin */}
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-green-500/10 hover:text-green-400 transition-all border border-zinc-800 hover:border-green-500/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                {/* Github */}
                <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-green-500/10 hover:text-green-400 transition-all border border-zinc-800 hover:border-green-500/50">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.1 5.1 0 0 0 19 5.25a4.9 4.9 0 0 0-.5-3.25s-1.1-.35-3.5 1.36a11.5 11.5 0 0 0-6 0C6.6 1.65 5.5 2 5.5 2a4.9 4.9 0 0 0-.5 3.25A5.1 5.1 0 0 0 3 8.08c0 5.77 3.34 6.79 6.5 7.17A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v-4"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Direitos Autorais */}
          <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por <span className="text-white font-medium">Cesar Eduardo Paiva Donato</span> para o Concurso DevClub.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};