import Footer from "@/components/Footer";
import CustomerServiceHero from "@/components/CustomerServiceHero";
import CustomerServiceTestimonials from "@/components/CustomerServiceTestimonials";
import AgenticProcess from "@/components/AgenticProcess";
import AgenticBenefits from "@/components/AgenticBenefits";
import About from "@/components/About";
import LogoSlider from "@/components/LogoSlider";
import CustomerServiceFAQ from "@/components/CustomerServiceFAQ";
import ContactForm from "@/components/ContactForm";
import CustomNavbar from "@/components/CustomNavbar";
import AICustomerHero from "@/components/AICustomerHero";
import CustomerServicePage from "@/components/CustomerServicePage";
import CustomerDemo from "@/components/CustomerDemo";
import CustomerTrust from "@/components/CustomerTrust";
import CustomerProcess from "@/components/CustomerProcess";
import CustomerAbout from "@/components/CustomerAbout";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomNavbar />
      <AICustomerHero />
      <CustomerServiceTestimonials />
      <LogoSlider />
      <CustomerServicePage />
      <CustomerDemo defaultCategory="Customer Service" />
      <CustomerTrust />
      <CustomerProcess />
      <AgenticBenefits />
      <CustomerAbout type="agentic" />
      <CustomerServiceFAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CustomerService;
