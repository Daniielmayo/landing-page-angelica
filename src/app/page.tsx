import Banner from "@/components/Banner/Banner";
import { Header } from "@/components/Header/Header";
import { Benefits } from "@/components/benefits/Benefits";
import { Gallery } from "@/components/Gallery/Gallery";
import { Services } from "@/components/Services/Services";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Benefits />
      <Gallery />
      <Services />
      <Footer />
    </>
  );
}
