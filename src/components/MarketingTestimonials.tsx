import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonialsData = [
  {
    title: "Our Sales Doubled in 60 Days",
    quote:
      "OmniSuite AI completely transformed our Meta ad strategy. The creatives, targeting, and funnel setup helped us scale fast. We saw a huge increase in conversions within weeks.",
    name: "Sarah Mitchell",
    role: "E-commerce Manager",
    location: "Los Angeles, USA",
    initial: "S",
  },
  {
    title: "High-Quality Leads at Lower Cost",
    quote:
      "We were struggling with expensive leads before. Their Meta campaigns brought our cost per lead down significantly while improving lead quality.",
    name: "Jason Carter",
    role: "Founder, Fitness Brand",
    location: "Miami, USA",
    initial: "J",
  },
  {
    title: "We Started Getting Leads Instantly",
    quote:
      "Their Google Ads strategy delivered results almost immediately. High-intent traffic, better conversions, and a clear ROI from day one.",
    name: "David Reynolds",
    role: "CEO, Home Services Company",
    location: "Dallas, USA",
    initial: "D",
  },
  {
    title: "Best ROI We’ve Seen from PPC",
    quote:
      "We’ve worked with multiple agencies, but OmniSuite AI gave us the best results. Lower CPC, higher conversions, and consistent performance.",
    name: "Amanda Brooks",
    role: "Marketing Director, SaaS Company",
    location: "New York, USA",
    initial: "A",
  },
  {
    title: "Our Traffic Grew Month After Month",
    quote:
      "Their SEO strategy helped us rank higher on Google and bring in consistent organic traffic. It’s now our biggest source of leads.",
    name: "Kevin Walker",
    role: "Owner, Legal Services Firm",
    location: "Chicago, USA",
    initial: "K",
  },
  {
    title: "From Invisible to Page One",
    quote:
      "We weren’t ranking at all before. Within months, we started appearing on the first page for our main keywords. The growth has been incredible.",
    name: "Rachel Adams",
    role: "Co-Founder, E-commerce Brand",
    location: "Austin, USA",
    initial: "R",
  },
];

const MarketingTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
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
    <section id="MarketingTestimonials" className="py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="section-label mb-4">// Client Voices</p>

        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          What Our Clients <span className="gradient-text">Say About Us</span>
        </h2>

        <p className="mb-10 max-w-2xl text-sm text-muted-foreground">
          Real results from businesses that trusted OmniSuite AI to scale their
          marketing, improve conversions, and drive measurable growth.
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

export default MarketingTestimonials;
