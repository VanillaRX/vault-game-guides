/**
 * Redirect stub for legacy URLs. Generates a static HTML page that redirects
 * to the canonical /en/... URL. All legacy pages use this to avoid duplicate content.
 *
 * Usage in a legacy page.tsx:
 *   <LegacyRedirect to="/en/games" />
 */
export function LegacyRedirect({ to }: { to: string }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
        <link rel="canonical" href={`https://vault-game-guides.com${to}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('${to}');`,
          }}
        />
      </head>
      <body>
        <p>
          Redirecting to <a href={to}>Vault Guides</a>...
        </p>
      </body>
    </html>
  );
}
