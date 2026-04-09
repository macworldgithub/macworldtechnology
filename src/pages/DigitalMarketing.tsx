import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
import MarketingContact from "@/components/MarketingContact";

const DigitalMarketing = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white">
      <MarketingNavbar />
      <MarketingHero />
      <MarketingTestimonials />
      <LogoSlider />
      <MarketingService />
      <MarketingTrust />
      <MarketingProcess />
      <MarketingBenefits />
      <About type="marketing" />
      <MarketingFAQ />
      <MarketingContact />
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
