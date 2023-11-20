import Head from "next/head";
import ImageSVG from "@/components/ImageSVG";
import Link from "next/link";

const MinimiserRetardsPage = () => {
  return (
    <>
      <Head>
        <title>
          Minimiser les Retards au Travail - Conseils pour les Employés
        </title>
        <meta
          name="description"
          content="Découvrez des conseils pratiques pour les employés afin de minimiser les retards au travail. Astuces pour être ponctuel et maintenir de bonnes relations professionnelles avec votre chef."
        />
      </Head>

      <main className="flex flex-col content items-center justify-center h-screen p-8 mt-16">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Minimiser les Retards au Travail - Conseils pour les Employés
        </h1>
        <div className="flex flex-col justify-center md:flex-col items-center mb-8">
          <div className="flex md:flex-row items-center justify-center">
            <section className="flex flex-col items-center justify-center  md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                Organisation la Veille
              </h2>
              <Link href="/minimiser-retard/organisation-la-veille" className="text-center">
              <ImageSVG
                src={"/home.svg"}
                alt="Chef Retard"
                width="200"
                height="200"
              />
          </Link>
              <span>
                Transformez votre quotidien professionnel grâce à une
                organisation minutieuse de votre veille. Anticipez votre journée
                en planifiant vos tâches, en consultant votre emploi du temps,
                et en assurant une préparation complète pour le lendemain. Cette
                approche proactive favorise non seulement l'efficacité, mais
                également la ponctualité. Explorez notre article détaillé pour
                découvrir des stratégies pratiques visant à optimiser votre
                routine préalable au travail et à maximiser votre productivité
                au quotidien.
              </span>
            </section>
            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                Prévoir des Marges de Sécurité
              </h2>
              <Link href="/minimiser-retard/prevoir-marge-securite" className="text-center">
              <ImageSVG
                src={"/home.svg"}
                alt="Chef Retard"
                width="200"
                height="200"
              />
          </Link>
              <span>
                Évitez les retards en ajoutant des marges de sécurité à vos
                déplacements. Anticipez les aléas tels que le trafic ou les
                problèmes de transport en prévoyant un temps supplémentaire.
                Cette stratégie proactive garantit des arrivées ponctuelles,
                voire en avance. Découvrez des conseils détaillés dans notre
                article pour optimiser vos déplacements professionnels et
                assurer une gestion efficace du temps
              </span>
            </section>
          </div>
          <div className="flex md:flex-row items-center justify-center">
            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                Prioriser les Tâches Importantes
              </h2>
              <Link href="/minimiser-retard/prioriser-taches-importantes" className="text-center">
              <ImageSVG
                src={"/home.svg"}
                alt="Chef Retard"
                width="200"
                height="200"
              />
          </Link>
              <span>
                Adoptez une approche flexible dans votre quotidien
                professionnel. Soyez prêt à vous adapter aux changements
                imprévus, aux ajustements de priorités et aux nouvelles
                opportunités. Cette flexibilité renforce votre agilité
                professionnelle et vous permet de surmonter les défis avec
                aisance. Explorez notre article pour découvrir comment cultiver
                une mentalité adaptable et exceller dans un environnement
                professionnel dynamique.
              </span>
            </section>

            <section className="flex flex-col items-center justify-center mb-8 md:w-1/3 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">
                Communiquer en Cas d'Imprévu
              </h2>
              <Link href="/minimiser-retard/communiquer-cas-imprevu" className="text-center">
              <ImageSVG
                src={"/home.svg"}
                alt="Chef Retard"
                width="200"
                height="200"
              />
          </Link>
              <span>
                En cas d'imprévu, communiquez rapidement avec votre chef.
                Prévenez-le dès que possible et proposez des solutions pour
                minimiser les perturbations. La communication ouverte est
                essentielle pour maintenir de bonnes relations professionnelles.
              </span>
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

export default MinimiserRetardsPage;
