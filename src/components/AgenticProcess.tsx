import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Layout,
  Code2,
  SlidersHorizontal,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { AgenticQuoteModal } from "@/components/AgenticQuoteModal";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    icon: Search,
    desc: "We learn your business model, pain points, tools, and goals to identify the right Agentic AI opportunities.",
  },
  {
    num: "02",
    title: "Solution Design",
    icon: Layout,
    desc: "We map workflows, define AI agent roles, choose integrations, and structure how the system should think and act.",
  },
  {
    num: "03",
    title: "Development & Integration",
    icon: Code2,
    desc: "We build the solution, connect your systems, configure the logic, and create the workflows your team needs.",
  },
  {
    num: "04",
    title: "Testing & Optimization",
    icon: SlidersHorizontal,
    desc: "We refine performance, improve response quality, validate workflow outcomes, and make sure your AI system performs reliably.",
  },
  {
    num: "05",
    title: "Launch & Support",
    icon: Rocket,
    desc: "We deploy your Agentic AI solution and continue optimizing it as your business grows.",
  },
];

const AgenticProcess = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="agentic-process" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="section-label mb-3">
           // Process
          </p>
          <h2>
            How We Build Your{" "}
            <span className="text-primary">Agentic AI System</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            A structured approach to designing, building, and scaling intelligent AI systems for your business.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-5">
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
            className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10"
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
          <AgenticQuoteModal>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-primary/30">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </AgenticQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticProcess;