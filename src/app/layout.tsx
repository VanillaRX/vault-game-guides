import type { Metadata } from "next";
import { Orbitron, Manrope, JetBrains_Mono } from "next/font/google";
import { ClientLayout } from "@/components/layout/client-layout";
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
  verification: {
    google: "6xrjY2M3T1Q-1KVtiMvSmCS3HVsLZR51fCGKDw7C6Uw",
  },
  title: {
    default: "Vault Guides — Strategy & Management Game Walkthroughs",
    template: "%s | Vault Guides",
  },
  description:
    "In-depth production layouts, district adjacency guides, defense strategies, and optimization walkthroughs for strategy, city-builder, and colony sim games.",
  metadataBase: new URL("https://vault-game-guides.com"),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FKTX7NCSB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-7FKTX7NCSB');`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2426573212924333"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
