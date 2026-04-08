import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const navLinks = [
  "Agentic AI",
  "About",
  "Services",
  "Testimonials",
  "Case Studies",
  "Demos",
  "FAQs",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            OmniSuite<span className="text-primary">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={
                link === "Agentic AI"
                  ? "/lp/agentic-ai"
                  : `#${link.toLowerCase().replace(/\s/g, "-")}`
              }
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <GetQuoteModal>
          <button className="hidden rounded-lg border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10 lg:block">
            Free Consultation
          </button>
        </GetQuoteModal>

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
          className="border-t border-border/40 bg-background px-6 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={
                link === "Agentic AI"
                  ? "/lp/agentic-ai"
                  : `#${link.toLowerCase().replace(/\s/g, "-")}`
              }
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground"
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
