import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonialsData = [
  {
    title: "We Cut Support Costs Almost in Half",
    quote:
      "Our AI customer service agent now handles over 70% of queries instantly. We’ve reduced support costs significantly while improving response time.",
    name: "Daniel Brooks",
    role: "Customer Support Manager",
    location: "Texas, USA",
    initial: "D",
  },
  {
    title: "Response Time Dropped to Seconds",
    quote:
      "Before AI, our team struggled to keep up. Now customers get instant replies 24/7, and satisfaction has noticeably improved.",
    name: "Emily Carter",
    role: "E-commerce Owner",
    location: "California, USA",
    initial: "E",
  },
  {
    title: "More Leads Without Extra Effort",
    quote:
      "The AI agent doesn’t just support—it converts. We’re capturing and qualifying leads automatically, even outside business hours.",
    name: "Jason Miller",
    role: "Founder, SaaS Company",
    location: "New York, USA",
    initial: "J",
  },
  // Australian Clients
  {
    title: "Our Team Saves Hours Every Day",
    quote:
      "The AI agent handles repetitive queries, freeing up our team to focus on complex cases. It’s been a huge efficiency boost.",
    name: "Liam Anderson",
    role: "Operations Manager",
    location: "Melbourne, Australia",
    initial: "L",
  },
  {
    title: "Customer Experience Improved Instantly",
    quote:
      "We implemented AI support across our website, and the impact was immediate—faster replies and happier customers.",
    name: "Sophie Williams",
    role: "Head of Customer Experience",
    location: "Sydney, Australia",
    initial: "S",
  },
  {
    title: "From Missed Queries to 24/7 Support",
    quote:
      "We used to miss leads after hours. Now our AI agent engages every visitor and captures opportunities around the clock.",
    name: "Ethan Clarke",
    role: "Director, Digital Services Agency",
    location: "Brisbane, Australia",
    initial: "E",
  },
];

const CustomerServiceTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const isMd = window.innerWidth >= 768;

      const scrollAmount = isMd
        ? scrollRef.current.offsetWidth / 2
        : scrollRef.current.offsetWidth;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="CustomerServiceTestimonials" className="py-14">
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
          implementation. Real results from businesses using our custom-designed
          customer service AI agent to automate support, reduce costs, and
          deliver faster customer experiences.
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
                className="glass-card w-full md:w-[48%] flex-shrink-0 p-6 sm:p-8"
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

export default CustomerServiceTestimonials;
