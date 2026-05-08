// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const BACKEND_URL = "https://www.test.omnisuiteai.com/api";

// const SERVICES_MAP: Record<string, string[]> = {
//   "AI Chatbot Development": [
//     "Website & WhatsApp Chatbots",
//     "Lead Qualification Bots",
//     "AI Sales Assistants",
//     "24/7 Automated Customer Support",
//     "CRM Integration",
//   ],
//   "Generative AI Solutions": [
//     "AI Content Creation Systems",
//     "Automated Email & Ad Copy Generation",
//     "AI SEO Optimization Tools",
//     "AI Image & Creative Generation",
//   ],
//   "Business Process Automation": [
//     "Workflow Automation",
//     "AI Email & Task Automation",
//     "Smart Document Processing",
//     "Internal Operations AI Systems",
//   ],
//   "Custom AI Development": [
//     "Predictive Analytics Systems",
//     "AI SaaS Development",
//     "CRM & ERP AI Integration",
//     "AI Agent Development",
//   ],
//   "AI for Marketing & Advertising": [
//     "AI Ad Creative Testing",
//     "Audience Behavior Analysis",
//     "Campaign Performance Optimization",
//     "Predictive Customer Targeting",
//   ],
// };

// const MAIN_SERVICES = Object.keys(SERVICES_MAP);

// const Contact = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     mainService: "",
//     // subService: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<
//     "idle" | "loading" | "success" | "error"
//   >("idle");
//   const [message, setMessage] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => {
//       const updated = { ...prev, [name]: value };
//       // Reset subService when mainService changes
//       if (name === "mainService") {
//         updated.subService = "";
//       }
//       return updated;
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");
//     setMessage("");

//     try {
//       const formattedService = `${formData.mainService} - ${formData.subService}`;

//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         company: formData.company,
//         phone: formData.phone,
//         service: formattedService,
//         message: formData.message,
//       };

//       const response = await fetch(`${BACKEND_URL}/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDetectedCountry } from "@/hooks/useDetectedCountry";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "../lib/constants";
import { isValidPhoneNumber } from "libphonenumber-js";

const BACKEND_URL = "https://www.test.omnisuiteai.com/api";

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

const AI_CUSTOMER_SERVICES = [
  "AI Customer Service Agent",
  "AI Chatbot Agent",
  "AI Call Center Automation",
  "AI Voice Agent",
  "AI Sales Agent",
  "AI E-commerce Agent",
  "Custom AI Agent",
];

const Contact = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const activeServices = pathname === "/lp/ai-customer-service-agent" ? AI_CUSTOMER_SERVICES : SERVICES;
  // const detectedCountry = useDetectedCountry();
  const allowedCountries = ["us", "au"];
  const [selectedCountry, setSelectedCountry] = useState(pathname === "/lp/ai-customer-service-agent" ? "au" : "us");
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, captchaToken }),
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
        setMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect to the server. Please try again later.");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-label mb-4 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Get in Touch
        </p>
        <h2>
          Let's Build{" "}
          <span className="gradient-text">Something Exceptional</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Ready to transform your digital presence? Schedule a free consultation
          with our team.
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Office
                  </p>
                  <p className="text-sm text-muted-foreground">
                    10 Merna Drv, Templestowe VIC 3106, Australia
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    +61 435 386 534
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    info@omnisuiteai.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-5 p-4 sm:p-6 lg:col-span-3"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Select Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-border bg-secondary/100 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none appearance-none"
              >
                <option value="" disabled hidden>
                  Choose an AI solution
                </option>
                {activeServices.map((srv) => (
                  <option key={srv} value={srv}>
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
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
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  Company (optional)
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  Phone *
                </label>
                {/* <PhoneInput
                  key={detectedCountry}
                  country={detectedCountry}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  inputClass="!w-full !h-[42px] !bg-secondary/50 !text-sm !text-foreground !border !border-border !rounded-lg"
                  buttonClass="!border-border"
                  dropdownClass="!bg-background !text-foreground"
                /> */}
                <PhoneInput
                  country={selectedCountry}
                  onlyCountries={allowedCountries}
                  value={formData.phone}
                  onChange={(phone, countryData: any) => {
                    setFormData((prev) => ({ ...prev, phone }));

                    if (countryData && countryData.countryCode) {
                      setSelectedCountry(countryData.countryCode);
                    }
                  }}
                  enableSearch
                  countryCodeEditable={false}
                  inputClass="!w-full !h-auto !py-2.5 !bg-secondary/50 !border-border !rounded-lg !text-sm !text-foreground focus:!border-primary focus:!outline-none !transition-all"
                  buttonClass="!bg-transparent !border-border !rounded-l-lg hover:!bg-white/5"
                  dropdownClass="!bg-background !text-foreground !border-border"
                  containerClass="!w-full"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <div className="flex justify-center py-2">
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
                onError={() => setCaptchaToken(null)}
              />
            </div>

            {status === "success" && (
              <div className="rounded-lg bg-green-950/40 border border-green-800/50 p-4 text-sm text-green-300">
                {message || "Sent successfully!"}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-lg bg-red-950/40 border border-red-800/50 p-4 text-sm text-red-300">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={
                status === "loading" ||
                !captchaToken ||
                !formData.phone ||
                !isValidPhoneNumber(`+${formData.phone}`)
              }
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg disabled:opacity-60"
              style={{ backgroundColor: "#08708F" }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
