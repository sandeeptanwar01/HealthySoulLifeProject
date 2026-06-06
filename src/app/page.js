import Header from "./components/Header/Header";
import BannerSlider from "./components/BannerSlider/BannerSlider";
import MainServicesSection from "./components/MainServicesSection/MainServicesSection";
import AboutSection from "./components/AboutSection/AboutSection";
import MissionSection from "./components/MissionSection/MissionSection";
import FunFactsSection from "./components/FunFactsSection/FunFactsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import NetworkPartners from "./components/NetworkPartners/NetworkPartners";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import FAQSection from "./components/FAQSection/FAQSection";
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

      <FeedbackSection/>

      <FAQSection/>

      <NetworkPartners/>


      <Footer />
    </>
  );
}