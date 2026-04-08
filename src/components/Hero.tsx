import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BACKEND_URL = "https://www.test.omnisuiteai.com/api";

const SERVICES_MAP: Record<string, string[]> = {
  "AI Chatbot Development": [
    "Website & WhatsApp Chatbots",
    "Lead Qualification Bots",
    "AI Sales Assistants",
    "24/7 Automated Customer Support",
    "CRM Integration",
  ],
  "Generative AI Solutions": [
    "AI Content Creation Systems",
    "Automated Email & Ad Copy Generation",
    "AI SEO Optimization Tools",
    "AI Image & Creative Generation",
  ],
  "Business Process Automation": [
    "Workflow Automation",
    "AI Email & Task Automation",
    "Smart Document Processing",
    "Internal Operations AI Systems",
  ],
  "Custom AI Development": [
    "Predictive Analytics Systems",
    "AI SaaS Development",
    "CRM & ERP AI Integration",
    "AI Agent Development",
  ],
  "AI for Marketing & Advertising": [
    "AI Ad Creative Testing",
    "Audience Behavior Analysis",
    "Campaign Performance Optimization",
    "Predictive Customer Targeting",
  ],
};

const MAIN_SERVICES = Object.keys(SERVICES_MAP);

const Hero = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    mainService: "",
    subService: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "mainService") {
        updated.subService = "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formattedService = `${formData.mainService} - ${formData.subService}`;

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formattedService,
        message: formData.message,
      };

      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/thank-you");
      } else {
        setStatus("error");
        setSubmitMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setSubmitMessage("Failed to connect to the server.");
    }
  };

  const availableSubServices = formData.mainService
    ? [...SERVICES_MAP[formData.mainService], "Custom AI Project"]
    : [];

  return (
    <section className="relative min-h-screen overflow-hidden pt-14">
      {/* Background grid effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
        {/* Left */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-label mb-6 flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            AI Automation Company for Businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            AI Automation Agency
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-xl sm:text-2xl md:text-3xl font-bold leading-snug"
          >
            <span className="gradient-text">
              AI Solutions That Automate, Optimize
              <br className="hidden sm:block" />& Scale Your Business
            </span>
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-3 py-3 px-4 glass-card border-primary/20 max-w-2xl"
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
            transition={{ delay: 0.3 }}
            className="mb-2 max-w-full sm:max-w-xl text-sm sm:text-base md:text-lg mt-4"
          >
            Omni Suite AI helps businesses leverage Artificial Intelligence to
            increase revenue, reduce operational costs, and unlock smarter
            decision-making.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            From AI chatbots to custom automation systems, we build intelligent
            solutions tailored to your business goals.
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
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-90">
              <img src="/img.svg" className="h-18 w-auto opacity-90" />
              <img src="/img2.svg" className="h-18 w-auto opacity-90" />
              <img src="/img3.svg" className="h-18 w-auto opacity-90" />
              <img src="/img4.svg" className="h-18 w-auto opacity-90" />
            </div>
          </motion.div>
        </div>
        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full lg:w-[480px] xl:w-[550px]"
        >
          <div className="glass-card glow-border p-6 sm:p-8 rounded-2xl w-full">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Request a <span className="gradient-text">Quote</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Main Service *
                  </label>
                  <select
                    name="mainService"
                    value={formData.mainService}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-secondary/100 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none appearance-none"
                  >
                    <option value="" disabled hidden>
                      Select a main service
                    </option>
                    {MAIN_SERVICES.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Sub Service *
                  </label>
                  <select
                    name="subService"
                    value={formData.subService}
                    onChange={handleChange}
                    required
                    disabled={!formData.mainService}
                    className="w-full rounded-lg border border-border bg-secondary/100 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled hidden>
                      Select a sub service
                    </option>
                    {availableSubServices.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
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
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
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

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Company (optional)
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Phone *
                  </label>
                  <PhoneInput
                    country={"au"}
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData((prev) => ({ ...prev, phone }))
                    }
                    inputClass="!w-full !h-[42px] !bg-secondary/50 !text-sm !text-foreground !border !border-border !rounded-lg"
                    buttonClass="!border-border"
                    dropdownClass="!bg-background !text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="rounded-lg bg-green-950/40 border border-green-800/50 p-4 text-sm text-green-300">
                  {submitMessage}
                </div>
              )}
              {status === "error" && (
                <div className="rounded-lg bg-red-950/40 border border-red-800/50 p-4 text-sm text-red-300">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
