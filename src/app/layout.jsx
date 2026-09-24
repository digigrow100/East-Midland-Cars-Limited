import Layout, { generateLayoutMetadata } from "../layouts/Layout";

export const metadata = generateLayoutMetadata({
  title: "East Midland Cars Limited",
  description: "Placeholder site description.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
