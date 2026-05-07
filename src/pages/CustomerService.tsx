import Footer from "@/components/Footer";
import CustomerServiceHero from "@/components/CustomerServiceHero";
import CustomerServiceTestimonials from "@/components/CustomerServiceTestimonials";
import AICustomerNavbar from "@/components/AICustomerNavbar";
import AgenticDemos from "@/components/AgenticDemo";
import AgenticTrust from "@/components/AgenticTrust";
import AgenticProcess from "@/components/AgenticProcess";
import AgenticBenefits from "@/components/AgenticBenefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import LogoSlider from "@/components/LogoSlider";
import CustomerAIService from "@/components/CustomerAIService";
import CustomerServiceFAQ from "@/components/CustomerServiceFAQ";

const CustomerService = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <AICustomerNavbar />
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
            <Contact />
            <Footer />
        </div>
    );
};

export default CustomerService;
