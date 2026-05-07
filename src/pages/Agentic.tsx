import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

const AgenticAI = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        localStorage.setItem("lastVisitedPage", pathname);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-black text-white">
            <AgenticNavbar />
            <AgenticHero />
            <AgenticTestimonials />
            <LogoSlider />
            <AgenticAIServices />
            <AgenticDemos excludeCategory="Customer Service" />
            <AgenticTrust />
            <AgenticProcess />
            <AgenticBenefits />
            <About type="agentic" />
            <AgenticFAQ />
            <Contact />
            <Footer />
        </div>
    );
};

export default AgenticAI;
