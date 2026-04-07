import { teamDetails } from "../../../lib/team-data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const person = teamDetails[slug];
  if (!person) return {};

  return {
    title: `${person.name} — ${person.title}, ${person.credentials}`,
    description: person.bio.slice(0, 160),
    openGraph: {
      title: `${person.name} — ${person.title} at YCD Studio`,
      description: person.tagline,
      ...(person.image && { images: [{ url: person.image, alt: person.name }] }),
    },
  };
}

function PersonJsonLd({ person, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: `${person.title}, ${person.credentials}`,
    description: person.tagline,
    url: `https://ycd.studio/team/${slug}`,
    image: person.image ? `https://ycd.studio${person.image}` : undefined,
    worksFor: {
      "@type": "Organization",
      name: "YCD Studio",
      url: "https://ycd.studio",
    },
    workLocation: {
      "@type": "Place",
      address: person.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TeamMemberLayout({ children, params }) {
  const slug = params.slug;
  const person = teamDetails[slug];

  return (
    <>
      {person && <PersonJsonLd person={person} slug={slug} />}
      {children}
    </>
  );
}
