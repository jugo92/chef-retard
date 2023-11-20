import React from 'react';
import Head from 'next/head';
import ImageSVG from "@/components/ImageSVG";

const OrganisationLaVeille = () => {
    const title = "Organisation la Veille: Optimisez votre Journée Professionnelle";
    const paragraphs = [
      "Transformez votre quotidien professionnel grâce à une organisation minutieuse de votre veille. Anticipez votre journée en planifiant vos tâches, en consultant votre emploi du temps, et en assurant une préparation complète pour le lendemain. Cette approche proactive favorise non seulement l'efficacité, mais également la ponctualité.",
      "L'organisation la veille est un aspect essentiel pour éviter les retards au travail. En adoptant des stratégies de planification, vous minimisez les risques de retards inutiles et démontrez votre engagement envers la ponctualité. Explorez notre article détaillé pour découvrir des conseils pratiques visant à optimiser votre routine préalable au travail et à maximiser votre productivité au quotidien.",
      "L'efficacité professionnelle commence par une gestion proactive de votre emploi du temps. Planifiez vos tâches en fonction de leur importance, définissez des priorités et assurez-vous de disposer de suffisamment de temps pour chaque activité. En prévoyant des marges de sécurité, vous vous donnez la possibilité de faire face à des imprévus tout en maintenant votre ponctualité.",
      "Explorez également des outils et techniques de gestion du temps pour améliorer votre organisation. Des applications de suivi du temps, des listes de tâches bien structurées et des rappels peuvent être des alliés précieux dans votre quête d'une journée de travail optimisée.",
      "En résumé, optimiser votre organisation la veille est une étape cruciale pour éviter les retards et impressionner votre chef. Restez proactif, adoptez des stratégies de planification efficaces, et transformez chaque journée de travail en une opportunité de briller professionnellement."
    ];
  
    return (
        <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={paragraphs[0]} />
        </Head>
        <main className="flex flex-col content items-center justify-center h-screen p-8 mt-16">
  
        <article className="flex flex-col items-center justify-center">
  <h1 className="text-2xl font-bold mb-2">{title}</h1>
  <ImageSVG
    src={"/home.svg"}
    alt="Chef Retard"
    width="200"
    height="200"
    className="mb-4"
  />
  {paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</article>
      </main>
    </>
    );
  };
  
  export default OrganisationLaVeille;
  