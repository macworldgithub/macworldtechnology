import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Headphones,
  Workflow,
  Building2,
  Network,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  Shield,
  ShoppingBag,
  DollarSign,
  Home,
  Users,
  Settings,
} from "lucide-react";
import { AgenticQuoteModal } from "@/components/AgenticQuoteModal";

const services = [
  {
    id: "aicustomerserviceagent",
    icon: Headphones,
    title: "AI Customer Service Agent",
    features: [
      "Handles FAQs & customer queries",
      "Automates ticketing & resolutions",
      "Provides real-time support",
      "Available 24/7",
    ],
    result: "24/7 Support for a Seamless Customer Experience",
  },
  {
    id: "aichatbotagent",
    icon: MessageSquare,
    title: "AI Chatbot Agent",
    features: [
      "Real-time chat on websites & WhatsApp",
      "Captures and qualifies leads",
      "Provides instant responses",
      "Guides users through your services",
    ],
    result: "Engage Visitors & Capture Leads Instantly",
  },
  {
    id: "aicallcenterautomation",
    icon: Phone,
    title: "AI Call Center Automation",
    features: [
      "Handles customer inquiries",
      "Resolves issues & escalates cases",
      "Frees up agents for complex queries",
      "Increases operational efficiency",
    ],
    result: "Enhance Efficiency & Cut Costs",
  },
  {
    id: "aivoiceagent",
    icon: Phone,
    title: "AI Voice Agent",
    features: [
      "Manages inbound & outbound calls",
      "Handles appointment reminders",
      "Engages in sales calls",
      "Human-like interactions",
    ],
    result: "Automate Calls & Improve Engagement",
  },
  {
    id: "aisalesagent",
    icon: Bot,
    title: "AI Sales Agent",
    features: [
      "Qualifies leads instantly",
      "Automates follow-ups & outreach",
      "Books meetings on autopilot",
      "Seamless CRM integration",
    ],
    result: "Automate Lead Qualification & Boost Conversions",
  },
  {
    id: "aiecommerceagent",
    icon: ShoppingBag,
    title: "AI E-commerce Agent",
    features: [
      "Personalized product recommendations",
      "Cart recovery & customer support",
      "Intelligent shopping experience",
      "Boosts customer loyalty & sales",
    ],
    result: "Increase Sales with AI-Powered Shopping Assistance",
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

const CustomerAIService = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      const scrollWithOffset = () => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 120; // Navbar height + buffer
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!scrollWithOffset()) {
        // If not found, check periodically (handles late renders/animations)
        const interval = setInterval(() => {
          if (scrollWithOffset()) {
            clearInterval(interval);
          }
        }, 100);

        // Stop checking after 3 seconds
        const timeout = setTimeout(() => clearInterval(interval), 3000);

        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      }
    }
  }, [hash]);

  return (
    <section
      id="CustomerAIServices"
      className="relative z-10 bg-black py-16 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-left"
        >
          <p className="section-label mb-3 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Our Agentic AI
          </p>

          <h2>
            Intelligent Agents That{" "}
            <span className="text-primary">Act, Decide & Execute</span>
          </h2>

          <p className="max-w-2xl text-sm text-gray-400 md:text-base text-left">
            We create Custom AI Agents that do more than answer questions. Our
            systems understand context, make decisions, trigger actions, and
            complete multi-step workflows across your business.
          </p>
        </motion.div>

        {/* Grid */}
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
              id={service.id}
              variants={cardVariants}
              className="glass-card group relative z-20 overflow-hidden p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 scroll-mt-40"
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
                  {service.result}
                </p>
              </div>
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
            <button
              className="flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-primary/30"
              style={{ backgroundColor: "#08708F" }}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </AgenticQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerAIService;
