import { motion } from "framer-motion";
import {
  Zap,
  Briefcase,
  Smile,
  Brain,
  Settings,
  Layers,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Execution",
    desc: "Reduce delays in lead response, support handling, and workflow completion.",
  },
  {
    icon: Briefcase,
    title: "Lower Manual Workload",
    desc: "Let AI agents handle repetitive tasks, so your team can focus on strategic work.",
  },
  {
    icon: Smile,
    title: "Better Customer Experience",
    desc: "Deliver quicker, more consistent interactions across the customer journey.",
  },
  {
    icon: Brain,
    title: "Smarter Operations",
    desc: "Create systems that can make informed decisions and keep processes moving.",
  },
  {
    icon: Settings,
    title: "Custom-Fit Solutions",
    desc: "Everything is designed around your business goals, not a one-size-fits-all template.",
  },
  {
    icon: Layers,
    title: "Scalable AI Infrastructure",
    desc: "Build systems that can grow with your business across departments and regions.",
  },
];

const AgenticBenefits = () => {
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
          <p className="mx-auto max-w-3xl text-sm text-gray-400 md:text-base">
            Real outcomes that improve efficiency, reduce costs, and help your business scale with AI.
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
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition">
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

export default AgenticBenefits;