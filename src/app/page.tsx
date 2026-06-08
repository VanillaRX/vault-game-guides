import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=/en`} />
        <link rel="canonical" href="https://vault-game-guides.com/en" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('/en');`,
          }}
        />
      </head>
      <body>
        <p>
          Redirecting to <a href="/en">Vault Guides</a>...
        </p>
      </body>
    </html>
  );
}
