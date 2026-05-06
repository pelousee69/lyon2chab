import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/JsonLd";
import { buildMeta, buildLinks, breadcrumbSchema } from "@/lib/seo";
import { POSTS } from "@/content/blog";
import { SITE_URL, RESTAURANT } from "@/content/restaurant";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article introuvable" }] };
    return {
      meta: buildMeta({
        title: `${post.title} — Journal du Bouchon`,
        description: post.description,
        path: `/blog/${post.slug}`,
        image: post.cover,
        type: "article",
      }),
      links: buildLinks(`/blog/${post.slug}`),
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Article introuvable</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">← Retour au journal</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
  component: BlogPostPage,
});

function articleSchema(post: ReturnType<typeof POSTS[number] extends infer T ? () => T : never> extends never ? typeof POSTS[number] : never): unknown { return post; }

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.cover ? `${SITE_URL}${post.cover}` : undefined,
    author: { "@type": "Organization", name: RESTAURANT.legalName },
    publisher: { "@type": "Organization", name: RESTAURANT.legalName },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={breadcrumbSchema([
        { name: "Accueil", path: "/" },
        { name: "Journal", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ])} />

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <header className="text-center mb-10">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span className="mx-2">·</span>{post.readingTime}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-foreground leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground italic">{post.description}</p>
        </header>

        {post.cover && (
          <img src={post.cover} alt={post.title} loading="lazy" className="w-full rounded-lg shadow mb-10 max-h-[480px] object-cover" />
        )}

        <div className="prose prose-lg max-w-none space-y-5 text-foreground/90 leading-relaxed">
          {post.body.map((p: string, i: number) => (<p key={i}>{p}</p>))}
        </div>

        <footer className="mt-14 pt-8 border-t border-border text-center">
          <Link to="/blog" className="text-primary hover:underline font-semibold">← Tous les articles</Link>
          <p className="mt-6 text-muted-foreground">Envie de découvrir nos plats sur place ?</p>
          <Link to="/contact" className="mt-3 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90">Réserver une table</Link>
        </footer>
      </article>
    </>
  );
}
