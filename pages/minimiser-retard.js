import Head from "next/head";

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

      <main className="flex flex-col items-center justify-center h-screen p-8 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Minimiser les Retards au Travail - Conseils pour les Employés
        </h1>

        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">1. Organisation la Veille</h2>
          <p>
            "Organisez-vous la veille pour préparer votre journée de travail.
            Prévoyez vos tâches, vérifiez votre emploi du temps, et assurez-vous
            d'avoir tout prêt pour le lendemain. Cela vous permettra de
            commencer votre journée de manière efficace et ponctuelle."
          </p>
        </section>

        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">
            2. Prévoir des Marges de Sécurité
          </h2>
          <p>
            "Ajoutez des marges de sécurité à vos déplacements. Anticipez les
            éventuels retards liés au trafic, aux transports en commun, ou à
            d'autres imprévus. Prévoir un temps supplémentaire vous permettra
            d'arriver à l'heure, voire en avance."
          </p>
        </section>

        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">
            3. Prioriser les Tâches Importantes
          </h2>
          <p>
            "Identifiez et priorisez les tâches importantes. Concentrez-vous sur
            les activités cruciales en début de journée. Cela vous permettra
            d'accomplir l'essentiel même en cas de retard, minimisant ainsi
            l'impact sur votre productivité."
          </p>
        </section>

        <section className="max-w-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">
            4. Communiquer en Cas d'Imprévu
          </h2>
          <p>
            "En cas d'imprévu, communiquez rapidement avec votre chef.
            Prévenez-le dès que possible et proposez des solutions pour
            minimiser les perturbations. La communication ouverte est
            essentielle pour maintenir de bonnes relations professionnelles."
          </p>
        </section>

        <footer className="text-gray-600 text-sm mt-8 text-center">
          Retrouvez plus de conseils sur la ponctualité et la gestion du temps
          sur Chef je suis encore en retard. Nous sommes là pour vous aider à
          optimiser votre présence au travail.
        </footer>
      </main>
    </>
  );
};

export default MinimiserRetardsPage;
