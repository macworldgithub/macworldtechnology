import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurAIServices from "@/components/OurAIServices";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Demos from "@/components/Demos";
import Standards from "@/components/Standards";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OurAIServices />
      <Services />
      <CaseStudies />
      <Demos />
      <Standards />
      <Trust />
      <Testimonials />
      {/* <Insights /> */}
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
