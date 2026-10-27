import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { MarketingQuoteModal } from "@/components/MarketingQuoteModal";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Services", id: "marketing-services" },
  { label: "Testimonials", id: "MarketingTestimonials" },
  { label: "FAQs", id: "marketing-faqs" },
];

const serviceDropdownItems = [
  { label: "Agentic AI", path: "/agentic-ai" },
  { label: "Digital Marketing", path: "/digital-marketing-services" },
  { label: "AI Customer Service", path: "/ai-customer-service-agent" },
];

const MarketingNavbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (
              pathname === "/lp/digital-marketing-service" ||
              pathname === "/digital-marketing-services"
            ) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center"
        >
          <img
            src="/macworld-logo-cropped.png"
            alt="MacWorld Technologies"
            className="h-20 w-64 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" &&
            pathname === "/digital-marketing-services" ? (
              <div
                key={link.label}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full mt-2 min-w-[220px] -translate-x-1/2 overflow-hidden rounded-xl border border-border/60 bg-background/95 shadow-xl backdrop-blur-xl"
                    >
                      {serviceDropdownItems.map((item, idx) => (
                        <button
                          key={item.path}
                          onClick={() => {
                            setServicesOpen(false);
                            navigate(item.path);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground ${
                            idx !== serviceDropdownItems.length - 1
                              ? "border-b border-border/30"
                              : ""
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(event) => {
                  if (scrollToSection(link.id)) {
                    event.preventDefault();
                  }
                }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ),
          )}
          <a
            href="/CaseStudies"
            className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            case studies
          </a>
        </div>

        {/* CTA */}
        <MarketingQuoteModal>
          <button className="hidden rounded-lg border border-primary/30 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10 lg:block">
            Free Consultation
          </button>
        </MarketingQuoteModal>

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
          {navLinks.map((link) =>
            link.label === "Services" &&
            pathname === "/digital-marketing-services" ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between py-2 text-sm text-muted-foreground"
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {serviceDropdownItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                            navigate(item.path);
                          }}
                          className="flex w-full items-center gap-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(event) => {
                  if (scrollToSection(link.id)) {
                    event.preventDefault();
                  }
                  setOpen(false);
                }}
                className="block py-2 text-sm text-muted-foreground"
              >
                {link.label}
              </a>
            ),
          )}

          <a
            href="/CaseStudies"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-muted-foreground"
          >
            Learn More About Testimonials
          </a>

          <MarketingQuoteModal>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20"
            >
              Free Consultation
            </button>
          </MarketingQuoteModal>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default MarketingNavbar;
