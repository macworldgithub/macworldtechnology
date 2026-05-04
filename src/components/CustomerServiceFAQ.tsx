import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an AI Customer Service Agent?",
    answer:
      "An AI Customer Service Agent is an intelligent virtual assistant that handles customer queries, provides instant responses, and supports users 24/7 without human intervention.",
  },
  {
    question: "How does the AI agent improve customer support?",
    answer:
      "It reduces response time, handles multiple conversations at once, and ensures customers get instant, accurate answers—improving satisfaction and retention.",
  },
  {
    question: "Can the AI agent work 24/7?",
    answer:
      "Yes, it operates around the clock, ensuring your customers receive support anytime, even outside business hours and holidays.",
  },
  {
    question: "Will it replace human support agents?",
    answer:
      "No, it supports your team by handling repetitive queries while escalating complex issues to human agents when needed.",
  },
  {
    question: "Can the AI be trained on my business data?",
    answer:
      "Yes, it can be trained on your FAQs, website content, documents, and past conversations to deliver highly relevant answers.",
  },
  {
    question: "Is it easy to integrate with my website or CRM?",
    answer:
      "Absolutely. It can be easily integrated with websites, Shopify, WordPress, CRMs, and popular support tools.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Setup typically takes a few hours to a few days depending on the complexity of your business requirements.",
  },
  {
    question: "Is customer data secure?",
    answer:
      "Yes, all interactions are processed securely with encryption and privacy-focused protocols to protect customer data.",
  },
  {
    question: "Can it handle multiple languages?",
    answer:
      "Yes, the AI agent can support multiple languages, making it ideal for global businesses.",
  },
  {
    question: "What industries can use this AI agent?",
    answer:
      "It works across e-commerce, healthcare, real estate, SaaS, finance, travel, and almost any customer-facing industry.",
  },
];

const CustomerServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="customer-service-faqs" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-3 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            FAQs
          </p>

          <h2>
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            Everything you need to know about our AI Customer Service Agent and
            how it helps automate support, reduce costs, and improve customer
            experience.
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

export default CustomerServiceFAQ;
