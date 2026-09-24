import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <h1>Welcome</h1>
        <p>Placeholder welcome content.</p>
      </main>
      <Footer />
    </Layout>
  );
}
