import { motion } from "framer-motion";

const standards = [
  {
    num: "I",
    label: "The MSP Standard",
    title: "Digital Trust",
    desc: "Proactive resilience through AIOps, zero-trust architecture, and compliance automation. We don't wait for systems to fail — we prevent failure before it begins.",
    tags: ["Predictive over Reactive", "Verify Every Access", "Automate Compliance"],
  },
  {
    num: "II",
    label: "The Consulting Standard",
    title: "Implementation",
    desc: "Actionable intelligence delivered through human-in-the-loop AI, results-linked compensation, and 90-day agile sprints that drive measurable outcomes.",
    tags: ["Human + AI Synergy", "Outcome-Based Fees", "90-Day Sprints"],
  },
  {
    num: "III",
    label: "The Marketing Standard",
    title: "Ethical Attribution",
    desc: "Privacy-first performance through first-party data mastery, contextual integrity, and cross-platform storytelling that respects both users and brands.",
    tags: ["First-Party Data", "Contextual Relevance", "Unified Narrative"],
  },
  {
    num: "IV",
    label: "The Development Standard",
    title: "User-Centric Growth",
    desc: "Conversion as a discipline through discovery-led design, performance-first tech stacks, and scalable modular infrastructure built for the long term.",
    tags: ["Discovery First", "Sub-2s Load Times", "Modular Architecture"],
  },
];

const Standards = () => {
  return (
    <section id="methodology" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Our Approach</p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          2026 Best Practice{" "}
          <span className="gradient-text">Standards</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {standards.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-mono text-sm font-bold text-primary">
                  {s.num}
                </span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-medium text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
