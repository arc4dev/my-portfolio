import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="description"
          content="Hi, I'm Arkadiusz Sroczyk. I'm a full-stack developer, CS student and gym addict!"
        />
        <meta name="author" content="Arkadiusz Sroczyk" />

        <meta property="og:title" content="Arkadiusz Sroczyk" />
        <meta
          property="og:description"
          content="Hi, I'm Arkadiusz Sroczyk. I'm a full-stack developer, CS student and gym addict!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arc4dev.me" />
        <meta
          property="og:image"
          content="https://arc4dev.me/img/project-image.png"
        />
        <meta property="og:site_name" content="Arkadiusz Sroczyk" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arkadiusz Sroczyk" />
        <meta
          name="twitter:description"
          content="Hi, I'm Arkadiusz Sroczyk. I'm a full-stack developer, CS student and gym addict!"
        />
        <meta
          name="twitter:image"
          content="https://arc4dev.me/img/project-image.png"
        />
      </Head>

      <body>
        <Main />
        <div id="portal-root" />
        <NextScript />
      </body>
    </Html>
  );
}
