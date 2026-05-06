import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { RESTAURANT } from "@/content/restaurant";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Carte" },
  { to: "/a-propos", label: "Histoire" },
  { to: "/galerie", label: "Galerie" },
  { to: "/avis", label: "Avis" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur border-b border-border/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-script text-accent text-lg -mb-1">Bouchon Lyonnais</span>
          <span className="font-display text-2xl text-foreground tracking-tight">
            Chabert <span className="text-primary">&</span> Fils
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${RESTAURANT.phone}`}
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition"
        >
          <Phone className="w-4 h-4" /> Réserver
        </a>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background" aria-label="Navigation mobile">
          <ul className="flex flex-col p-4 gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded text-foreground hover:bg-secondary"
                  activeProps={{ className: "text-primary font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={`tel:${RESTAURANT.phone}`}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-semibold"
              >
                <Phone className="w-4 h-4" /> {RESTAURANT.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
