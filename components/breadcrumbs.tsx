import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Inicio", href: "/" }, ...items];

  return (
    <>
      <nav className="breadcrumbs" aria-label="Migas de pan">
        <ol>
          {allItems.map((item, index) => (
            <li key={`${item.href}-${item.label}`}>
              {index < allItems.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${siteConfig.url}${item.href}`,
          })),
        }}
      />
    </>
  );
}
