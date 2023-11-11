import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <title>Chef Retard</title>
        <meta
          name="description"
          content="Des excuses hilarantes pour justifier un retard au travail. Rendez votre journée plus légère avec nos idées loufoques."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
