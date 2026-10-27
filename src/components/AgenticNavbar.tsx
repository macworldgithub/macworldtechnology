import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AgenticQuoteModal } from "@/components/AgenticQuoteModal";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "agentic-ai-services" },
  { label: "Testimonials", id: "AgenticTestimonials" },
  { label: "Demos", id: "demos" },
  { label: "FAQs", id: "agentic-faqs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const filteredLinks =
    pathname === "/agentic-ai"
      ? navLinks.filter((link) => link.label !== "Demos")
      : navLinks;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/macworld_logo.png"
            alt="MacWorld Technologies"
            className="h-14 w-40 object-cover object-center"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {filteredLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <AgenticQuoteModal>
          <button className="hidden rounded-lg border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10 lg:block">
            Free Consultation
          </button>
        </AgenticQuoteModal>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border/40 bg-background px-6 py-4 lg:hidden"
        >
          {filteredLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
          <AgenticQuoteModal>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
            >
              Free Consultation
            </button>
          </AgenticQuoteModal>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
