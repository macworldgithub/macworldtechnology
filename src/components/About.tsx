import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="section-label mb-4 flex justify-center items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            About Us
          </p>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Driving the Future of Business with{" "}
            <span className="gradient-text">Artificial Intelligence</span>
          </h2>

          <div className="mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p>
              OmniSuite AI was founded with one clear mission: to help businesses
              harness the power of AI in practical, measurable, and scalable ways.
              We specialize in building intelligent systems that automate
              workflows, improve customer experiences, and enhance data-driven
              decision-making.
            </p>

            <p>
              Our team combines expertise in AI development, machine learning,
              automation engineering, and digital strategy to deliver impactful,
              results-driven solutions. We believe AI should not be complicated;
              it should be accessible, profitable, and truly transformative for
              every business we serve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;