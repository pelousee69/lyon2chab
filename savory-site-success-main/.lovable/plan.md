# Site Chabert et Fils — Bouchon Lyonnais

Objectif : un site vitrine ultra optimisé SEO pour battre chabertetfils.fr sur les requêtes "bouchon lyonnais Bellecour", "restaurant traditionnel Lyon 2", etc.

## Pages (routes séparées pour le SEO)

Chaque page = un fichier de route TanStack avec son propre `<title>`, meta description, Open Graph et JSON-LD dédiés.

- `/` — Accueil : hero immersif (lustre Opéra, fresque Guignol), pitch bouchon authentique, plats signature, avis vedettes, CTA réservation/contact
- `/menu` — Carte complète : entrées, plats, desserts, menus du jour, prix, allergènes (structured data Menu schema)
- `/a-propos` — Histoire du bouchon, décor brocante, lustre de l'ancien Opéra, mur des célébrités (Johnny, Belmondo, Dujardin)
- `/galerie` — Photos salle, plats, décor (lazy-loading, alt text optimisés)
- `/avis` — Témoignages clients + agrégation note (Review schema)
- `/blog` — Liste articles SEO
- `/blog/$slug` — Articles type "Qu'est-ce qu'un vrai bouchon lyonnais ?", "Origine de la quenelle", "Top plats lyonnais à goûter" — pour ranker sur des requêtes longue traîne
- `/contact` — Adresse rue des Marronniers, téléphone, horaires, formulaire, carte Google Maps embed

## Direction artistique

Inspiration brocante chaleureuse, pas pastiche kitsch.

- Palette (oklch dans `src/styles.css`) : fond crème vieilli `#f5efe4`, bois sombre `#2b1d12`, rouge bouchon `#9b2a2a`, or patiné `#b8893b`, blanc nappe `#faf7f0`
- Typo : titres en serif d'apparence "plaque émaillée" (DM Serif Display ou Playfair), corps en sans-serif lisible (Inter / Work Sans), accents manuscrits ponctuels (Caveat) pour l'esprit ardoise
- Textures discrètes (grain papier, ombres chaudes), cadres dorés sur les photos clés, séparateurs ornementaux fins
- Composants ré-usables : Hero, SectionTitle (avec ornement), DishCard, ReviewCard, GalleryGrid, BlogCard

## Stratégie SEO (le cœur de la demande)

1. **Métadonnées par page** : `head()` distinct sur chaque route avec title <60c, description <160c, og:title, og:description, og:image, twitter card. Jamais de meta dupliquées.
2. **Données structurées JSON-LD** :
   - `Restaurant` sur la home (nom, adresse, géo, horaires, gamme prix, cuisine "French", servesCuisine "Lyonnaise")
   - `Menu` + `MenuItem` sur /menu
   - `BreadcrumbList` sur les pages internes
   - `Article` sur les billets de blog
   - `AggregateRating` + `Review` sur /avis
   - `LocalBusiness` avec coordonnées GPS exactes Bellecour
3. **HTML sémantique** : un seul `<h1>` par page, hiérarchie h2/h3 propre, `<article>`, `<section>`, `<nav>`, `<address>`
4. **Images** : `loading="lazy"`, `width`/`height` explicites, `alt` riches en mots-clés naturels, format moderne
5. **Performance** : SSR TanStack Start (déjà en place), pas de JS inutile, polices préchargées
6. **Sitemap dynamique** via route serveur `/sitemap.xml` + `/robots.txt`
7. **Mots-clés cibles** : "bouchon lyonnais", "restaurant Lyon 2", "Bellecour restaurant", "rue des Marronniers", "quenelle Lyon", "tablier de sapeur", "andouillette Lyon"
8. **Contenu** : textes longs et naturels sur l'histoire, le terroir, les plats — Google adore les pages denses et utiles
9. **Maillage interne** : liens entre blog → menu → contact
10. **Lang fr**, canonical tags, balises hreflang non nécessaires (français uniquement)

## Architecture technique

```
src/routes/
  __root.tsx        (header/footer partagés, lang="fr", meta defaults)
  index.tsx
  menu.tsx
  a-propos.tsx
  galerie.tsx
  avis.tsx
  contact.tsx
  blog.index.tsx
  blog.$slug.tsx
  sitemap[.]xml.tsx
  robots[.]txt.tsx
src/components/
  layout/Header.tsx, Footer.tsx
  ui-restaurant/Hero, DishCard, ReviewCard, GalleryGrid, BlogCard, JsonLd
src/content/
  menu.ts, reviews.ts, blog/*.md (ou objets TS)
```

Données du restaurant (adresse exacte, horaires, téléphone, plats, prix) : je m'appuie sur les infos publiques de chabertetfils.fr et des pages Google/TripAdvisor pour avoir un contenu réaliste — tu pourras tout corriger ensuite.

## Hors périmètre (pour rester focus)

- Pas de Lovable Cloud / base de données : contenu statique en TS (plus rapide, meilleur SEO, suffit pour une vitrine)
- Pas de système de réservation en ligne : un CTA téléphone + email comme demandé ("vitrine + contact")
- Pas d'admin/CMS : modifs via le code
- Images : placeholders sur fond crème + 2-3 visuels générés (hero, ambiance) — tu pourras remplacer par les vraies photos

## Livraison

Site complet en une passe, ~10-12 fichiers de routes + composants + contenu + JSON-LD + sitemap. Prêt à publier et indexer.