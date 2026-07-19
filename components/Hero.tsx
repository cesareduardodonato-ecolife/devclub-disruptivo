"use client";

export const Hero = () => {
  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center justify-center px-4 text-center relative z-10">
      <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase">
        <span className="text-white">Sistema</span>{" "}
        <span className="text-[#00FF41] drop-shadow-[0_0_25px_rgba(0,255,65,0.6)]">Hackeado</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
        A pílula verde da programação. Descubra como a metodologia do DevClub transforma iniciantes em desenvolvedores de alto nível.
      </p>
      <button className="bg-[#00FF41] text-black font-black text-lg px-8 py-4 rounded-md hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,65,0.8)] transition-all duration-300 uppercase tracking-widest cursor-none md:cursor-auto">
        Acessar o Sistema
      </button>
    </section>
  );
};