import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { MENU, MENUS_FORMULES } from "@/content/menu";
import { SITE_URL } from "@/content/restaurant";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: buildMeta({
      title: "La Carte — Chabert et Fils, Bouchon Lyonnais à Lyon 2",
      description: "Découvrez notre carte : quenelle de brochet sauce Nantua, tablier de sapeur, andouillette, cervelle de canut, tarte aux pralines. Cuisine lyonnaise traditionnelle.",
      path: "/menu",
    }),
    links: buildLinks("/menu"),
  }),
  component: MenuPage,
});

function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Carte de Chabert et Fils",
    url: `${SITE_URL}/menu`,
    hasMenuSection: MENU.map((s) => ({
      "@type": "MenuSection",
      name: s.title,
      description: s.description,
      hasMenuItem: s.items.map((i) => ({
        "@type": "MenuItem",
        name: i.name,
        description: i.description,
        offers: { "@type": "Offer", price: i.price.replace(/\D/g, ""), priceCurrency: "EUR" },
      })),
    })),
  };
}

function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Carte", path: "/menu" }])} />

      <section className="container mx-auto px-4 pt-16 pb-10">
        <SectionTitle
          eyebrow="La carte du bouchon"
          title="Notre carte lyonnaise"
          description="Une cuisine de marché, mijotée sur place chaque jour. Carte susceptible d'évoluer selon les arrivages et les saisons."
          as="h1"
        />
      </section>

      {/* FORMULES */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MENUS_FORMULES.map((f) => (
            <article key={f.name} className="bg-card border border-accent/30 rounded-lg p-6 text-center shadow-sm">
              <h2 className="font-display text-2xl text-foreground">{f.name}</h2>
              <p className="font-display text-4xl text-primary my-3">{f.price}</p>
              <p className="text-sm text-muted-foreground">{f.details}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SECTIONS */}
      {MENU.map((section) => (
        <section key={section.title} className="container mx-auto px-4 py-12 max-w-5xl">
          <header className="mb-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">{section.title}</h2>
            <div className="ornament max-w-xs mx-auto my-3"><span className="text-accent">✦</span></div>
            <p className="text-muted-foreground italic">{section.description}</p>
          </header>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {section.items.map((item) => (
              <article key={item.name} className="border-b border-dashed border-border pb-4">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-xl text-foreground flex-1">
                    {item.name}
                    {item.signature && <span className="ml-2 text-xs uppercase tracking-wider text-accent font-body font-semibold">★ Signature</span>}
                  </h3>
                  <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground italic">Tous nos plats sont faits maison à partir de produits frais, sourcés chez nos artisans lyonnais.</p>
      </section>
    </>
  );
}
