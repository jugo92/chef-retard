import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

const ExcusesPage = () => {
  return (
    <>
      <Head>
        <title>Excuses Convaincantes pour Retard - Chef Retard</title>
        <meta
          name="description"
          content="Découvrez des excuses professionnelles convaincantes pour expliquer vos retards au travail. Astuces pour se faire pardonner par votre chef et maintenir de bonnes relations professionnelles."
        />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen p-8 mt-16 relative">
        <h1 className="excuses-title text-4xl font-bold mb-8 text-center">
          Excuses Convaincantes pour expliquer votre retard à votre chef
        </h1>
        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Circulation Inattendue</h2>
          <p>
            "Je m'excuse pour le retard. Aujourd'hui, le trafic était
            extrêmement dense en raison de travaux routiers imprévus. J'ai tout
            essayé pour arriver à temps, mais la situation était hors de mon
            contrôle."
          </p>
        </section>
        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">
            2. Problèmes de Transport Public
          </h2>
          <p>
            "Mes excuses pour le retard. Ce matin, le service de transports en
            commun a été perturbé en raison d'une panne inattendue. J'ai attendu
            patiemment les réparations, mais cela a malheureusement entraîné un
            retard significatif dans mon trajet."
          </p>
        </section>
        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">3. Urgence Familiale</h2>
          <p>
            "Je m'excuse sincèrement pour le retard. Une urgence familiale
            inattendue est survenue ce matin, nécessitant mon attention
            immédiate. J'ai géré la situation du mieux que j'ai pu, mais cela a
            entraîné un retard imprévu dans mon arrivée au travail."
          </p>
        </section>
        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">4. Problèmes Techniques</h2>
          <p>
            "Mes excuses pour le retard. En chemin, ma voiture a eu des
            problèmes techniques soudains, ce qui m'a obligé à trouver une
            solution de dépannage. J'ai pris des mesures immédiates pour
            résoudre le problème, mais cela a entraîné un retard indépendant de
            ma volonté."
          </p>
        </section>
        <footer className="text-gray-600 text-sm mt-8 text-center">
          Retrouvez plus d'excuses et de conseils sur Chef je suis encore en
          retard. Nous sommes là pour vous aider à maintenir de bonnes relations
          professionnelles malgré les retards occasionnels.
        </footer>
      </main>
    </>
  );
};

export default ExcusesPage;
