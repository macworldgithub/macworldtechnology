import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { ModalForm } from "@/components/ModalForm";

const AGENTIC_LINKS = [
    { label: "About", id: "about" },
    { label: "Services", id: "agentic-ai-services" },
    { label: "Testimonials", id: "AgenticTestimonials" },
    { label: "FAQs", id: "agentic-faqs" },
];

const CUSTOMER_SERVICE_LINKS = [
    { label: "About", id: "about" },
    { label: "Services", id: "CustomerAIServices" },
    { label: "Testimonials", id: "CustomerServiceTestimonials" },
    { label: "FAQs", id: "customer-service-faqs" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const navLinks = useMemo(() => {
        if (pathname === "/agentic-ai") return AGENTIC_LINKS;
        if (pathname === "/ai-customer-service-agent") return CUSTOMER_SERVICE_LINKS;
        return [];
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <a href="/" className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold tracking-tight text-foreground">
                        OmniSuite<span className="text-primary">AI</span>
                    </span>
                </a>

                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={`#${link.id}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <ModalForm>
                    <button className="hidden rounded-lg border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10 lg:block">
                        Free Consultation
                    </button>
                </ModalForm>

                <button
                    onClick={() => setOpen(!open)}
                    className="text-foreground lg:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border/40 bg-background px-6 py-4 lg:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={`#${link.id}`}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-sm text-muted-foreground"
                        >
                            {link.label}
                        </a>
                    ))}

                    <ModalForm>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
                        >
                            Free Consultation
                        </button>
                    </ModalForm>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;