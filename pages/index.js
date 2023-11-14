import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Chef je suis encore en retard</title>
        <meta
          name="description"
          content="Conseils et excuses pour se faire pardonner d'un retard auprès de son chef. Astuces professionnelles pour minimiser les retards et améliorer la communication."
        />
      </Head>
      <main
        className={`flex flex-col items-center justify-center h-screen p-24 ${inter.className}`}
      >
        <h1 className="text-4xl font-bold mb-6">
          Bienvenue sur Chef je suis encore en retard
        </h1>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Astuces pour Minimiser les Retards
          </h2>
          <p>
            Apprenez des stratégies efficaces pour éviter les retards fréquents
            à votre chef...
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Excuses Convaincantes</h2>
          <p>
            Découvrez une liste d'excuses professionnelles et crédibles pour
            expliquer vos retards à votre chef...
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Comment Se Rattraper</h2>
          <p>
            Explorez des suggestions sur la manière de rattraper le temps perdu
            et le retard auprès de votre chef...
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Communication Efficace</h2>
          <p>
            Apprenez l'importance d'une communication ouverte et transparente
            avec votre chef...
          </p>
        </section>

        <footer className="text-center mt-8">
          Chez Chef je suis encore en retard, nous sommes là pour vous aider à
          traverser les moments délicats de la vie professionnelle.
        </footer>
      </main>
    </>
  );
}
