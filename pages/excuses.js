import Head from "next/head";
import ImageSVG from "@/components/ImageSVG";
import Link from "next/link";

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

      <main className="flex flex-col content items-center justify-center h-screen p-8 mt-16">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Excuses Convaincantes pour expliquer votre retard à votre chef
        </h1>
        <div className="flex flex-col justify-center md:flex-col items-center mb-8">
          <div className="flex md:flex-row items-center justify-center">
            <section className="flex flex-col items-center justify-center  md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                1. Circulation Inattendue
              </h2>

              <Link
                href="/minimiser-retard/organisation-la-veille"
                className="text-center"
              >
                <ImageSVG
                  src={"/home.svg"}
                  alt="Chef Retard"
                  width="200"
                  height="200"
                />
              </Link>
              <p>
                "Je m'excuse pour le retard. Aujourd'hui, le trafic était
                extrêmement dense en raison de travaux routiers imprévus. J'ai
                tout essayé pour arriver à temps, mais la situation était hors
                de mon contrôle."
              </p>
            </section>
            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                2. Problèmes de Transport Public
              </h2>
              <Link
                href="/minimiser-retard/prevoir-marge-securite"
                className="text-center"
              >
                <ImageSVG
                  src={"/home.svg"}
                  alt="Chef Retard"
                  width="200"
                  height="200"
                />
              </Link>

              <p>
                "Mes excuses pour le retard. Ce matin, le service de transports
                en commun a été perturbé en raison d'une panne inattendue. J'ai
                attendu patiemment les réparations, mais cela a malheureusement
                entraîné un retard significatif dans mon trajet."
              </p>
            </section>
          </div>
          <div className="flex md:flex-row items-center justify-center">
            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">3. Urgence Familiale</h2>

              <Link
                href="/minimiser-retard/prevoir-marge-securite"
                className="text-center"
              >
                <ImageSVG
                  src={"/home.svg"}
                  alt="Chef Retard"
                  width="200"
                  height="200"
                />
              </Link>
              <p>
                "Je m'excuse sincèrement pour le retard. Une urgence familiale
                inattendue est survenue ce matin, nécessitant mon attention
                immédiate. J'ai géré la situation du mieux que j'ai pu, mais
                cela a entraîné un retard imprévu dans mon arrivée au travail."
              </p>
            </section>

            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                4. Problèmes Techniques
              </h2>

              <Link
                href="/minimiser-retard/communiquer-cas-imprevu"
                className="text-center"
              >
                <ImageSVG
                  src={"/home.svg"}
                  alt="Chef Retard"
                  width="200"
                  height="200"
                />
              </Link>
              <p>
                "Mes excuses pour le retard. En chemin, ma voiture a eu des
                problèmes techniques soudains, ce qui m'a obligé à trouver une
                solution de dépannage. J'ai pris des mesures immédiates pour
                résoudre le problème, mais cela a entraîné un retard indépendant
                de ma volonté."
              </p>
            </section>
          </div>
        </div>

        <footer className="text-gray-600 text-sm mt-8 text-center">
          Lorsqu'un imprévu survient, communiquez rapidement avec votre chef.
          Informez-le dès que possible et proposez des solutions pour atténuer
          les perturbations. La communication ouverte est cruciale pour
          préserver des relations professionnelles solides. Explorez notre
          article dédié pour découvrir des stratégies efficaces de communication
          en cas d'imprévu et maintenir une collaboration positive avec votre
          supérieur.
        </footer>
      </main>
    </>
  );
};

export default ExcusesPage;
