import { createFileRoute } from "@tanstack/react-router";
import { POSTS } from "@/content/blog";
import { SITE_URL } from "@/content/restaurant";

const STATIC = ["/", "/menu", "/a-propos", "/galerie", "/avis", "/blog", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          ...STATIC.map((p) => `<url><loc>${SITE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`),
          ...POSTS.map((p) => `<url><loc>${SITE_URL}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`),
        ].join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
