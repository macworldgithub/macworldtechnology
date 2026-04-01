import { motion } from "framer-motion";
import { Megaphone, Search, TrendingUp, ArrowRight } from "lucide-react";
import { MarketingQuoteModal } from "@/components/MarketingQuoteModal";

const services = [
  {
    icon: Megaphone,
    title: "Meta Advertising (Facebook & Instagram Ads)",
    description:
      "Reach your ideal audience and drive conversions with high-performing Meta campaigns. Advanced audience targeting & retargeting, conversion-focused creatives, funnel-based campaign strategy, and continuous A/B testing.",
  },
  {
    icon: TrendingUp,
    title: "Google Ads (Search, Display & YouTube)",
    description:
      "Capture high-intent users and convert them into customers. Includes Search & Performance Max campaigns, keyword & bidding strategy, conversion tracking & optimization, and landing page alignment.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Build long-term growth with higher rankings and organic traffic through on-page & technical SEO, keyword research & content strategy, authority building & backlinks, and ongoing performance tracking.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const MarketingService = () => {
  return (
    <section id="marketing-services" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            // Digital Marketing Services
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Advanced Marketing Solutions{" "}
            <span className="text-primary">Built to Scale Your Business</span>
          </h2>

          <p className="mx-auto max-w-5xl text-sm text-gray-400 md:text-base">
            We build performance marketing systems that turn traffic into leads
            and leads into revenue. Our smart data-driven strategies across
            Meta, Google Ads, and SEO are designed to generate real leads,
            increase conversions, and maximize ROI.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

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

export default MarketingService;
