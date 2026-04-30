import Footer from "@/components/Footer";
import AgenticNavbar from "@/components/AgenticNavbar";
import CustomerServiceHero from "@/components/CustomerServiceHero";
import CustomerServiceTestimonials from "@/components/CustomerServiceTestimonials";

const AICustomerService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AgenticNavbar />
      <CustomerServiceHero />
      <CustomerServiceTestimonials />
      <Footer />
    </div>
  );
};

export default AICustomerService;
