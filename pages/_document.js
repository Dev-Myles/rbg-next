import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        rel="preload"
        href="../public/fonts/BebasNeue-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="../public/fonts/Questrial-Regular.ttf"
        as="font"
        crossOrigin=""
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
