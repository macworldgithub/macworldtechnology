import { useState, ReactNode, useMemo } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "../lib/constants";
import { Send, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDetectedCountry } from "@/hooks/useDetectedCountry";

import { isValidPhoneNumber } from "libphonenumber-js";

interface MarketingQuoteModalProps {
  children: ReactNode;
}

const BACKEND_URL = "https://www.test.omnisuiteai.com/api";
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

export const ModalForm = ({ children }: MarketingQuoteModalProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const detectedCountry = useDetectedCountry();

  const [open, setOpen] = useState(false);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

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

  

  const SERVICES = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return AGENTIC_AI_SERVICES;
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return CUSTOMER_SERVICE_SERVICES;
    }

    return [];
  }, [location.pathname]);
  const modalHeading = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return { main: "Request an ", highlight: "Agentic Quote" };
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return { main: "Request an ", highlight: "Customer Quote" };
    }

    return { main: "Request a ", highlight: "Quote" };
  }, [location.pathname]);

  const modalDescription = useMemo(() => {
    if (location.pathname === "/agentic-ai") {
      return "Select an AI agent solution and our team will contact you shortly.";
    }

    if (location.pathname === "/ai-customer-service-agent") {
      return "Choose a customer service AI solution and our experts will reach out shortly.";
    }

    return "Please fill out the form and our team will contact you shortly.";
  }, [location.pathname]);


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

    // Phone validation for all countries
    const phoneNumber = `+${formData.phone}`;

    if (!formData.phone || !isValidPhoneNumber(phoneNumber)) {
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

    try {
      const payload = {
        ...formData,
        captchaToken,
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

        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);

      setStatus("error");

      setMessage("Failed to connect to the server.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[95vw] max-w-2xl overflow-y-auto rounded-2xl border border-border bg-background/95 p-0 backdrop-blur-xl sm:w-full">
        <div className="p-5 sm:p-6 lg:p-8">
          {/* Heading */}
          <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl mt-2">
            {modalHeading.main} <span className="gradient-text">{modalHeading.highlight}</span>
          </h2>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {modalDescription}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Service */}
            <div className="space-y-2">
              <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Service *
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={SERVICES.length === 0}
                className={`w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-primary ${!formData.service
                  ? "text-muted-foreground"
                  : "text-foreground"
                  } ${SERVICES.length === 0 ? "cursor-not-allowed opacity-50" : ""
                  }`}
              >
                <option value="" disabled hidden>
                  {SERVICES.length > 0
                    ? "Select a Service"
                    : "No Services Available"}
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

            {/* Name + Email */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Name *
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary"
                />
              </div>
            </div>

            {/* Company + Phone */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Company
                </label>

                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary"
                />
              </div>

              {/* PHONE */}
              <div className="space-y-2">
                <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Phone *
                </label>

                {/* AUTO COUNTRY CODE */}
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
                  inputClass="!w-full !h-[48px] !rounded-xl !border !border-border !bg-secondary/50 !pl-[52px] !text-sm !text-foreground"
                  buttonClass="!border-border !bg-secondary/50 !rounded-l-xl"
                  dropdownClass="!bg-background !text-foreground"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="px-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                Additional Notes
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all focus:border-primary"
              />
            </div>

            {/* CAPTCHA */}
            <div className="flex justify-center overflow-hidden py-2">
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
                onError={() => setCaptchaToken(null)}
              />
            </div>

            {/* SUCCESS */}
            {status === "success" && (
              <div className="rounded-xl border border-green-800/50 bg-green-950/40 p-4 text-sm text-green-300">
                Your request was submitted successfully!
              </div>
            )}

            {/* ERROR */}
            {status === "error" && (
              <div className="rounded-xl border border-red-800/50 bg-red-950/40 p-4 text-sm text-red-300">
                {message}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={
                status === "loading" ||
                !captchaToken ||
                !formData.phone ||
                !isValidPhoneNumber(`+${formData.phone}`)
              }
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-60"
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
      </DialogContent>
    </Dialog>
  );
};
