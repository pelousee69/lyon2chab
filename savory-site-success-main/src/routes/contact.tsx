import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { RESTAURANT } from "@/content/restaurant";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Contact & Réservation — Chabert et Fils, Lyon 2",
      description: "Réservez votre table au bouchon Chabert et Fils, 11 rue des Marronniers à Lyon 2 (Bellecour). Téléphone, email, horaires et plan d'accès.",
      path: "/contact",
    }),
    links: buildLinks("/contact"),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <section className="container mx-auto px-4 pt-16 pb-10">
        <SectionTitle
          eyebrow="Réservation"
          title="Réservez votre table"
          description="Pour réserver, le téléphone reste le plus rapide. Vous pouvez aussi nous écrire — nous répondons sous 24h."
          as="h1"
        />
      </section>

      <section className="container mx-auto px-4 pb-20 grid lg:grid-cols-2 gap-10 max-w-6xl">
        <div className="bg-card rounded-lg border border-border/60 p-8 shadow-sm">
          <h2 className="font-display text-2xl text-foreground">Nous joindre</h2>
          <ul className="mt-6 space-y-5 text-foreground/90">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 mt-1 text-primary shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <a href={`tel:${RESTAURANT.phone}`} className="text-lg font-semibold hover:text-primary">{RESTAURANT.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 mt-1 text-primary shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${RESTAURANT.email}`} className="text-lg font-semibold hover:text-primary">{RESTAURANT.email}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 mt-1 text-primary shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Adresse</p>
                <address className="not-italic text-lg font-semibold">{RESTAURANT.street}<br />{RESTAURANT.postalCode} {RESTAURANT.city}, France</address>
                <p className="text-sm text-muted-foreground mt-1">À 2 min à pied de la place Bellecour</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 mt-1 text-primary shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Horaires</p>
                {RESTAURANT.openingHours.map((h) => (
                  <p key={h.days} className="font-semibold">{h.days} <span className="font-normal text-muted-foreground">— {h.hours}</span></p>
                ))}
              </div>
            </li>
          </ul>

          <a href={`tel:${RESTAURANT.phone}`} className="mt-8 inline-flex w-full justify-center items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90">
            <Phone className="w-4 h-4" /> Appeler le restaurant
          </a>
        </div>

        <form className="bg-card rounded-lg border border-border/60 p-8 shadow-sm space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Merci ! Pour une réservation immédiate, appelez-nous au " + RESTAURANT.phoneDisplay); }}>
          <h2 className="font-display text-2xl text-foreground">Nous écrire</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-muted-foreground">Nom</span>
              <input required type="text" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Téléphone</span>
              <input required type="tel" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-muted-foreground">Email</span>
            <input required type="email" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-muted-foreground">Date souhaitée</span>
              <input type="date" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground" />
            </label>
            <label className="block">
              <span className="text-sm text-muted-foreground">Personnes</span>
              <input type="number" min={1} max={20} defaultValue={2} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground" />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-muted-foreground">Message</span>
            <textarea rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-foreground" />
          </label>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90">
            Envoyer ma demande
          </button>
          <p className="text-xs text-muted-foreground text-center">Pour une réservation immédiate, privilégiez le téléphone.</p>
        </form>
      </section>

      <section className="w-full">
        <iframe
          title="Plan d'accès Chabert et Fils, rue des Marronniers Lyon 2"
          src="https://www.google.com/maps?q=11+rue+des+Marronniers,+69002+Lyon&output=embed"
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        />
      </section>
    </>
  );
}
