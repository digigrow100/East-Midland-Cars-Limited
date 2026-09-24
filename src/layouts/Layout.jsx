import "../styles/global.css";

export function generateLayoutMetadata({ title, description }) {
  return {
    title: title ?? "East Midland Cars Limited",
    description: description ?? "Placeholder site description.",
    icons: {
      icon: "/favicon.svg",
    },
  };
}

export default function Layout({ children }) {
  return <div className="site-layout">{children}</div>;
}
