import type { Metadata } from "next";
import { Orbitron, Manrope, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vault Guides — Strategy & Management Game Walkthroughs",
    template: "%s | Vault Guides",
  },
  description:
    "In-depth production layouts, district adjacency guides, defense strategies, and optimization walkthroughs for strategy, city-builder, and colony sim games.",
  metadataBase: new URL("https://vanillarx.github.io/vault-game-guides"),
  openGraph: {
    title: "Vault Guides — Strategy & Management Game Guides",
    description:
      "Production chains, district layouts, killbox designs, and colony sim strategies. Anno 1800, Civ 6, RimWorld, and more.",
    type: "website",
    siteName: "Vault Guides",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
