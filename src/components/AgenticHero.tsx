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
    message: "Interested in Agentic AI solutions.",
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
                className="section-label"
              >
                // Future of Business
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
                  Deploy Agentic AI That Thinks, Acts, and Scales Your Business
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
                <div className="flex flex-wrap items-center gap-10 opacity-80 transition duration-500">
                  <img
                    src="/img.svg"
                    alt="Company 1"
                    className="h-10 w-auto md:h-14"
                  />
                  <img
                    src="/img2.svg"
                    alt="Company 2"
                    className="h-10 w-auto md:h-14"
                  />
                  <img
                    src="/img3.svg"
                    alt="Company 3"
                    className="h-10 w-auto md:h-14"
                  />
                  <img
                    src="/img4.svg"
                    alt="Company 4"
                    className="h-10 w-auto md:h-14"
                  />
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
                  Start Your AI Journey
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer ${!formData.service ? "text-white/40" : "text-white"
                        }`}
                    >
                      <option value="" disabled hidden className="bg-[#0f172a]">
                        Select a Service
                      </option>
                      <option value="AI Sales Agents" className="bg-[#0f172a]">
                        AI Sales Agents
                      </option>
                      <option
                        value="AI Customer Support Agents"
                        className="bg-[#0f172a]"
                      >
                        AI Customer Support Agents
                      </option>
                      <option
                        value="Workflow Automation Agents"
                        className="bg-[#0f172a]"
                      >
                        Workflow Automation Agents
                      </option>
                      <option
                        value="Internal Operations Agents"
                        className="bg-[#0f172a]"
                      >
                        Internal Operations Agents
                      </option>
                      <option
                        value="Multi-Agent AI Systems"
                        className="bg-[#0f172a]"
                      >
                        Multi-Agent AI Systems
                      </option>
                      <option
                        value="Custom Agentic AI Development"
                        className="bg-[#0f172a]"
                      >
                        Custom Agentic AI Development
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20 text-sm"
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
                        inputClass="!w-full !h-auto !py-3 !bg-white/5 !border-white/10 !rounded-lg !text-sm !text-foreground focus:!border-primary focus:!ring-1 focus:!ring-primary/20 !transition-all placeholder:!text-white/20"
                        buttonClass="!bg-transparent !border-white/10 !rounded-l-lg hover:!bg-white/10"
                        dropdownClass="!bg-[#0f172a] !text-foreground !border-white/10"
                        containerClass="!w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                      Company
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-white/20 text-sm"
                    />
                  </div>

                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={`p-3 rounded-lg text-sm flex items-center gap-3 ${status === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : "bg-red-500/10 border border-red-500/30 text-red-400"
                        }`}
                    >
                      {status === "success" && (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                      {statusMessage}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading" || !formData.service}
                    className="w-full bg-primary text-primary-foreground font-bold rounded-lg py-4 flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Inquiry
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
      <div className="relative py-2 bg-primary overflow-hidden">
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
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10" />
      </div>
    </>
  );
};

export default AgenticHero;
