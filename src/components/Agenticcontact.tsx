 import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";
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

const AgenticContact = () => {
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
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset subService when mainService changes
      if (name === "mainService") {
        updated.subService = "";
      }
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone || formData.phone.length <= 4) {
      setStatus("error");
      setMessage("Please enter a valid phone number.");
      return;
    }

    setStatus("loading");
    setMessage("");

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

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        navigate("/thank-you");
        setMessage(result.message || "Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          mainService: "",
          subService: "",
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

  const availableSubServices = formData.mainService
    ? [...SERVICES_MAP[formData.mainService], "Custom AI Project"]
    : [];

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
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
            className="glass-card space-y-5 p-6 lg:col-span-3"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
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

            <div className="grid gap-4 md:grid-cols-2">
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

            {status === "success" && (
              <div className="rounded-lg bg-green-950/40 border border-green-800/50 p-4 text-sm text-green-300">
                {message}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-lg bg-red-950/40 border border-red-800/50 p-4 text-sm text-red-300">
                {message}
              </div>
            )}

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
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default AgenticContact;