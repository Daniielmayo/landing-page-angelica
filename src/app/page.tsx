import Banner from "@/components/Banner/Banner";
import { Header } from "@/components/Header/Header";
import { Benefits } from "@/components/benefits/Benefits";
import { Gallery } from "@/components/Gallery/Gallery";
import Footer from "@/components/footer/Footer";
import { Services } from "@/components/services/Services";
import Guarantees from "@/components/Guarantees/Guarantees";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Gallery />
      <Services />
      <Guarantees />
      <Footer />
    </>
  );
}
