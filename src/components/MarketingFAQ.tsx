import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which platform is best for my business?",
    answer:
      "It depends on your goals. We analyze your business and recommend the best mix of Meta, Google Ads, and SEO.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Paid ads can generate results quickly, while SEO typically takes a few months for long-term growth.",
  },
  {
    question: "Do you manage both ads and SEO?",
    answer:
      "Yes, we provide complete digital marketing services including Meta Ads, Google Ads, and SEO.",
  },
  {
    question: "Can you improve our existing campaigns?",
    answer:
      "Absolutely. We audit and optimize current campaigns to improve performance and ROI.",
  },
  {
    question: "How do you track performance?",
    answer:
      "We use advanced tracking tools and provide transparent reporting so you can see real results.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with a wide range of industries, including e-commerce, healthcare, real estate, technology, and more. Our strategies are customized to suit each industry’s unique needs.",
  },
  {
    question: "Do you offer local SEO services?",
    answer:
      "Yes, we specialize in local SEO to help businesses improve their visibility in local search results and attract nearby customers.",
  },
  {
    question: "What is the difference between Google Ads and Meta Ads?",
    answer:
      "Google Ads focus on capturing high-intent users through search and display ads, while Meta Ads target a broader audience on platforms like Facebook and Instagram to drive engagement and conversions.",
  },
  {
    question: "Can you help with ad creatives?",
    answer:
      "Yes, we create and test ad creatives that resonate with your target audience, ensuring they are designed to drive results.",
  },
  {
    question: "What if I don’t have a website yet?",
    answer:
      "No problem! We can help you build a high-converting website or landing page that aligns with your marketing goals and is optimized for lead generation.",
  },
];

const MarketingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="marketing-faqs" className="bg-black py-16 text-white">
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
            Everything you need to know about our digital marketing services and
            how we help your business grow.
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

export default MarketingFAQ;
