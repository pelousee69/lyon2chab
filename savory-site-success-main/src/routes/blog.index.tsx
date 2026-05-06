import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { POSTS } from "@/content/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: "Journal du Bouchon — Articles, recettes & traditions lyonnaises",
      description: "Le journal de Chabert et Fils : histoire du bouchon lyonnais, origine de la quenelle, secrets du tablier de sapeur et plats incontournables à Lyon.",
      path: "/blog",
    }),
    links: buildLinks("/blog"),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Journal", path: "/blog" }])} />

      <section className="container mx-auto px-4 pt-16 pb-10">
        <SectionTitle
          eyebrow="Journal du bouchon"
          title="Articles, traditions & recettes lyonnaises"
          description="Pour tout comprendre de la cuisine canaille, de l'histoire des bouchons et des plats qui font la fierté de Lyon."
          as="h1"
        />
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {POSTS.map((p) => (
            <article key={p.slug} className="bg-card rounded-lg overflow-hidden border border-border/60 shadow-sm hover:shadow-md transition">
              {p.cover && (
                <Link to="/blog/$slug" params={{ slug: p.slug }}>
                  <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-56 object-cover" />
                </Link>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wide">
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
                  <span>·</span>
                  <span>{p.readingTime}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl text-foreground">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.title}</Link>
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-block text-primary font-semibold hover:underline">Lire l'article →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
