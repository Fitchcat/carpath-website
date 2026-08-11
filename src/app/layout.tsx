import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pilotez votre croissance | CARPATH, partenaire TPE/PME",
    template: "%s | CARPATH",
  },
  description:
    "Votre entreprise tourne, mais la croissance piétine ? CARPATH installe et pilote votre système de croissance. Réservez un audit gratuit, sans engagement.",
  keywords: [
    "système de croissance",
    "partenaire croissance",
    "pilotage TPE PME",
    "directeur marketing externalisé",
    "audit gratuit croissance",
  ],
  authors: [{ name: "CARPATH" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://carpath.fr",
    siteName: "CARPATH",
    title: "Pilotez votre croissance | CARPATH",
    description:
      "CARPATH installe et pilote le système de croissance qui manque à votre entreprise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-[var(--bg-base)] text-[var(--text-primary)] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
