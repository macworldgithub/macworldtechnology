import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MarketingTestimonials from "@/components/MarketingTestimonials";
import MarketingHero from "@/components/MarketingHero";
import MarketingService from "@/components/MarketingService";
import MarketingProcess from "@/components/MarketingProcess";
import MarketingBenefits from "@/components/MarketingBenefits";
import MarketingFAQ from "@/components/MarketingFAQ";
import MarketingTrust from "@/components/MarketingTrust";
import MarketingNavbar from "@/components/MarketingNavbar";
import LogoSlider from "@/components/LogoSlider";
const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <MarketingNavbar />
      <MarketingHero />
      <MarketingTestimonials />
      <LogoSlider/>
      <MarketingService />
      <MarketingTrust />
      <MarketingProcess />
      <MarketingBenefits />
      <About type="marketing" />
      <MarketingFAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
