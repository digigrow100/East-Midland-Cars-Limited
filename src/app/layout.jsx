import { Manrope, Space_Grotesk } from "next/font/google";
import Layout, { generateLayoutMetadata } from "../layouts/Layout";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = generateLayoutMetadata({
  title: "East Midland Cars Limited | Quality Used Cars Leicester",
  description:
    "Leicester's premier destination for handpicked quality used cars, transparent HP/PCP finance, and comprehensive warranty cover.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/*
          Material Symbols Outlined is not currently offered as a next/font
          variable font, so it is loaded once via a standard stylesheet link
          (with preconnect) instead of the CDN script duplicated across the
          source mockups.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body-md text-on-surface">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
