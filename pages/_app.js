import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Head } from "next/document";

export default function App({ Component, pageProps }) {
  <Head>
    <title>Chef Retard</title>
  </Head>;
  return (
    <>
      <main className="content">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
