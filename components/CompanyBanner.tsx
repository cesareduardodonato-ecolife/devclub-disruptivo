'use client';

export default function CompanyBanner() {
  // Lista de empresas 
  const companies = [
    "Nubank", "Itaú", "Mercado Livre", "iFood", "Google", "Amazon", "Microsoft", "XP Investimentos", "PicPay", "Creditas", "Banco Santander",
    "Nubank", "Itaú", "Mercado Livre", "iFood", "Google", "Amazon", "Microsoft", "XP Investimentos", "PicPay", "Creditas", "Banco Santander",
  ];

  return (
    <div className="w-full bg-[#00FF41] py-3 overflow-hidden relative flex z-10 shadow-[0_0_15px_rgba(0,255,65,0.5)]">
      <div className="animate-marquee whitespace-nowrap flex font-mono text-black font-extrabold text-lg md:text-xl items-center tracking-wider">
        {companies.map((company, index) => (
          <span key={index} className="mx-8 flex items-center">
            {company} <span className="opacity-40 ml-16 text-sm">•</span>
          </span>
        ))}
      </div>
      {/* CSS embutido exclusivo para esse componente para garantir a rolagem perfeita */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          //* O width precisa ser largo o suficiente para conter o dobro dos itens e rolar suavemente *//
          min-width: 200%; 
        }
      `}</style>
    </div>
  );
}