// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Shield, Lightbulb, Megaphone, Code2, ArrowRight } from "lucide-react";
// import { GetQuoteModal } from "@/components/GetQuoteModal";

// const pillars = [
//   {
//     num: "01",
//     title: "Managed Service Providers",
//     standard: 'The "Digital Trust" Standard',
//     icon: Shield,
//     quote: "Proactive Resilience over Reactive Support",
//     desc: "We don't wait for systems to fail. Our AI-driven operations identify anomalies before they cause downtime, ensuring your infrastructure remains resilient around the clock.",
//     features: [
//       { title: "AIOps & Predictive Maintenance", desc: "AI-driven operations that identify hardware and security anomalies before they cause downtime." },
//       { title: "Zero-Trust Architecture", desc: "Every user and device verified at every step — moving beyond simple firewalls to comprehensive security." },
//       { title: "Compliance-as-a-Service", desc: "Automated documentation for SOC2, GDPR, and industry-specific audits as your regulatory shield." },
//     ],
//   },
//   {
//     num: "02",
//     title: "Strategy & Consulting",
//     standard: 'The "Implementation" Standard',
//     icon: Lightbulb,
//     quote: "Actionable Intelligence over Theoretical Frameworks",
//     desc: "Our consultants embed with your team, using human-in-the-loop AI to deliver strategies that drive measurable outcomes through 90-day agile sprints.",
//     features: [
//       { title: "Human-in-the-Loop AI", desc: "AI-augmented analysis with human oversight ensures strategic recommendations are practical." },
//       { title: "Results-Linked Compensation", desc: "We tie our fees to your outcomes — ensuring alignment and accountability." },
//       { title: "90-Day Agile Sprints", desc: "Rapid iteration cycles that deliver measurable progress every quarter." },
//     ],
//   },
//   {
//     num: "03",
//     title: "Advertising & Marketing",
//     standard: 'The "Ethical Attribution" Standard',
//     icon: Megaphone,
//     quote: "Privacy-First Performance over Surveillance Marketing",
//     desc: "First-party data mastery, contextual integrity, and cross-platform storytelling that respects both users and brands.",
//     features: [
//       { title: "First-Party Data Mastery", desc: "Build sustainable data ecosystems in a post-cookie world." },
//       { title: "Contextual Integrity", desc: "Ads that match content context rather than tracking users across the web." },
//       { title: "Cross-Platform Storytelling", desc: "Unified narrative across channels that drives authentic engagement." },
//     ],
//   },
//   {
//     num: "04",
//     title: "Web Development",
//     standard: 'The "User-Centric Growth" Standard',
//     icon: Code2,
//     quote: "Conversion as a Discipline over Code as a Commodity",
//     desc: "Discovery-led design, performance-first tech stacks, and scalable modular infrastructure built for the long term.",
//     features: [
//       { title: "Discovery-Led Design", desc: "30% of project time invested in research before a single line of code." },
//       { title: "Performance-First Stacks", desc: "Sub-2s load times with modern frameworks optimized for conversion." },
//       { title: "Modular Architecture", desc: "Scalable systems that grow with your business without costly rewrites." },
//     ],
//   },
// ];

// const Services = () => {
//   const [active, setActive] = useState(0);
//   const p = pillars[active];

//   return (
//     <section id="services" className="py-14">
//       <div className="mx-auto max-w-7xl px-6">
//         <p className="section-label mb-4">// What We Do</p>
//         <h2>
//           Four Pillars of{" "}
//           <span className="gradient-text">Digital Excellence</span>
//         </h2>

//         {/* Tabs */}
//         <div className="mb-10 grid grid-cols-2 gap-3 md:grid-cols-4">
//           {pillars.map((p, i) => (
//             <button
//               key={i}
//               onClick={() => setActive(i)}
//               className={`glass-card p-5 text-left transition-all ${active === i
//                 ? "border-primary/50 glow-border"
//                 : "hover:border-border"
//                 }`}
//             >
//               <span className="stat-number gradient-cyan-text block mb-1">{p.num}</span>
//               <span className="text-sm font-medium text-foreground">{p.title}</span>
//               <p className="mt-1 text-xs text-muted-foreground">{p.standard}</p>
//             </button>
//           ))}
//         </div>

//         {/* Content */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//             className="glass-card p-8 md:p-10"
//           >
//             <div className="mb-6 flex items-center gap-3">
//               <p.icon className="h-6 w-6 text-primary" />
//               <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
//             </div>
//             <p className="mb-2 text-sm italic text-primary">"{p.quote}"</p>
//             <p className="mb-8 max-w-2xl text-muted-foreground">{p.desc}</p>

//             <div className="grid gap-6 md:grid-cols-3">
//               {p.features.map((f, i) => (
//                 <div key={i} className="rounded-lg border border-border/40 bg-secondary/30 p-5">
//                   <h4 className="mb-2 text-sm font-semibold text-foreground">{f.title}</h4>
//                   <p className="text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="mt-12 flex justify-center"
//         >
//           <GetQuoteModal>
//             <button
//               className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
//             >
//               Get a Quote
//               <ArrowRight className="h-4 w-4" />
//             </button>
//           </GetQuoteModal>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GetQuoteModal } from "@/components/GetQuoteModal";
import {
  Search,
  Layout,
  Code2,
  SlidersHorizontal,
  Rocket,
  ArrowRight,
} from "lucide-react";

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

const Services = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="agentic-process" className="bg-[#080A0C] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-left">
          <p className="section-label mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            What We Do
          </p>
          <h2>
            How We Build Your{" "}
            <span className="text-primary">Agentic AI System</span>
          </h2>
          <p className=" max-w-2xl text-sm text-gray-400 md:text-base">
            A structured approach to designing, building, and scaling
            intelligent AI systems for your business.
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

export default Services;
