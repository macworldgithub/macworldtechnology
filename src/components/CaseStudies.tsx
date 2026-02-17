import { motion } from "framer-motion";

const cases = [
  { name: "Just Euro Cars", type: "Website", stat: "94%", desc: "User-friendly navigation with a strong focus on the best possible user experience." },
  { name: "Westside Panel Repairs", type: "Website", stat: "87%", desc: "Complete digital transformation with streamlined booking and service management." },
  { name: "Express Car Rentals", type: "Website", stat: "120%", desc: "Modern rental platform with seamless online booking and fleet management." },
  { name: "UTE Rentals", type: "E-commerce", stat: "156%", desc: "Full e-commerce solution driving significant revenue growth through optimized UX." },
  { name: "Westside Car Care", type: "Website", stat: "73%", desc: "Clean service showcase with integrated appointment scheduling system." },
  { name: "Chromeindex", type: "Website", stat: "91%", desc: "High-performance web application with advanced search and indexing capabilities." },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Our Work</p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Success Stories That{" "}
          <span className="gradient-text">Speak for Themselves</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group cursor-pointer p-6 transition-all hover:border-primary/40"
            >
              <span className="text-xs font-medium text-primary">{c.type}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="stat-number gradient-cyan-text">{c.stat}</span>
                <span className="text-xs text-muted-foreground">improvement</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
