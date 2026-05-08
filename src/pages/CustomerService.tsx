import Footer from "@/components/Footer";
import CustomerServiceHero from "@/components/CustomerServiceHero";
import CustomerServiceTestimonials from "@/components/CustomerServiceTestimonials";
import AgenticDemos from "@/components/AgenticDemo";
import AgenticTrust from "@/components/AgenticTrust";
import AgenticProcess from "@/components/AgenticProcess";
import AgenticBenefits from "@/components/AgenticBenefits";
import About from "@/components/About";
import LogoSlider from "@/components/LogoSlider";
import CustomerAIService from "@/components/CustomerAIService";
import CustomerServiceFAQ from "@/components/CustomerServiceFAQ";
import ContactForm from "@/components/ContactForm";
import CustomNavbar from "@/components/CustomNavbar";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomNavbar />
      <CustomerServiceHero />
      <CustomerServiceTestimonials />
      <LogoSlider />
      <CustomerAIService />
      <AgenticDemos defaultCategory="Customer Service" />
      <AgenticTrust />
      <AgenticProcess />
      <AgenticBenefits />
      <About type="agentic" />
      <CustomerServiceFAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CustomerService;
