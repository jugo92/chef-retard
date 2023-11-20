import React from 'react';
import Head from 'next/head';
import ImageSVG from "@/components/ImageSVG";

const PrioriserTachesImportantes = () => {
  const title = "Prioriser les Tâches Importantes: Gagnez en Efficacité avec le Chef";
  const paragraphs = [
    "La capacité à prioriser les tâches est une compétence essentielle dans le monde professionnel. Dans cet article, nous allons explorer comment prioriser efficacement les tâches importantes pour optimiser votre temps de travail et impressionner votre chef.",
    "Imaginez pouvoir accomplir les tâches les plus cruciales en premier, montrant ainsi à votre chef votre capacité à gérer les responsabilités importantes. En priorisant, vous démontrez votre sens des priorités et votre engagement envers les objectifs de l'entreprise.",
    "Découvrez des stratégies pratiques pour évaluer l'importance des tâches, définir des priorités en fonction des objectifs globaux de l'entreprise, et optimiser votre emploi du temps pour maximiser la productivité.",
    "L'article explore également des outils et des techniques de gestion des tâches qui peuvent vous aider à organiser votre liste de tâches, à suivre les progrès et à ajuster vos priorités en fonction des changements dans l'environnement professionnel.",
    "La flexibilité est également cruciale. Apprenez à vous adapter aux changements de priorités, à saisir de nouvelles opportunités et à gérer les imprévus tout en maintenant votre productivité. Cette agilité professionnelle renforce votre position en tant qu'employé précieux.",
    "En conclusion, prioriser les tâches importantes va au-delà de simplement accomplir des missions. C'est un moyen de montrer à votre chef que vous comprenez les objectifs de l'entreprise et que vous êtes prêt à contribuer de manière significative. Explorez les conseils détaillés dans cet article pour gagner en efficacité et impressionner votre chef."
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={paragraphs.join(' ').substring(0, 150)} />
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

export default PrioriserTachesImportantes;
