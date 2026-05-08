import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDetectedCountry } from "@/hooks/useDetectedCountry";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "../lib/constants";

const BACKEND_URL = "https://www.test.omnisuiteai.com/api";

/* =========================================
   SERVICES
========================================= */

const AGENTIC_AI_SERVICES = [
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

const CUSTOMER_SERVICE_SERVICES = [
  "AI Customer Service Agent",
  "AI Chatbot Agent",
  "AI Call Center Automation",
  "AI Voice Agent",
  "AI Sales Agent",
  "AI E-commerce Agent",
  "Custom AI Agent",
];

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const detectedCountry = useDetectedCountry();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  /* =========================================
     DYNAMIC SERVICES
  ========================================= */

  const SERVICES = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return AGENTIC_AI_SERVICES;
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return CUSTOMER_SERVICE_SERVICES;
    }

    return [];
  }, [location.pathname]);

  /* =========================================
     DYNAMIC CONTENT
  ========================================= */

  const pageHeading = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return "Build Powerful Agentic AI Solutions";
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return "Transform Customer Support with AI";
    }

    return "Let's Build Something Exceptional";
  }, [location.pathname]);

  const pageDescription = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return "Deploy intelligent AI agents that automate workflows, customer engagement, operations, and business growth.";
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return "Enhance customer experience with AI-powered support, chatbot automation, and voice-enabled assistance.";
    }

    return "Ready to transform your digital presence? Schedule a free consultation with our team.";
  }, [location.pathname]);

  /* =========================================
     HANDLERS
  ========================================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length <= 4) {
      setStatus("error");
      setMessage("Please enter a valid phone number.");
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setMessage("Please complete the captcha.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setCaptchaToken(null);

        navigate("/thank-you");

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);

      setStatus("error");
      setMessage("Failed to connect to server.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="section-label mb-4 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Get in Touch
          </p>

          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {pageHeading.split("AI")[0]}

            <span className="gradient-text">
              {pageHeading.includes("AI") ? "AI" : ""}
            </span>

            {pageHeading.includes("AI") ? pageHeading.split("AI")[1] : ""}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {pageDescription}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <div className="space-y-5 lg:col-span-2">
            {/* Office */}
            <div className="glass-card rounded-3xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Office
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    10 Merna Drv, Templestowe VIC 3106, Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-3xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    +61 435 386 534
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-card rounded-3xl border border-white/10 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Email
                  </h3>

                  <p className="mt-1 break-all text-sm text-muted-foreground">
                    info@omnisuiteai.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl border border-white/10 p-5 sm:p-6 lg:col-span-3 lg:p-8"
          >
            <div className="space-y-5">
              {/* Service */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Select Service *
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-2xl border border-border bg-[#141517] px-4 py-3 text-sm outline-none transition-all focus:border-primary ${!formData.service
                    ? "text-muted-foreground"
                    : "text-foreground"
                    }`}
                >
                  <option value="" disabled hidden>
                    Choose a Service
                  </option>

                  {SERVICES.map((srv) => (
                    <option
                      key={srv}
                      value={srv}
                      className="bg-[#0E1115] text-white"
                    >
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary"
                  />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary"
                  />
                </div>

                {/* PHONE INPUT */}
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone *
                  </label>

                  <PhoneInput
                    key={detectedCountry}
                    country={detectedCountry}
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone,
                      }))
                    }
                    enableSearch
                    countryCodeEditable={false}
                    containerClass="!w-full"
                    inputClass="!w-full !h-[50px] !rounded-2xl !border !border-border !bg-secondary/40 !pl-[55px] !text-sm !text-foreground"
                    buttonClass="!border-border !bg-secondary/40 !rounded-l-2xl"
                    dropdownClass="!bg-background !text-foreground"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Additional Notes *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary"
                />
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center overflow-hidden pt-2">
                <Turnstile
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken(null)}
                  onError={() => setCaptchaToken(null)}
                />
              </div>

              {/* SUCCESS */}
              {status === "success" && (
                <div className="rounded-2xl border border-green-800/40 bg-green-950/30 p-4 text-sm text-green-300">
                  Message sent successfully!
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="rounded-2xl border border-red-800/40 bg-red-950/30 p-4 text-sm text-red-300">
                  {message}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={status === "loading" || !captchaToken}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
                style={{ backgroundColor: "#08708F" }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
