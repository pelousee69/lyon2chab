import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ChevronRight } from "lucide-react";
import hero from "@/assets/hero-bouchon.jpg";
import lustre from "@/assets/decor-lustre.jpg";
import fresque from "@/assets/decor-fresque.jpg";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { RESTAURANT } from "@/content/restaurant";
import { MENU } from "@/content/menu";
import { REVIEWS } from "@/content/reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Chabert et Fils — Bouchon Lyonnais à Bellecour, Lyon 2",
      description: "Bouchon lyonnais authentique rue des Marronniers, à 2 minutes de Bellecour. Quenelle de brochet, tablier de sapeur, tarte aux pralines : la tradition canaille à Lyon 2.",
      path: "/",
      image: "/og-cover.jpg",
    }),
    links: buildLinks("/"),
  }),
  component: HomePage,
});

function HomePage() {
  const signatures = MENU.flatMap((s) => s.items).filter((i) => i.signature).slice(0, 4);
  const topReviews = REVIEWS.slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }])} />

      {/* HERO */}
      <section className="relative h-[88vh] min-h-[560px] flex items-center justify-center text-center text-cream">
        <img
          src={hero}
          alt="Salle du bouchon Chabert et Fils à Lyon, lustre de l'ancien Opéra et nappes vichy rouges"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative container mx-auto px-4 max-w-4xl">
          <p className="font-script text-3xl md:text-4xl text-accent">Le vrai bouchon lyonnais</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-tight">
            Chabert <span className="text-primary">&amp;</span> Fils
          </h1>
          <p className="mt-5 text-lg md:text-xl text-cream/85 max-w-2xl mx-auto">
            Cuisine canaille, décor brocante et accueil chaleureux rue des Marronniers,
            à deux pas de la place Bellecour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${RESTAURANT.phone}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90">
              <Phone className="w-4 h-4" /> Réserver une table
            </a>
            <Link to="/menu" className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-3 rounded-md font-semibold hover:bg-cream/10">
              Voir la carte <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-cream/80">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 11 rue des Marronniers, Lyon 2</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Ouvert 7j/7 midi & soir</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-accent text-accent" /> {RESTAURANT.rating.value}/5 · {RESTAURANT.rating.count.toLocaleString("fr-FR")} avis</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-4 py-20">
        <SectionTitle
          eyebrow="Bienvenue"
          title="Une institution lyonnaise rue des Marronniers"
          description="Pousser la porte de Chabert et Fils, c'est entrer dans un cabinet de curiosités vivant : nappes vichy rouges, lustre de l'ancien Opéra, fresque de Guignol, mur de photos dédicacées. Et dans l'assiette, la cuisine généreuse des mères lyonnaises, sans chichi mais avec passion."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <figure className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={lustre} alt="Lustre de l'ancien Opéra de Lyon dans la salle du bouchon" width={1280} height={1600} loading="lazy" className="w-full h-80 object-cover" />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-cream font-script text-xl">Le lustre de l'ancien Opéra</figcaption>
          </figure>
          <figure className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={fresque} alt="Fresque murale lyonnaise avec Guignol et scènes traditionnelles" width={1600} height={1200} loading="lazy" className="w-full h-80 object-cover" />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-cream font-script text-xl">La fresque de Guignol</figcaption>
          </figure>
        </div>
      </section>

      {/* SIGNATURES */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Nos plats signature"
            title="La tradition canaille dans l'assiette"
            description="Chaque plat est préparé maison, à partir de produits sélectionnés chez nos artisans lyonnais et fermiers de la région."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatures.map((d) => (
              <article key={d.name} className="bg-card rounded-lg overflow-hidden shadow border border-border/50">
                {d.image && (
                  <img src={d.image} alt={d.name} width={1024} height={1024} loading="lazy" className="w-full h-48 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="font-display text-xl text-foreground">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{d.description}</p>
                  <p className="mt-3 font-semibold text-primary">{d.price}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90">
              Découvrir toute la carte <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="container mx-auto px-4 py-20">
        <SectionTitle
          eyebrow="Ils en parlent"
          title="Plus de 1 800 clients ravis"
          description={`Une note moyenne de ${RESTAURANT.rating.value}/5 sur Google et TripAdvisor — la fidélité des Lyonnais et la curiosité des voyageurs.`}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topReviews.map((r) => (
            <blockquote key={r.author} className="bg-card p-6 rounded-lg border border-border/60 shadow-sm">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed italic">« {r.text} »</p>
              <footer className="mt-4 text-sm text-muted-foreground">— <span className="font-semibold text-foreground">{r.author}</span>, {r.origin}</footer>
            </blockquote>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/avis" className="text-primary hover:underline font-semibold">Lire tous les avis →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-wood text-cream py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="font-script text-3xl text-accent">À votre table</p>
          <h2 className="font-display text-4xl md:text-5xl mt-2">Réservez votre soirée bouchon</h2>
          <p className="mt-4 text-cream/80 text-lg">
            Service midi et soir, 7 jours sur 7. Pour les groupes ou un week-end, mieux vaut réserver à l'avance.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${RESTAURANT.phone}`} className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-md font-semibold hover:bg-primary/90">
              <Phone className="w-4 h-4" /> {RESTAURANT.phoneDisplay}
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-cream/40 px-6 py-3 rounded-md font-semibold hover:bg-cream/10">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
