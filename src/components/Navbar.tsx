import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const serviceDropdownItems = [
  { label: "Agentic AI", path: "/agentic-ai" },
  { label: "Digital Marketing", path: "/digital-marketing-services" },
  { label: "AI Customer Service", path: "/ai-customer-service-agent" },
];

const navLinks = ["About", "Services", "Testimonials", "FAQs"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  // Close desktop dropdown when clicking outside
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
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const getLinkHref = (link: string) => {
    if (link === "Services") return "#ai-services";
    return `#${link.toLowerCase().replace(/\s/g, "-")}`;
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
        <a href="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            OmniSuite<span className="text-primary">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link === "Services" ? (
              <div
                key={link}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setServicesOpen((prev) => !prev)}
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
                      className="absolute left-1/2 top-full mt-2 -translate-x-1/2 min-w-[220px] overflow-hidden rounded-xl border border-border/60 bg-background/95 shadow-xl backdrop-blur-xl"
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
                key={link}
                href={getLinkHref(link)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ),
          )}
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
          {navLinks.map((link) =>
            link === "Services" ? (
              <div key={link}>
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
                key={link}
                href={getLinkHref(link)}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground"
              >
                {link}
              </a>
            ),
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
