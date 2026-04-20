import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import { SiteHeader } from "../components/site-header";

// Self-host Inter via next/font. Replaces the external Google Fonts <link>
// which was render-blocking by ~100ms on mobile 4G even with display=swap.
// next/font downloads the font at build time, serves it from our own origin,
// and emits a CSS variable we can use in globals.css.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
import { SiteFooter } from "../components/site-footer";
import { CustomCursor } from "../components/custom-cursor";
import { ScrollProgress } from "../components/scroll-progress";
import { BreadcrumbSchema } from "../components/breadcrumb-schema";

const GA_ID = "G-5Y4TM0KE9N";

export const metadata = {
  metadataBase: new URL("https://ycd.studio"),
  title: {
    default: "YCD Studio — Bay Area Architecture, Tenant Improvement & Design",
    template: "%s | YCD Studio",
  },
  description:
    "YCD Studio is a San Francisco Bay Area design firm specializing in restaurant tenant improvement, commercial design, hospitality spaces, permitting coordination, and residential remodels.",
  keywords: [
    "architecture firm San Francisco",
    "Bay Area architect",
    "tenant improvement design",
    "restaurant design Bay Area",
    "commercial interior design",
    "hospitality architecture",
    "residential remodel SF",
    "adaptive reuse architecture",
    "retail design California",
    "YCD Studio",
  ],
  authors: [{ name: "YCD Studio" }],
  creator: "YCD Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "YCD Studio",
    title: "YCD Studio — Bay Area Architecture & Design",
    description:
      "Architecture, interiors, and tenant improvement design rooted in the San Francisco Bay Area. Restaurant, commercial, hospitality, and residential projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "YCD Studio — Bay Area Architecture & Design",
    description:
      "Architecture, interiors, and tenant improvement design rooted in the San Francisco Bay Area.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  // IMPORTANT: do NOT set a global `alternates.canonical` here. The root
  // layout's metadata is inherited by every page, so a hardcoded canonical
  // would make every page claim it is a duplicate of the homepage.
  // Individual pages (blog posts, project pages) set their own canonical in
  // generateMetadata when they need one. Everywhere else, Google correctly
  // self-canonicalizes to the current URL.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    name: "YCD Studio",
    alternateName: "YCD Studios",
    url: "https://ycd.studio",
    telephone: "+1-415-300-0057",
    email: "info@ycd.studio",
    description:
      "San Francisco Bay Area design firm specializing in restaurant tenant improvement, commercial design, hospitality spaces, and residential remodels.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.7749,
        longitude: -122.4194,
      },
      geoRadius: "100",
    },
    sameAs: [
      "https://instagram.com/ycd.studios",
      "https://linkedin.com/company/ycd-studio",
    ],
    knowsAbout: [
      "Architecture",
      "Interior Design",
      "Tenant Improvement",
      "Restaurant Design",
      "Hospitality Design",
      "Residential Remodeling",
      "Commercial Design",
      "Adaptive Reuse",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <BreadcrumbSchema />
        <CustomCursor />
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
