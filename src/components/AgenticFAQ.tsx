import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to AI systems that can go beyond answering prompts. They can understand goals, plan actions, make decisions, and complete multi-step tasks with less manual input.",
  },
  {
    question: "How is Agentic AI different from a normal chatbot?",
    answer:
      "A normal chatbot mainly responds to messages. An Agentic AI system can take action, connect tools, manage workflows, and help move business processes forward.",
  },
  {
    question: "Can you build custom AI agents for my business?",
    answer:
      "Yes. We create custom Agentic AI solutions based on your workflows, industry, tools, and business goals.",
  },
  {
    question: "Do you work with businesses in the USA and Australia?",
    answer:
      "Yes. This landing page is specifically designed to target companies in the USA and Australia looking for practical AI implementation.",
  },
  {
    question: "Can Agentic AI integrate with our existing tools?",
    answer:
      "Yes. Depending on your stack, we can design integrations with CRMs, support platforms, internal databases, forms, scheduling systems, and other operational tools.",
  },
  {
    question: "How long does it take to launch an Agentic AI solution?",
    answer:
      "Timelines depend on the complexity of the use case, integrations, and workflow depth. Simpler builds can move faster, while advanced multi-agent systems take more planning and testing.",
  },
  {
    question: "Is Agentic AI suitable for small and mid-sized businesses?",
    answer:
      "Yes. Many SMBs benefit from Agentic AI because it helps them scale operations without increasing manual workload at the same pace.",
  },
];

const AgenticFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="agentic-faqs" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            // FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            Everything you need to know about Agentic AI and how it can help
            your business scale.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur transition ${
                openIndex === i
                  ? "border-primary/40 shadow-lg shadow-primary/10"
                  : "hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold">{faq.question}</span>
                </div>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openIndex === i
                      ? "rotate-180 text-primary"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-white/10 px-5 pb-5 pt-4">
                      <p className="pl-9 text-sm leading-relaxed text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticFAQ;
