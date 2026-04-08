import { motion } from "framer-motion";
import AgenticHero from "@/components/AgenticHero";
import AgenticTestimonials from "@/components/AgenticTestimonials";
import AgenticAIServices from "@/components/AgenticAIServices";
import AgenticFAQ from "@/components/AgenticFAQ";
import Contact from "@/components/Contact";
import About from "@/components/About";
import AgenticProcess from "@/components/AgenticProcess";
import AgenticBenefits from "@/components/AgenticBenefits";
import Footer from "@/components/Footer";
import AgenticNavbar from "@/components/AgenticNavbar";
import AgenticDemos from "@/components/AgenticDemo";
import AgenticTrust from "@/components/AgenticTrust";
import LogoSlider from "@/components/LogoSlider";
import AgenticContact from "@/components/Agenticcontact";
const AgenticAI = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AgenticNavbar />
      <AgenticHero />
      <AgenticTestimonials />
      <LogoSlider />
      <AgenticAIServices />
      <AgenticDemos />
      <AgenticTrust />
      <AgenticProcess />
      <AgenticBenefits />
      <About />
      <AgenticFAQ />
      <AgenticContact />
      <Footer />
    </div>
  );
};

export default AgenticAI;
