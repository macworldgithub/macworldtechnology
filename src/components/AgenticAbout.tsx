import { motion } from "framer-motion";
import { GetQuoteModal } from "./GetQuoteModal";
import { AgenticQuoteModal } from "./AgenticQuoteModal";
import { MarketingQuoteModal } from "./MarketingQuoteModal";
import { ArrowRight } from "lucide-react";
import { ModalForm } from "./ModalForm";

interface AboutProps {
  type?: "agentic" | "marketing";
}

const AgenticAbout = ({ type }: AboutProps) => {
  const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
    if (type === "agentic") {
      return <ModalForm>{children}</ModalForm>;
    }
    if (type === "marketing") {
      return <MarketingQuoteModal>{children}</MarketingQuoteModal>;
    }
    return <GetQuoteModal>{children}</GetQuoteModal>;
  };

  return (
    <section id="about" className="relative overflow-hidden py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              About Us
            </p>

            <h2>
              Driving the Future of Business with{" "}
              <span className="gradient-text">Artificial Intelligence</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                OmniSuite AI was founded with one clear mission: to help
                businesses harness the power of AI in practical, measurable, and
                scalable ways. We specialize in building intelligent systems
                that automate workflows, improve customer experiences, and
                enhance data-driven decision-making.
              </p>

              <p>
                Our team combines expertise in AI development, machine learning,
                automation engineering, and digital strategy to deliver
                impactful, results-driven solutions. We believe AI should not be
                complicated; it should be accessible, profitable, and truly
                transformative for every business we serve.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/future-artificial-intelligence-robot.jpg.jpeg"
              alt="AI Robot"
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <ModalWrapper>
            <button
              className="flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-primary/30"
              style={{ backgroundColor: "#08708F" }}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </ModalWrapper>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAbout;
