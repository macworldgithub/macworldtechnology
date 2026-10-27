import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useRef } from "react";
import { GetQuoteModal } from "./GetQuoteModal";

const testimonials = [
  {
    title: "Tailored CMS Solution That Delivered Real Growth",
    quote:
      "MacWorld Technology tailored CMS solutions completely transformed our e-commerce platform. Managing content became effortless, enabling us to easily update product listings and maintain a dynamic online storefront. The results were remarkable — user engagement soared, and sales increased significantly.",
    name: "Oliver Harris",
    role: "CEO, E-Commerce Enterprise",
    location: "Australia",
    initial: "O",
  },
  {
    title: "Our Customer Support Costs Dropped by 40%",
    quote:
      "MacWorld Technology built a fully automated AI chatbot for our e-commerce store. Within weeks, we reduced support tickets, improved response time, and increased conversions. The ROI was clear almost immediately.",
    name: "Michael Reynolds",
    role: "Director of E-Commerce",
    location: "U.S. Retail Brand",
    initial: "M",
  },
  {
    title: "AI Automation Saved Our Team 20+ Hours Per Week",
    quote:
      "Their automation system streamlined our internal workflows and eliminated repetitive manual tasks. Our team can now focus on growth instead of operations. Highly strategic and professional execution.",
    name: "Jennifer Martinez",
    role: "Operations Manager",
    location: "SaaS Company",
    initial: "J",
  },
  {
    title: "Custom AI Development That Actually Delivers Results",
    quote:
      "We needed a predictive analytics system tailored to our business model. MacWorld Technology delivered a custom solution that improved forecasting accuracy and decision-making across departments.",
    name: "David Thompson",
    role: "VP of Strategy",
    location: "Financial Services Firm",
    initial: "D",
  },
  {
    title: "Our Marketing ROI Increased by 35%",
    quote:
      "Their AI-driven ad optimization and audience analysis helped us scale campaigns efficiently. We’re now spending smarter and converting better than ever before.",
    name: "Amanda Clark",
    role: "Founder",
    location: "Digital Marketing Agency",
    initial: "A",
  },
  {
    title: "Professional, Strategic, and ROI-Focused",
    quote:
      "From AI consulting to implementation, the process was seamless. They didn’t just build tools — they built a complete AI roadmap aligned with our growth goals.",
    name: "Christopher Adams",
    role: "CEO",
    location: "Technology Startup",
    initial: "C",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const isMd = window.innerWidth >= 768;

      const scrollAmount = isMd
        ? scrollRef.current.offsetWidth / 2 // 2 cards scroll
        : scrollRef.current.offsetWidth; // 1 card scroll

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-label mb-4">// Client Voices</p>

        <h2 className="mb-10 text-2xl font-bold sm:text-3xl md:text-4xl">
          What Our Clients <span className="gradient-text">Say About Us</span>
        </h2>

        <div className="relative">
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:-left-6 lg:-left-12 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/80 p-2 sm:p-3 backdrop-blur hover:bg-primary/10"
          >
            {"<"}
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:-right-6 lg:-right-12 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background/80 p-2 sm:p-3 backdrop-blur hover:bg-primary/10"
          >
            {">"}
          </button>

          {/* SLIDER */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4 sm:px-8"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="
                  glass-card 
                  w-full 
                  md:w-[48%] 
                  flex-shrink-0 
                  p-6 sm:p-8
                "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Quote className="mb-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/40" />

                <h3 className="mb-3 text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm text-muted-foreground">
                  “{item.quote}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {item.initial}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.role} — {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <GetQuoteModal>
            <button
              className="flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-primary/30"
              style={{ backgroundColor: "#08708F" }}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </GetQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
