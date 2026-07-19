"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, MonitorSmartphone, Rocket } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const cursos = [
  {
    titulo: "Dev Front-End",
    desc: "Domine React, Next.js e Tailwind. Crie interfaces avançadas que deixam qualquer recrutador e usuário de queixo caído.",
    icon: MonitorSmartphone,
  },
  {
    titulo: "Dev Full-Stack",
    desc: "O pacote completo. Do banco de dados à interface. Torne-se o profissional mais disputado e bem pago do mercado.",
    icon: Code2,
  },
  {
    titulo: "Missão Especial",
    desc: "Projetos práticos, portfólio real e preparação para entrevistas. Você não vai só aprender, vai ser contratado.",
    icon: Rocket,
  }
];

// Sub-componente: O Card 3D
const TiltCard = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Valores de movimento do framer-motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Deixa o movimento suave (efeito mola)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transforma o movimento do mouse em rotação (limite de 15 graus)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calcula a porcentagem da posição do mouse (-0.5 até 0.5)
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    // Volta pro centro quando o mouse sai
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollReveal delay={index * 0.2}>
      {/* O container precisa de perspective para o 3D funcionar */}
      <div style={{ perspective: "1000px" }} className="h-full">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-green-500/50 transition-colors group cursor-crosshair"
        >
          {/* Efeito de holograma/luz que aparece no hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

          {/* O transform: translateZ(50px) é o que faz o conteúdo saltar pra fora da tela */}
          <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full transform-style-3d">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
              <item.icon className="w-8 h-8 text-green-400" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">{item.titulo}</h3>
            <p className="text-zinc-400 leading-relaxed flex-grow">{item.desc}</p>

            <div className="mt-8">
              <span className="text-green-400 font-bold group-hover:underline underline-offset-4 cursor-pointer flex items-center gap-2">
                Conhecer trilha <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
};

export const Formacoes = () => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Nossas <span className="text-green-400">Formações</span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Esqueça os cursos teóricos e chatos. Aqui você aprende programando os projetos que as empresas exigem nos testes técnicos.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cursos.map((item, index) => (
          <TiltCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};