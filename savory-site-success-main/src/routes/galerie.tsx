import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import hero from "@/assets/hero-bouchon.jpg";
import lustre from "@/assets/decor-lustre.jpg";
import mur from "@/assets/decor-mur.jpg";
import fresque from "@/assets/decor-fresque.jpg";
import quenelle from "@/assets/dish-quenelle.jpg";
import tablier from "@/assets/dish-tablier.jpg";
import saucisson from "@/assets/dish-saucisson.jpg";
import cervelle from "@/assets/dish-cervelle.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: buildMeta({
      title: "Galerie — Décor & plats du bouchon Chabert et Fils",
      description: "Photos du bouchon lyonnais Chabert et Fils : salle, lustre de l'Opéra, fresque de Guignol, plats traditionnels — quenelle, tablier de sapeur, saucisson brioché.",
      path: "/galerie",
    }),
    links: buildLinks("/galerie"),
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: hero, alt: "Salle du bouchon Chabert et Fils avec nappes vichy et lustre doré", w: 1920, h: 1080 },
  { src: lustre, alt: "Lustre de l'ancien Opéra de Lyon", w: 1280, h: 1600 },
  { src: mur, alt: "Mur de photos de célébrités dédicacées", w: 1600, h: 1200 },
  { src: fresque, alt: "Fresque murale Guignol et Lyon traditionnel", w: 1600, h: 1200 },
  { src: quenelle, alt: "Quenelle de brochet sauce Nantua", w: 1024, h: 1024 },
  { src: tablier, alt: "Tablier de sapeur grillé sauce gribiche", w: 1024, h: 1024 },
  { src: saucisson, alt: "Saucisson chaud brioché lyonnais", w: 1024, h: 1024 },
  { src: cervelle, alt: "Cervelle de canut aux herbes fraîches", w: 1024, h: 1024 },
];

function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Galerie", path: "/galerie" }])} />
      <section className="container mx-auto px-4 pt-16 pb-12">
        <SectionTitle
          eyebrow="Galerie"
          title="L'âme du bouchon en images"
          description="Décor brocante, ambiance feutrée, plats canaille : un aperçu de ce qui vous attend rue des Marronniers."
          as="h1"
        />
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {IMAGES.map((img, i) => (
            <figure key={i} className={`overflow-hidden rounded-lg shadow ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition duration-700 aspect-[4/3]"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
