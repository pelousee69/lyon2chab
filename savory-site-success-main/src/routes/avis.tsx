import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { REVIEWS } from "@/content/reviews";
import { RESTAURANT, SITE_URL } from "@/content/restaurant";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: buildMeta({
      title: "Avis clients — Chabert et Fils, Bouchon Lyonnais",
      description: `Plus de ${RESTAURANT.rating.count} avis et ${RESTAURANT.rating.value}/5 de moyenne. Découvrez ce que nos clients lyonnais et voyageurs pensent de Chabert et Fils.`,
      path: "/avis",
    }),
    links: buildLinks("/avis"),
  }),
  component: AvisPage,
});

function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.legalName,
    "@id": `${SITE_URL}/#restaurant`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RESTAURANT.rating.value,
      reviewCount: RESTAURANT.rating.count,
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };
}

function AvisPage() {
  return (
    <>
      <JsonLd data={reviewSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Avis", path: "/avis" }])} />

      <section className="container mx-auto px-4 pt-16 pb-10">
        <SectionTitle
          eyebrow="Avis clients"
          title="Ce que disent nos clients"
          description="Retours d'habitués lyonnais, de visiteurs français et de voyageurs du monde entier."
          as="h1"
        />
        <div className="mt-8 flex flex-col items-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-7 h-7 ${i < Math.round(RESTAURANT.rating.value) ? "fill-accent text-accent" : "text-muted"}`} />
            ))}
          </div>
          <p className="mt-2 text-foreground"><span className="font-display text-3xl text-primary">{RESTAURANT.rating.value}</span> / 5 — {RESTAURANT.rating.count.toLocaleString("fr-FR")} avis</p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((r) => (
            <blockquote key={r.author + r.date} className="bg-card border border-border/60 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <time className="text-xs text-muted-foreground" dateTime={r.date}>
                  {new Date(r.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}
                </time>
              </div>
              <p className="text-foreground/90 italic leading-relaxed">« {r.text} »</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — <span className="font-semibold text-foreground">{r.author}</span>, {r.origin}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
