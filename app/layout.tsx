import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// O Título "UAU" que aparece na aba do navegador!
export const metadata: Metadata = {
  title: '"UAU" - Concurso DevClub',
  description: "Landing page disruptiva e imersiva para o DevClub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}