import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlaceholderPage({ title }) {
  return (
    <>
      <Header />
      <main className="w-full pt-[80px] bg-surface min-h-[calc(100vh-80px)]">
        <section className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-2xl flex flex-col items-center text-center gap-space-md min-h-[50vh] justify-center">
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">{title}</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Content for this page is coming soon. In the meantime, call us on{" "}
            <a className="text-secondary font-semibold" href="tel:01162898888">
              0116 289 8888
            </a>{" "}
            and our Leicester team will help directly.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-on-secondary-container transition-all shadow-sm"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
