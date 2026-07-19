'use client';

export default function TerminalTutores() {
  return (
    // Container principal: w-full e px-4 garantem que não vai quebrar no celular!
    <div className="w-full max-w-4xl mx-auto px-4 my-16">
      
      {/* Janela do Terminal */}
      <div className="bg-[#0a0a0a] rounded-lg border border-zinc-800 shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden">
        
        {/* Barra superior (Estilo macOS) */}
        <div className="bg-zinc-900 px-4 py-3 flex items-center border-b border-zinc-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-zinc-500 text-xs font-mono select-none">
            tutores@devclub:~
          </div>
        </div>

        {/* Conteúdo do Terminal */}
        <div className="p-4 md:p-6 font-mono text-sm md:text-base text-gray-300">
          
          {/* Comando 1 */}
          <div className="mb-6">
            <p className="text-[#00FF41]">
              <span className="text-green-700 mr-2">tutor@devclub:~$</span> ./iniciar_jornada.sh
            </p>
            <p className="ml-4 mt-2 opacity-80 leading-relaxed text-xs md:text-sm">
              [&gt;] Inicializando ambiente de alta performance...<br/>
              [&gt;] Carregando mentalidade de elite... <span className="text-[#00FF41] font-bold">OK</span><br/>
              [&gt;] Removendo desculpas do sistema... <span className="text-[#00FF41] font-bold">OK</span>
            </p>
          </div>

          {/* Comando 2 (Análise de Mercado) */}
          <div className="mb-8">
            <p className="text-[#00FF41]">
              <span className="text-green-700 mr-2">tutor@devclub:~$</span> ./analise_de_mercado.sh
            </p>
            <p className="ml-4 mt-2 opacity-80 leading-relaxed text-xs md:text-sm">
              [+] Vagas disponíveis no mercado: 100.000+<br />
              [+] Desenvolvedores altamente qualificados: Insuficiente<br />
              [+] Conclusão: A oportunidade está na mesa. Execução necessária.
            </p>
          </div>

          {/* Linha Final de Status (O Grande Final) */}
          <div className="mt-6 border-t border-green-900/50 pt-5">
            <p className="text-[#00FF41] font-bold text-sm md:text-lg drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] flex items-center">
              <span className="text-zinc-500 mr-2 text-sm md:text-base font-normal">[Sistema]:</span>
              &gt; Lembre-se, não existe almoço grátis!
              {/* O cursor piscando */}
              <span className="inline-block w-2.5 h-5 md:h-6 bg-[#00FF41] ml-2 animate-pulse"></span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}