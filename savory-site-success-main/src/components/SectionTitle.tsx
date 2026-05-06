export function SectionTitle({
  eyebrow,
  title,
  description,
  as: As = "h2",
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "center" | "left";
}) {
  return (
    <header className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <p className="font-script text-2xl text-accent mb-2">{eyebrow}</p>
      )}
      <As className="text-4xl md:text-5xl font-display text-foreground leading-tight">
        {title}
      </As>
      <div className={`mt-4 ornament ${align === "center" ? "max-w-xs mx-auto" : "max-w-xs"}`}>
        <span className="font-display text-accent">✦</span>
      </div>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </header>
  );
}
