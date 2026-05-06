import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import lustre from "@/assets/decor-lustre.jpg";
import mur from "@/assets/decor-mur.jpg";
import fresque from "@/assets/decor-fresque.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: buildMeta({
      title: "Notre Histoire — Chabert et Fils, Bouchon Lyonnais",
      description: "Histoire du bouchon Chabert et Fils, rue des Marronniers à Lyon 2 : décor brocante, lustre de l'ancien Opéra, mur des célébrités, traditions canailles.",
      path: "/a-propos",
    }),
    links: buildLinks("/a-propos"),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Histoire", path: "/a-propos" }])} />

      <section className="container mx-auto px-4 pt-16 pb-12">
        <SectionTitle
          eyebrow="Notre histoire"
          title="Un bouchon lyonnais comme on n'en fait plus"
          description="Rue des Marronniers, à deux pas de la place Bellecour, Chabert et Fils perpétue depuis des décennies la tradition des bouchons lyonnais."
          as="h1"
        />
      </section>

      <section className="container mx-auto px-4 max-w-4xl text-lg leading-relaxed text-foreground/90 space-y-6">
        <p>Chabert et Fils, c'est d'abord une famille, une cuisine, et une mémoire. Celle des mères lyonnaises qui, dès la fin du XIXe siècle, ont posé les codes d'une gastronomie populaire faite de plats canaille, de produits du terroir et d'un service sans façon.</p>
        <p>Notre maison occupe l'un des emplacements les plus charmants de Lyon : la rue des Marronniers, ruelle pavée du 2ème arrondissement où s'alignent les bouchons depuis plus d'un siècle. À deux minutes à pied de la place Bellecour, on y vient pour manger lyonnais, vraiment.</p>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center max-w-5xl">
        <img src={lustre} alt="Lustre de l'ancien Opéra de Lyon, pièce maîtresse de la décoration" width={1280} height={1600} loading="lazy" className="rounded-lg shadow-lg w-full h-[480px] object-cover" />
        <div>
          <h2 className="font-display text-3xl text-foreground">Le lustre de l'ancien Opéra</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Au cœur de la salle principale, un imposant lustre provenant de l'ancien Opéra de Lyon
            éclaire de son halo doré les conversations et les assiettes. C'est l'une des pièces
            emblématiques d'un décor que nous avons patiemment composé, objet après objet, comme un
            cabinet de curiosités lyonnaises.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 items-center max-w-5xl">
        <div className="md:order-2">
          <img src={mur} alt="Mur de photos dédicacées de célébrités passées au bouchon" width={1600} height={1200} loading="lazy" className="rounded-lg shadow-lg w-full h-[420px] object-cover" />
        </div>
        <div className="md:order-1">
          <h2 className="font-display text-3xl text-foreground">Le mur des célébrités</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Johnny Hallyday, Jean-Paul Belmondo, Jean Dujardin… Au fil des décennies, des dizaines
            d'artistes et de personnalités ont franchi notre porte. Leurs photos dédicacées tapissent
            les murs et racontent notre attachement à la convivialité lyonnaise — celle qui ne fait
            pas de différence entre une table d'habitués et une visite imprévue.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-2 gap-10 items-center max-w-5xl">
        <img src={fresque} alt="Fresque colorée représentant Guignol et la vie lyonnaise traditionnelle" width={1600} height={1200} loading="lazy" className="rounded-lg shadow-lg w-full h-[420px] object-cover" />
        <div>
          <h2 className="font-display text-3xl text-foreground">La fresque de Guignol</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Une grande peinture murale colorée habille l'une de nos salles : Guignol, Gnafron, scènes
            de Croix-Rousse et tablée populaire. Hommage au folklore lyonnais et à la transmission de
            ses traditions, elle accompagne nos clients comme une fenêtre ouverte sur la mémoire de
            la ville.
          </p>
        </div>
      </section>

      <section className="bg-wood text-cream py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-script text-3xl text-accent">Notre engagement</p>
          <h2 className="font-display text-4xl mt-2">Authenticité, fait maison, produits locaux</h2>
          <p className="mt-5 text-cream/80 text-lg leading-relaxed">
            Toutes nos préparations sont faites en cuisine, à partir de viandes, fromages et légumes
            sélectionnés chez nos artisans lyonnais — bouchers de la rive gauche, fromagers des Halles
            Paul Bocuse, vignerons des Côtes du Rhône et du Beaujolais. Le bouchon, c'est aussi cela :
            un savoir-faire transmis et un sourcing exigeant.
          </p>
        </div>
      </section>
    </>
  );
}
