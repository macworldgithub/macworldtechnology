import { motion } from "framer-motion";
import {
  Bot,
  Headphones,
  Workflow,
  Building2,
  Network,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { AgenticQuoteModal } from "@/components/AgenticQuoteModal";

const services = [
  {
    icon: Bot,
    title: "AI Sales Agents",
    description:
      "Automate lead qualification, follow-ups, appointment booking, and CRM updates with AI agents that help your sales pipeline move faster. These agents can engage prospects, capture intent, and support your team without slowing down the customer journey.",
  },
  {
    icon: Headphones,
    title: "AI Customer Support Agents",
    description:
      "Provide faster support with AI agents that handle common inquiries, route complex cases, access internal knowledge, and maintain better customer experiences across web, chat, and messaging channels.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Agents",
    description:
      "Eliminate repetitive admin work with agents that can process requests, move data between tools, trigger approvals, update systems, and manage structured workflows across departments.",
  },
  {
    icon: Building2,
    title: "Internal Operations Agents",
    description:
      "Give your team AI support for reporting, task coordination, document handling, internal requests, and process management. These agents help reduce delays and free up staff for higher-value work.",
  },
  {
    icon: Network,
    title: "Multi-Agent AI Systems",
    description:
      "For more advanced use cases, we build multi-agent environments where specialized AI agents work together to complete complex tasks, coordinate decisions, and handle end-to-end business processes.",
  },
  {
    icon: Cpu,
    title: "Custom Agentic AI Development",
    description:
      "Every business is different. We design custom Agentic AI systems around your goals, industry, workflows, tools, and compliance needs so the solution fits your business instead of forcing your team to adapt to generic software.",
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
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const AgenticAIServices = () => {
  return (
    <section id="agentic-ai-services" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">
            // Our Agentic AI Services
          </p>

          <h2>
            Intelligent Agents That{" "}
            <span className="text-primary">Act, Decide & Execute</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            We create Agentic AI solutions that do more than answer questions.
            Our systems understand context, make decisions, trigger actions, and
            complete multi-step workflows across your business.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <AgenticQuoteModal>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-primary/30">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </AgenticQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticAIServices;
