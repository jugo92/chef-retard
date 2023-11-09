import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center h-screen p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-4">Chef Retard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Découvrez des excuses hilarantes pour justifier vos retards au travail
        de manière légère et amusante.
      </p>
      <Link href="/excuses">Découvrir les excuses</Link>
    </main>
  );
}
