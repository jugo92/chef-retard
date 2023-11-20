import React from 'react';
import Head from 'next/head';
import ImageSVG from "@/components/ImageSVG";

const CommuniquerImprevu = () => {
  const title = "Communiquer en Cas d'Imprévu: Gestion des Situations Inattendues par le Chef";
  const imageUrl = "/image-communiquer-imprevu.jpg"; // Remplacez par le chemin de votre image
  const paragraphs = [
    "La communication en cas d'imprévu est un aspect essentiel de la gestion professionnelle. Dans cet article, nous allons explorer l'importance de communiquer efficacement avec votre chef lors de situations inattendues.",
    "Imprévus tels que des retards, des problèmes techniques ou des urgences peuvent survenir à tout moment. La manière dont vous communiquez ces situations à votre chef peut avoir un impact significatif sur la perception de votre professionnalisme.",
    "Découvrez des stratégies pour communiquer rapidement et clairement en cas d'imprévu. Apprenez à anticiper les problèmes potentiels, à proposer des solutions proactives, et à minimiser les perturbations pour votre équipe et vos responsabilités.",
    "L'article explore également l'importance de la transparence et de l'honnêteté dans la communication professionnelle. En montrant que vous êtes prêt à assumer la responsabilité des imprévus et à travailler vers des solutions, vous renforcez la confiance de votre chef en vos compétences.",
    "La gestion des imprévus peut également être une opportunité de démontrer votre réactivité et votre capacité à gérer la pression. Explorez des conseils pratiques pour rester calme sous pression, prendre des décisions éclairées, et maintenir des relations professionnelles positives.",
    "En conclusion, communiquer en cas d'imprévu est un élément essentiel de la gestion professionnelle. En adoptant des pratiques de communication efficaces, vous montrez à votre chef que vous êtes prêt à faire face à toutes les situations, même les plus inattendues. Explorez les conseils détaillés dans cet article pour perfectionner vos compétences en communication et impressionner votre chef."
  ];

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={paragraphs.join(' ').substring(0, 150)} />
        {/* Ajoutez d'autres balises meta SEO si nécessaire */}
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

export default CommuniquerImprevu;
