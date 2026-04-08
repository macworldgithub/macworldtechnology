import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const BACKEND_URL = "https://www.test.omnisuiteai.com";

const AgenticHero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "61",
    service: "",
    message: "",
  });

  const catchyLines = [
    "🤝 AI Agents That Support Your Team 24/7",
    "📉 Reduce Operational Costs with AI",
    "🎯 AI That Delivers Measurable ROI",
    "🏢 Built for Startups to Enterprises",
    "⚡ Deploy Agentic AI in Days, Not Months",
    "🤖 AI That Thinks, Decides & Acts",
    "📈 Automate Workflows & Scale Faster",
    "💰 Cut Costs, Boost Efficiency Instantly",
    "⏱️ Save 20+ Hours Every Week",
    "🚀 Built for Real Business Outcomes",
  ];

  const SERVICES = [
    "AI Sales Agent",
    "AI Customer Service Agent",
    "AI Voice Agent",
    "AI Chatbot Agent",
    "AI Workflow Automation Agent",
    "AI Call Center Automation",
    "AI Marketing Agent",
    "AI Real Estate Agent",
    "AI E-commerce Agent",
    "AI Finance & Insurance Agent",
    "AI Agent Architecture",
    "AI Security & Integration",
    "Internal Operations Agents",
    "Multi-Agent AI Systems",
    "Custom AI Agent",
  ];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length <= 4) {
      setStatus("error");
      setStatusMessage("Please enter a valid phone number.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        navigate("/thank-you");
        setStatusMessage(
          result.message || "Thank you! Our AI experts will contact you soon.",
        );
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "Interested in Agentic AI solutions.",
        });
      } else {
        setStatus("error");
        setStatusMessage(
          result.error || "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Failed to connect to the server. Please try again later.",
      );
    }
  };

  return (
    <>
      <section className="relative bg-black pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="lg:w-3/5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="section-label flex items-center gap-2"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                Agentic AI Development Company
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Automate Your Business <br />
                  <span className="gradient-text">with Agentic AI</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  We build AI employees for your business
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 px-6 glass-card w-fit border-primary/20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">140+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    Clients Worldwide
                  </span>
                </div>
                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">10+</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    Years of Experience
                  </span>
                </div>
                <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">4</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    Global Offices
                  </span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                We build advanced Agentic AI systems that can automate tasks,
                make decisions, coordinate workflows, and support your team
                across sales, operations, customer service, and internal
                processes.
              </motion.p>

              {/* Logos Area */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8 space-y-4"
              >
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/40">
                  Trusted By Industry Leaders
                </p>
                <div className="flex flex-wrap gap-10 opacity-90">
                  <img src="/img.svg" className="h-18 w-auto opacity-90" />
                  <img src="/img2.svg" className="h-18 w-auto opacity-90" />
                  <img src="/img3.svg" className="h-18 w-auto opacity-90" />
                  <img src="/img4.svg" className="h-18 w-auto opacity-90" />
                </div>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:w-2/5 w-full"
            >
              <div className="glass-card p-8 relative overflow-hidden group border-white/10 glow-border hover:border-primary/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  Get Your Custom AI Agent
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                      Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer ${
                        !formData.service
                          ? "text-muted-foreground"
                          : "text-white"
                      }`}
                    >
                      <option
                        value=""
                        disabled
                        hidden
                        className="bg-secondary text-foreground"
                      >
                        Select a Service
                      </option>
                      {SERVICES.map((srv) => (
                        <option
                          key={srv}
                          value={srv}
                          className="bg-secondary text-foreground"
                        >
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                        Company (optional)
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                        Phone *
                      </label>

                      <PhoneInput
                        country={"au"}
                        value={formData.phone}
                        onChange={(phone) =>
                          setFormData((prev) => ({ ...prev, phone }))
                        }
                        inputClass="!w-full !h-auto !py-2.5 !bg-secondary/50 !border-border !rounded-lg !text-sm !text-foreground focus:!border-primary focus:!outline-none !transition-all"
                        buttonClass="!bg-transparent !border-border !rounded-l-lg hover:!bg-white/5"
                        dropdownClass="!bg-background !text-foreground !border-border"
                        containerClass="!w-full"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="rounded-lg bg-green-950/40 border border-green-800/50 p-4 text-sm text-green-300">
                      {statusMessage ||
                        "Your request was submitted successfully!"}
                    </div>
                  )}
                  {status === "error" && (
                    <div className="rounded-lg bg-red-950/40 border border-red-800/50 p-4 text-sm text-red-300">
                      {statusMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#08708F" }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get A Quote
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ MARQUEE (Now with primary color for better suite) */}
      <div
        className="relative py-2 overflow-hidden"
        style={{ backgroundColor: "#08708F" }}
      >
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-10 items-center"
        >
          {[...catchyLines, ...catchyLines].map((line, i) => (
            <span
              key={i}
              className="text-primary-foreground/75 font-bold text-sm md:text-md flex items-center gap-2"
            >
              {line}
            </span>
          ))}
        </motion.div>
        {/* Edge Fades */}
        <div
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r to-transparent z-10"
          style={{
            background: "linear-gradient(to right, #08708F, transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l to-transparent z-10"
          style={{
            background: "linear-gradient(to left, #08708F, transparent)",
          }}
        />
      </div>
    </>
  );
};

export default AgenticHero;
