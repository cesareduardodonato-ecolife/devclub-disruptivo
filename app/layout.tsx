import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração robusta para Redes Sociais (LinkedIn, WhatsApp, Discord)
export const metadata: Metadata = {
  metadataBase: new URL("https://devclub-disruptivo.vercel.app"),
  title: "DevClub Disruptivo | Tome a Pílula Verde",
  description: "Landing Page interativa e disruptiva com temática Matrix e automação em tempo real.",
  openGraph: {
    title: "DevClub Disruptivo | Tome a Pílula Verde",
    description: "Landing Page interativa e disruptiva com temática Matrix e automação em tempo real.",
    url: "https://devclub-disruptivo.vercel.app",
    siteName: "DevClub Disruptivo",
    images: [
      {
        url: "/preview.png", // Imagem localizada na pasta /public
        width: 1200,
        height: 630,
        alt: "Tela inicial do projeto DevClub Disruptivo com tema Matrix",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevClub Disruptivo | Tome a Pílula Verde",
    description: "Landing Page interativa e disruptiva com temática Matrix.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
