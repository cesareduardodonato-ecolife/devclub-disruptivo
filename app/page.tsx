"use client";

// Importações de React e componentes
import React, { useState } from "react";
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
  // Estados do componente (Memória da Página)
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: ""
  });

  // Função de envio N8N 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const n8nWebhookUrl = "https://super-space-doodle-7vq4gvv7wwx92r5pg-5678.app.github.dev/webhook-test/f45af074-ddb0-4178-8b79-5918769680f2";

      await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors"
      });

      setFormSuccess(true);
      setTimeout(() => {
        setShowForm(false);
        setFormSuccess(false);
        setFormData({ nome: "", email: "", whatsapp: "" });
      }, 3000);

    } catch (error) {
      console.error("Erro ao enviar dados para a Matrix:", error);
      alert("Houve uma falha na conexão. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }
  // (Interface / HTML)
  return (
    <main className="min-h-screen text-white overflow-hidden md:cursor-none relative bg-black">

      {/* MATRIX (DevClub) Fundo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundEffects />
        {/* Essa div abaixo coloca uma leve sombra preta por cima da chuva para não atrapalhar a leitura do site */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Efeitos */} 
      <ScrollProgress />
      <CustomCursor />

      {/* Camada da frente */}
      <div className="relative z-10 flex flex-col w-full">

        {/* Hero e TechBanner */}
        <Hero onOpenMatrix={() => setShowForm(true)} />
        <TechBanner />

        {/* Nossos Números */}
        <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto relative z-10 w-full">
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

        {/* Banner de Empresas  */}
        <section className="pb-32 relative z-10 overflow-hidden w-full">
          <ScrollReveal>
            {/* Título centralizado: Empresas Parceiras */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Empresas <span className="text-green-400">Parceiras</span>
            </h2>
          </ScrollReveal>

          {/* Banner de Empresas Parceiras */}
          <CompanyBanner />
        </section>

        {/* Outras Sessões da Página */}
        <Formacoes />
        <TerminalTutores />
        <Depoimentos />

        {/* Botão de escolha da pílula */}
        <section className="py-32 px-4 max-w-4xl mx-auto text-center relative z-10 w-full">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight uppercase">
              TOME A PÍLULA VERDE E <span className="text-green-400">DOMINE O SISTEMA</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-lg md:text-xl">
              Junte-se ao <span className="text-white font-bold">DevClub</span> e comece a construir o seu futuro como desenvolvedor hoje mesmo.
            </p>
            <div className="flex justify-center">
              <MagneticElement>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-green-500 hover:bg-green-400 text-black font-extrabold py-5 px-12 rounded-full text-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:scale-105 flex items-center gap-3 uppercase"
                >
                  Quero tomar a pílula verde
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </MagneticElement>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </div>

      {/* Janela Flutuante (N8N) */}
      {showForm && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
          <div className="bg-zinc-950 border border-green-500/50 p-8 rounded-2xl max-w-md w-full shadow-[0_0_50px_rgba(34,197,94,0.15)] relative">

            <h3 className="text-green-400 text-2xl font-black mb-2 uppercase tracking-tight">
              Iniciando Protocolo
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Insira suas credenciais para acessar o sistema.
            </p>

            {formSuccess ? (
              <div className="py-8 text-center animate-pulse">
                <p className="text-white text-lg font-mono">
                  &gt; Pílula verde aceita.<br />
                  &gt; Conexão estabelecida.<br />
                  &gt; Verifique suas mensagens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="bg-zinc-900 border border-zinc-800 text-white p-3 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu melhor E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-zinc-900 border border-zinc-800 text-white p-3 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="WhatsApp (com DDD)"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="bg-zinc-900 border border-zinc-800 text-white p-3 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                  required
                />

                <div className="flex gap-4 mt-4 items-center">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    // BOTÃO PÍLULA VERMELHA
                    className="flex-1 bg-red-600 text-black font-black uppercase py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:text-white"
                  >
                    Pílula Vermelha
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-500 text-black font-black uppercase py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:text-white"
                  >
                    {isSubmitting ? 'Processando...' : 'Pílula Verde'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}