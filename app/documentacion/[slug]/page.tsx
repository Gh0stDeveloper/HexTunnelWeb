import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { documentationSections, getDocumentationSection } from "@/lib/documentation";

export const dynamicParams = false;

export function generateStaticParams() {
  return documentationSections.map((section) => ({ slug: section.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const section = getDocumentationSection(slug);

  if (!section) return {};

  return {
    title: section.title,
    description: section.summary,
    alternates: { canonical: `/documentacion/${section.slug}/` },
  };
}

export default async function DocumentationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const section = getDocumentationSection(slug);

  if (!section) notFound();

  return (
    <>
      <section className="page-hero section-pad">
        <div className="container narrow">
          <p className="eyebrow">{section.eyebrow}</p>
          <h1>{section.title}</h1>
          <p>{section.summary}</p>
        </div>
      </section>

      <div className="page-shell">
        <Breadcrumbs
          items={[
            { label: "Documentación", href: "/documentacion/" },
            { label: section.title, href: `/documentacion/${section.slug}/` },
          ]}
        />
        <div className="container doc-layout">
          <aside className="doc-sidebar">
            <strong>Guías públicas</strong>
            <nav aria-label="Secciones de documentación">
              {documentationSections.map((item) => (
                <Link
                  key={item.slug}
                  href={`/documentacion/${item.slug}/`}
                  aria-current={item.slug === section.slug ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="doc-content">
            <header>
              <p className="doc-kicker">Centro oficial Hex Tunnel</p>
              <h1>{section.title}</h1>
              <p>{section.summary}</p>
            </header>

            {section.blocks.map((block) => (
              <section className="doc-block" key={block.title}>
                <h2>{block.title}</h2>
                {block.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {block.items ? (
                  <ul>
                    {block.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
                {block.note ? <div className="callout">{block.note}</div> : null}
              </section>
            ))}

            <div className="trust-notice">
              <div>
                <strong>¿La guía no resuelve tu caso?</strong>
                <p>Envía únicamente información sanitizada a uno de los administradores oficiales.</p>
              </div>
              <Link className="text-link" href="/soporte/">Ir a soporte →</Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
