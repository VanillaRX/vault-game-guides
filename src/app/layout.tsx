import type { Metadata } from "next";
import Script from "next/script";
import { Orbitron, Manrope, JetBrains_Mono } from "next/font/google";
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
    default: "Vault Guides — Discover Your Next Game",
    template: "%s | Vault Guides",
  },
  description:
    "Discover strategy, simulation, and management games worth your time. Real Steam reviews, honest recommendations, and smart picks.",
  metadataBase: new URL("https://vault-game-guides.com"),
  openGraph: {
    title: "Vault Guides — Game Discovery Platform",
    description:
      "Browse 50+ curated strategy and sim games. Real player reviews, screenshots, and smart recommendations.",
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
      suppressHydrationWarning
    >
      <head>
        {/* Theme init — runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("vault-theme");if(t==="cozy"){var r=document.documentElement.style;r.setProperty("--bg","#faf7f2");r.setProperty("--fg","#3d2e28");r.setProperty("--accent","#e8785a");r.setProperty("--neon","#5ba675");r.setProperty("--amber","#d4a853");r.setProperty("--card","#ffffff");r.setProperty("--border","#e8ddd0");r.setProperty("--muted","#9b8c80")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        {children}
        {/* GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7FKTX7NCSB"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-7FKTX7NCSB');`,
          }}
        />
        {/* AdSense */}
        <Script
          id="adsense-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2426573212924333"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
