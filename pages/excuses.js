import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ExcusesPage = () => {
  const excuses = [
    "Désolé, j'ai perdu la notion du temps en préparant un repas gastronomique.",
    "Mon réveil a décidé de prendre une journée de congé, comme moi.",
    "Un embouteillage de chats sur le chemin du travail, ça existe, je l'ai vu.",
    "J'ai été retenu en otage par une série passionnante sur Netflix.",
    "Ma licorne de compagnie a mangé mes clés de voiture. Vraiment.",
  ];

  return (
    <main
      className={`flex flex-col items-center justify-center h-screen p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold mb-4">Excuses Hilarantes</h1>
      <p className="text-lg text-gray-600 mb-8">
        Parfois, la vie nous donne des scénarios dignes d'un film comique. Voici
        quelques excuses hilarantes que vous pouvez utiliser pour justifier vos
        retards au travail.
      </p>
      <ul className="list-disc text-left max-w-md">
        {excuses.map((excuse, index) => (
          <li key={index} className="mb-2">
            {excuse}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ExcusesPage;
