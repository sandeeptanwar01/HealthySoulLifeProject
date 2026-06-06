import Header from "./components/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import MainServicesSection from "./components/MainServicesSection/MainServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import MissionSection from "./components/MissionSection/MissionSection";
import FunFactsSection from "./components/FunFactsSection/FunFactsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <BannerSlider />

      <MainServicesSection />

      <AboutSection />

      <MissionSection />

      <FunFactsSection />

      <ServicesSection/>

      <Footer />
    </>
  );
}