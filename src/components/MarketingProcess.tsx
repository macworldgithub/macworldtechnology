import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Rocket, SlidersHorizontal, ArrowRight } from "lucide-react";
import { MarketingQuoteModal } from "@/components/MarketingQuoteModal";

const steps = [
  {
    num: "01",
    title: "Strategy & Research",
    icon: Search,
    desc: "We begin by analyzing your business, target audience, and competitors to create a custom marketing strategy. This ensures we focus on what truly drives results for your business.",
  },
  {
    num: "02",
    title: "Campaign Launch",
    icon: Rocket,
    desc: "We execute high-converting campaigns across Meta Ads, Google Ads, and SEO channels. Our team creates targeted, engaging ads and ensures your website is optimized for traffic and conversions.",
  },
  {
    num: "03",
    title: "Optimization & Scaling",
    icon: SlidersHorizontal,
    desc: "We continually monitor performance, conduct A/B testing, and optimize campaigns to maximize ROI. As we scale, we ensure sustained growth and consistent, high-quality leads.",
  },
];

const MarketingProcess = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="marketing-process" className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            // Process
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How We Grow Your{" "}
            <span className="text-primary">Digital Presence</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            At OmniSuite AI, we combine data, strategy, and creativity to build
            high-performing campaigns that drive real business growth. Our
            process is simple yet effective, ensuring continuous improvement and
            scalable results.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl border p-4 text-left transition ${
                active === i
                  ? "border-primary bg-primary/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <span className="mb-1 block text-xs text-primary">
                Step {s.num}
              </span>
              <span className="text-sm font-medium">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5"
          >
            <div className="mb-5 flex items-center gap-3">
              <step.icon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>

            <p className="max-w-2xl text-gray-400 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <MarketingQuoteModal>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-primary/30">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </MarketingQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingProcess;
