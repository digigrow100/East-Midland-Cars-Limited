import "../styles/global.css";

const SITE_URL = "https://east-midland-cars-limited.vercel.app";

export function generateLayoutMetadata({ title, description }) {
  const resolvedTitle = title ?? "East Midland Cars Limited";
  const resolvedDescription = description ?? "Placeholder site description.";

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description: resolvedDescription,
    icons: {
      icon: "/favicon.svg",
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: SITE_URL,
      siteName: "East Midland Cars Limited",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: "East Midland Cars Limited - Quality Used Cars in Leicester",
        },
      ],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: ["/og-image.webp"],
    },
  };
}

export default function Layout({ children }) {
  return <div className="site-layout">{children}</div>;
}
