import { RESTAURANT, SITE_URL } from "@/content/restaurant";

export function buildMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ? (opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`) : undefined;
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:site_name", content: RESTAURANT.legalName },
    ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
    { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
}

export function buildLinks(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: RESTAURANT.legalName,
    url: SITE_URL,
    telephone: RESTAURANT.phone,
    email: RESTAURANT.email,
    priceRange: RESTAURANT.priceRange,
    servesCuisine: RESTAURANT.cuisine,
    image: `${SITE_URL}/og-cover.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.street,
      postalCode: RESTAURANT.postalCode,
      addressLocality: RESTAURANT.city,
      addressRegion: RESTAURANT.region,
      addressCountry: RESTAURANT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: RESTAURANT.geo.lat,
      longitude: RESTAURANT.geo.lng,
    },
    openingHoursSpecification: RESTAURANT.openingHoursSpec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.dayOfWeek,
      opens: s.opens,
      closes: s.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: RESTAURANT.rating.value,
      reviewCount: RESTAURANT.rating.count,
    },
    sameAs: [RESTAURANT.social.instagram, RESTAURANT.social.facebook],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
