import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  { cat: "Technology", title: "The Future of AIOps in Enterprise Infrastructure", desc: "How predictive maintenance and AI-driven operations are reshaping the managed services landscape in 2026.", date: "Feb 2026" },
  { cat: "Security", title: "Zero-Trust Architecture: Beyond the Buzzword", desc: "A practical guide to implementing zero-trust security models that actually protect your organization.", date: "Jan 2026" },
  { cat: "Marketing", title: "First-Party Data Strategy for B2B Marketers", desc: "Building sustainable data ecosystems in a post-cookie world — strategies that respect privacy and drive results.", date: "Jan 2026" },
  { cat: "Development", title: "Discovery-Led Design: Why We Spend 30% Before Coding", desc: "The business case for investing in discovery phases and how it dramatically improves project outcomes.", date: "Dec 2025" },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Insights</p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          Industry{" "}
          <span className="gradient-text">Perspectives</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card group cursor-pointer p-6 transition-all hover:border-primary/30"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-medium text-primary">{p.cat}</span>
                <span className="text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
