import FooterSection from "./components/footer";
import Hero from "./components/header";
import GridSection from "./components/mid";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GridSection />
      <FooterSection />
    </>
  );
}
