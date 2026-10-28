import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "@/lib/scrollToSection";

interface ExploreLink {
  label: string;
  href: string;
  id?: string;
}

const Footer = () => {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  const exploreLinks: ExploreLink[] = useMemo(() => {
    if (pathname === "/agentic-ai" || pathname === "/lp/agentic-ai") {
      return [
        { label: "About", href: "#about", id: "about" },
        { label: "Services", href: "#agentic-ai-services", id: "agentic-ai-services" },
        { label: "Testimonials", href: "#AgenticTestimonials", id: "AgenticTestimonials" },
        { label: "Case Studies", href: "/CaseStudies" },
        { label: "FAQs", href: "#agentic-faqs", id: "agentic-faqs" },
      ];
    }
    if (pathname === "/ai-customer-service-agent" || pathname === "/lp/ai-customer-service-agent") {
      return [
        { label: "About", href: "#about", id: "about" },
        { label: "Services", href: "#CustomerAIServices", id: "CustomerAIServices" },
        { label: "Testimonials", href: "#CustomerServiceTestimonials", id: "CustomerServiceTestimonials" },
        { label: "Case Studies", href: "/CaseStudies" },
        { label: "FAQs", href: "#customer-service-faqs", id: "customer-service-faqs" },
      ];
    }
    if (pathname === "/digital-marketing-services" || pathname === "/lp/digital-marketing-services") {
      return [
        { label: "About", href: "#about", id: "about" },
        { label: "Services", href: "#marketing-services", id: "marketing-services" },
        { label: "Testimonials", href: "#MarketingTestimonials", id: "MarketingTestimonials" },
        { label: "Case Studies", href: "/CaseStudies" },
        { label: "FAQs", href: "#marketing-faqs", id: "marketing-faqs" },
      ];
    }
    // Default / Home page
    return [
      { label: "About", href: "#about", id: "about" },
      { label: "Testimonials", href: "#testimonials", id: "testimonials" },
      { label: "FAQs", href: "#faq", id: "faq" },
      { label: "Case Studies", href: "/CaseStudies" },
    ];
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: ExploreLink) => {
    if (link.id) {
      if (scrollToSection(link.id)) {
        e.preventDefault();
      }
    }
  };

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.09] bg-[#07090d] text-[#f3f6fb] font-['Inter',sans-serif]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr_0.7fr] lg:gap-12">
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <a href="/" className="-ml-1 sm:-ml-2 mb-4 inline-flex items-center" aria-label="MacWorld Technologies home">
            <img
              src="/macworld-logo-cropped.png"
              alt="MacWorld Technologies"
              className="h-16 w-auto max-w-[220px] object-contain object-left"
            />
          </a>
          <p className="m-0 text-xs leading-relaxed text-[#838e9c]">
            Technology, thoughtfully connected.
            <br />
            Built around what matters to you.
          </p>
        </div>

        {/* Explore Column */}
        <div className="flex flex-col items-start gap-2.5">
          <h2 className="mb-2 text-[10px] font-bold tracking-[0.15em] text-[#677281] uppercase">
            EXPLORE
          </h2>
          {exploreLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-xs text-[#a6b0be] transition-colors hover:text-[#39dce8]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Start Here Column */}
        <div className="flex flex-col items-start gap-2.5">
          <h2 className="mb-2 text-[10px] font-bold tracking-[0.15em] text-[#677281] uppercase">
            START HERE
          </h2>
          <p className="m-0 text-xs text-[#838e9c]">Have a question or an idea taking shape?</p>
          <a
            className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#d4faff] transition-colors hover:text-[#39dce8]"
            href="mailto:?subject=Macworld%20Technology%20enquiry"
          >
            Prepare an email <span aria-hidden="true" className="text-[#39dce8]">↗</span>
          </a>
        </div>

        {/* Social / On the Web Column */}
        <div className="flex flex-col items-start gap-2.5">
          <h2 className="mb-2 text-[10px] font-bold tracking-[0.15em] text-[#677281] uppercase">
            ON THE WEB
          </h2>
          <a
            href="https://www.linkedin.com/company/mac-world-technology/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#a6b0be] transition-colors hover:text-[#39dce8]"
          >
            LinkedIn <span aria-hidden="true" className="text-[#39dce8]">↗</span>
          </a>
          <a
            href="https://www.instagram.com/macworldtechnology?dlrf=MWtyMjR2djIxaXNvdw=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#a6b0be] transition-colors hover:text-[#39dce8]"
          >
            Instagram <span aria-hidden="true" className="text-[#39dce8]">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] px-6 py-4 text-xs text-[#6e7987]">
        <span>© {currentYear} Macworld Technology</span>
        <a href="#top" onClick={handleBackToTop} className="text-[#9ba6b5] transition-colors hover:text-[#39dce8]">
          Back to the top ↑
        </a>
        <span className="text-[#707d8d]">A little more clarity. A lot more possibility.</span>
      </div>
    </footer>
  );
};

export default Footer;
