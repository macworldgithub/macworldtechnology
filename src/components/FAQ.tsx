import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What services does Omni Suite AI offer?",
        answer:
            "We provide AI chatbots, automation systems, custom AI development, AI consulting, and marketing optimization solutions.",
    },
    {
        question: "How long does AI implementation take?",
        answer:
            "Most projects take 2–6 weeks, depending on complexity and integrations.",
    },
    {
        question: "Can AI integrate with our existing tools?",
        answer:
            "Yes. We integrate AI with your CRM, website, ERP, marketing tools, and internal systems.",
    },
    {
        question: "Is AI suitable for small businesses?",
        answer:
            "Absolutely. Our scalable solutions help SMBs reduce costs, save time, and increase revenue.",
    },
    {
        question: "Do you offer custom AI solutions?",
        answer:
            "Yes. Every solution is tailored to your business goals and operational needs.",
    },
    {
        question: "How secure are your AI systems?",
        answer:
            "We follow strict security practices, including encrypted data handling and secure API integrations.",
    },
    {
        question: "Do you provide ongoing support?",
        answer:
            "Yes. We offer continuous monitoring, optimization, and long-term support.",
    },
    {
        question: "How do we get started?",
        answer:
            "Book a free AI strategy call, and we'll assess your business and provide a custom roadmap.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-4">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="section-label mb-4">// FAQ</p>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Frequently Asked{" "}
                        <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="max-w-2xl text-muted-foreground">
                        Everything you need to know about our AI solutions and how we can
                        help your business grow.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid gap-4 lg:grid-cols-2"
                >
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === i
                                    ? "border-primary/40 shadow-lg shadow-primary/5"
                                    : "hover:border-border"
                                }`}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm font-semibold text-foreground">
                                        {faq.question}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180 text-primary" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="border-t border-border/40 px-5 pb-5 pt-4">
                                            <p className="pl-9 text-sm leading-relaxed text-muted-foreground">
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

export default FAQ;
