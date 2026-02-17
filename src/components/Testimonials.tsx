import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Client Voices</p>
        <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
          What Our Clients{" "}
          <span className="gradient-text">Say About Us</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mx-auto max-w-3xl p-8 md:p-10"
        >
          <Quote className="mb-4 h-8 w-8 text-primary/40" />
          <blockquote className="mb-6 text-lg leading-relaxed text-foreground/90">
            "OmniSuite AI's tailored CMS solutions completely transformed our e-commerce platform. Managing content became effortless, enabling us to easily update product listings and maintain a dynamic online storefront. The results were remarkable — user engagement soared, and sales increased significantly."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              O
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Oliver Harris</p>
              <p className="text-xs text-muted-foreground">CEO, E-Commerce Enterprise — Australia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
