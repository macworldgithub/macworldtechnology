import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  TrendingUp,
  Eye,
  BarChart3,
  FileText,
  Target,
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Lower Cost Per Lead & Higher ROI",
    desc: "Maximize every marketing dollar with data-driven strategies that reduce acquisition costs.",
  },
  {
    icon: Users,
    title: "Consistent Flow of Qualified Leads",
    desc: "Ensure a steady stream of high-quality leads through targeted Meta Ads, Google Ads, and SEO.",
  },
  {
    icon: TrendingUp,
    title: "Better Conversion Rates",
    desc: "Continuously optimize campaigns to increase conversions at every stage of the customer journey.",
  },
  {
    icon: Eye,
    title: "Increased Brand Visibility",
    desc: "Boost your brand’s reach across multiple platforms to build awareness and trust with your audience.",
  },
  {
    icon: BarChart3,
    title: "Scalable Growth Across Channels",
    desc: "Efficiently scale marketing efforts as your business grows, ensuring sustained growth across Meta, Google, and SEO.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting & Insights",
    desc: "Access detailed reports that provide clear, actionable insights to guide your marketing strategy.",
  },
  {
    icon: Target,
    title: "Customized Strategies Aligned with Your Goals",
    desc: "Tailored marketing plans that focus on your unique business objectives, ensuring optimal results.",
  },
];

const MarketingBenefits = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="section-label mb-3">
            // Benefits
          </p>
          <h2>
            What You Gain with{" "}
            <span className="text-primary">OmniSuite AI</span>
          </h2>
          <p className="mx-auto max-w-4xl text-sm text-gray-400 md:text-base">
            At OmniSuite AI, we focus on delivering results that directly impact
            your business. Our tailored marketing strategies are designed to
            drive sustainable growth, increase conversions, and ensure
            measurable ROI.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative mb-10 pl-10"
            >
              {/* Dot */}
              <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full bg-primary shadow-md shadow-primary/50" />

              {/* Card */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-3 flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingBenefits;
