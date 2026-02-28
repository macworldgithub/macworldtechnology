import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const stats = [
  { value: "140+", label: "Clients Worldwide" },
  { value: "68%", label: "Client Retention" },
  { value: "2", label: "Global Offices" },
  { value: "6+", label: "Years of Excellence" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-14">
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-32">
        {/* Left */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label mb-6 flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            AI-Powered Digital Transformation
          </motion.p>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-7xl"
          >
            Proactive{" "}
            <br className="hidden md:block" />
            Resilience.{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">Measurable</span>{" "}
            <br className="hidden md:block" />
            Growth.
          </motion.h1> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-6xl"
          >
            AI Solutions That{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">Automate, Optimize</span>{" "}
            <br className="hidden md:block" />
            & Scale Your Business
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground font-bold md:text-2xl"
          >
            Omni Suite AI helps businesses leverage Artificial Intelligence to increase revenue, reduce
            operational costs, and unlock smarter decision-making.

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            From AI chatbots to custom automation systems, we build intelligent solutions tailored to your business goals.


          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <GetQuoteModal>
              <button
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </button>
            </GetQuoteModal>
            {/* <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              Get Free Consultation

              <Eye className="h-4 w-4" />
            </a> */}
          </motion.div>
        </div>

        {/* Right — Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 lg:w-[340px]"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card glow-border flex flex-col items-center justify-center p-6 text-center"
            >
              <span className="stat-number gradient-cyan-text">{s.value}</span>
              <span className="stat-label mt-1">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom-right Logos */}
        <div className="pointer-events-none absolute bottom-16 right-2 hidden items-center gap-4 lg:flex">
          <img
            src="/img.svg"
            alt="Partner logo 1"
            className="h-18 w-auto opacity-80"
          />
          <img
            src="/img2.svg"
            alt="Partner logo 2"
            className="h-18 w-auto opacity-80"
          />
          <img
            src="/img3.svg"
            alt="Partner logo 3"
            className="h-18 w-auto opacity-80"
          />
          <img
            src="/img4.svg"
            alt="Partner logo 4"
            className="h-18 w-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
