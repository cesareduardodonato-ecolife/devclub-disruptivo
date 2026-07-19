"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#00FF41]/20 bg-black/80 backdrop-blur-md py-8 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-[#00FF41] font-black text-2xl tracking-tighter mb-4 md:mb-0 drop-shadow-[0_0_10px_rgba(0,255,65,0.4)]">
          DEV<span className="text-white">CLUB</span>
        </div>
        <div className="text-zinc-500 text-sm text-center md:text-right font-mono">
          <p>© {new Date().getFullYear()} DevClub. The Matrix has you.</p>
          <p className="mt-1">Desenvolvido com ódio e código.</p>
        </div>
      </div>
    </footer>
  );
}