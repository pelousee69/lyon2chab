import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { POSTS } from "./src/content/blog"; // ajuste le chemin si nécessaire

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: [
        "/",
        "/menu",
        "/a-propos",
        "/galerie",
        "/avis",
        "/contact",
        "/blog/",
        // liste tous les slugs de blog
        ...POSTS.map(p => `/blog/${p.slug}`),
      ],
    },
  },
});
