"use client";

export default function CompanyBanner() {
  const companies = ["Google", "Amazon", "Itaú", "Nubank", "Mercado Livre", "Microsoft", "Ifood", "Totvs"];
  
  return (
    <div className="w-full bg-[#00FF41] py-4 overflow-hidden relative rotate-2 scale-110 my-16 shadow-[0_0_30px_rgba(0,255,65,0.3)]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
      
      <div className="animate-marquee whitespace-nowrap">
        {[...companies, ...companies, ...companies].map((company, index) => (
          <span key={index} className="text-black font-black text-2xl md:text-3xl mx-8 uppercase tracking-widest">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}