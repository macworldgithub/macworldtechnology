import { motion } from "framer-motion";
import {
    MessageSquareMore,
    Sparkles,
    Workflow,
    Cpu,
    BarChart3,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const services = [
    {
        icon: MessageSquareMore,
        title: "AI Chatbot Development",
        description:
            "Transform your customer support and sales process with intelligent conversational AI.",
        features: [
            "Website & WhatsApp Chatbots",
            "Lead Qualification Bots",
            "AI Sales Assistants",
            "24/7 Automated Customer Support",
            "CRM Integration",
        ],
        result:
            "Reduce support costs by up to 40% and increase lead conversions.",
    },
    {
        icon: Sparkles,
        title: "Generative AI Solutions",
        description:
            "Empower your marketing and operations with cutting-edge generative AI tools.",
        features: [
            "AI Content Creation Systems",
            "Automated Email & Ad Copy Generation",
            "AI SEO Optimization Tools",
            "AI Image & Creative Generation",
        ],
        result: "Produce high-quality content faster and at scale.",
    },
    {
        icon: Workflow,
        title: "Business Process Automation",
        description:
            "Eliminate repetitive tasks and increase efficiency.",
        features: [
            "Workflow Automation",
            "AI Email & Task Automation",
            "Smart Document Processing",
            "Internal Operations AI Systems",
        ],
        result:
            "Save time, reduce human error, and improve productivity.",
    },
    {
        icon: Cpu,
        title: "Custom AI Development",
        description:
            "Tailor-made AI solutions built specifically for your business.",
        features: [
            "Machine Learning Models",
            "Predictive Analytics Systems",
            "AI SaaS Development",
            "CRM & ERP AI Integration",
            "AI Agent Development",
        ],
        result: "Competitive advantage through custom innovation.",
    },
    {
        icon: BarChart3,
        title: "AI for Marketing & Advertising",
        description:
            "Boost your marketing ROI with AI-driven insights.",
        features: [
            "AI Ad Creative Testing",
            "Audience Behavior Analysis",
            "Campaign Performance Optimization",
            "Predictive Customer Targeting",
        ],
        result:
            "Higher ROI, smarter budget allocation, better customer acquisition.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const OurAIServices = () => {
    return (
        <section id="ai-services" className="py-4">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <p className="section-label mb-4 flex items-center justify-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                        Our AI Services
                    </p>
                    {/* <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Intelligent Solutions to{" "}
            <span className="gradient-text">Scale Your Business</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From conversational AI to custom machine learning — we build the
            systems that power your next phase of growth.
          </p> */}
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="glass-card group relative overflow-hidden p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Subtle glow on hover */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Icon */}
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-secondary/50">
                                <service.icon className="h-6 w-6 text-primary" />
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-bold text-foreground">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="mb-5 space-y-2">
                                {service.features.map((feature, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-2 text-sm text-foreground/80"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Result */}
                            <div className="mt-auto rounded-lg border border-primary/20 bg-primary/5 px-4 py-3">
                                <p className="text-xs font-semibold text-primary">
                                    <span className="mr-1.5 font-mono text-[10px] tracking-wider uppercase text-primary/70">
                                        Result:
                                    </span>
                                    {service.result}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 flex justify-center"
                >
                    <GetQuoteModal>
                        <button
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                        >
                            Get a Quote
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </GetQuoteModal>
                </motion.div>
            </div>
        </section>
    );
};

export default OurAIServices;
