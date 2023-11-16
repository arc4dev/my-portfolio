import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />

        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192x192.png" />
        <meta
          name="description"
          content="Arkadiusz Sroczyk portfolio website"
        />
        <meta name="keywords" content="arc4dev,arkadiusz,arkadiusz sroczyk" />
        <meta name="author" content="Arkadiusz Sroczyk" />
      </Head>

      <body>
        <Main />
        <div id="portal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
