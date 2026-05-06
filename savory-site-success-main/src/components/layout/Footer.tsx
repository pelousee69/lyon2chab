import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { RESTAURANT } from "@/content/restaurant";

export function Footer() {
  return (
    <footer className="mt-24 bg-wood text-cream">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-script text-accent text-xl">Bouchon Lyonnais</p>
          <p className="font-display text-2xl">Chabert &amp; Fils</p>
          <p className="mt-3 text-sm text-cream/70 leading-relaxed">
            Cuisine canaille et tradition lyonnaise au cœur du 2ème arrondissement, à deux pas
            de la place Bellecour.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent mb-3">Adresse</h3>
          <address className="not-italic text-sm text-cream/80 space-y-2">
            <p className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />{RESTAURANT.street}, {RESTAURANT.postalCode} {RESTAURANT.city}</p>
            <p className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href={`tel:${RESTAURANT.phone}`} className="hover:text-accent">{RESTAURANT.phoneDisplay}</a></p>
            <p className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><a href={`mailto:${RESTAURANT.email}`} className="hover:text-accent">{RESTAURANT.email}</a></p>
          </address>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent mb-3">Horaires</h3>
          <ul className="text-sm text-cream/80 space-y-2">
            {RESTAURANT.openingHours.map((h) => (
              <li key={h.days} className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /><span><span className="block">{h.days}</span><span className="block text-cream/60">{h.hours}</span></span></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-accent mb-3">Navigation</h3>
          <ul className="text-sm text-cream/80 space-y-1.5">
            <li><Link to="/menu" className="hover:text-accent">La carte</Link></li>
            <li><Link to="/a-propos" className="hover:text-accent">Notre histoire</Link></li>
            <li><Link to="/galerie" className="hover:text-accent">Galerie photos</Link></li>
            <li><Link to="/avis" className="hover:text-accent">Avis clients</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Journal du bouchon</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact &amp; réservation</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-5 text-xs text-cream/50 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Chabert &amp; Fils — Bouchon Lyonnais. Tous droits réservés.</p>
          <p>Lyon 2 · Bellecour · Rue des Marronniers</p>
        </div>
      </div>
    </footer>
  );
}
