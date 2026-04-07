import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonialsData = [
  {
    title: "AI-Driven Workflow That Saves Time",
    quote:
      "OmniSuite AI helped us move from manual follow-ups to an AI-driven workflow that saved our team hours every week. The impact on response time and lead handling was immediate.",
    name: "Operations Manager",
    role: "B2B Services Company",
    location: "USA",
    initial: "O",
  },
  {
    title: "More Than Just a Chatbot",
    quote:
      "We wanted more than a chatbot. We needed an intelligent system that could guide inquiries, organize tasks, and reduce back-and-forth for our staff. OmniSuite delivered exactly that.",
    name: "Director",
    role: "Healthcare Business",
    location: "Australia",
    initial: "D",
  },
  {
    title: "Agentic AI That Improves Efficiency",
    quote:
      "Their team understood both the technical side and the business side. The Agentic AI solution they built improved efficiency, reduced manual workload, and gave us a better customer experience.",
    name: "Founder",
    role: "Professional Services Firm",
    location: "USA",
    initial: "F",
  },
  {
    title: "Fully Tailored to Our Business",
    quote:
      "What stood out was how tailored everything felt. This was not a generic AI setup. It was built around our workflows, our goals, and our growth plans.",
    name: "General Manager",
    role: "Multi-location Business",
    location: "Australia",
    initial: "G",
  },
];

const AgenticTestimonials = () => {
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
    <section id="AgenticTestimonials" className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-label mb-4 flex items-center justify-left gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Client Voices
        </p>

        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          What Our Clients <span className="gradient-text">Say About Us</span>
        </h2>

        <p className="mb-10 max-w-2xl text-sm text-muted-foreground">
          Businesses choose OmniSuite AI because we focus on practical AI
          implementation, clear outcomes, and systems that actually support
          day-to-day operations.
        </p>

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
            {testimonialsData.map((item, index) => (
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
      </div>
    </section>
  );
};

export default AgenticTestimonials;
