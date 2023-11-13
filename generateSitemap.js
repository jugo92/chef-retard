const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const sitemap = new SitemapStream({ hostname: "https://chef-retard.live" });

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/excuses", changefreq: "weekly", priority: 0.8 },
  // Ajoutez d'autres pages si nécessaire
];

pages.forEach(page => {
  sitemap.write(page);
});

sitemap.end();

streamToPromise(sitemap)
  .then(xmlString => {
    fs.writeFileSync("./public/sitemap.xml", xmlString);
    console.log("Sitemap généré avec succès!");
  })
  .catch(err => {
    console.error("Erreur lors de la génération du sitemap :", err);
  });