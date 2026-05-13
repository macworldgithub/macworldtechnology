import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY } from "../lib/constants";
import { Send, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDetectedCountry } from "@/hooks/useDetectedCountry";
import { isValidPhoneNumber } from "libphonenumber-js";
interface GetQuoteModalProps {
  children: ReactNode;
}

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
export const GetQuoteModal = ({ children }: GetQuoteModalProps) => {
  const navigate = useNavigate();
  const detectedCountry = useDetectedCountry();

  const [open, setOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
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
      const formattedService = `${formData.mainService} - ${formData.subService}`;

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formattedService,
        message: formData.message,
        token: captchaToken,
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
        setCaptchaToken(null);
        navigate("/thank-you");
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

  const availableSubServices = formData.mainService
    ? [...SERVICES_MAP[formData.mainService], "Custom AI Project"]
    : [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl bg-background/95 backdrop-blur-xl border border-border sm:rounded-2xl">
        <div className="p-1">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Request a <span className="gradient-text">Quote</span>
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Tell us about your needs and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  MAIN SERVICE *
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
                  SUB SERVICE *
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
                  NAME *
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
                  EMAIL *
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
                  COMPANY (optional)
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
                  PHONE *
                </label>

                <PhoneInput
                  key={detectedCountry}
                  country={detectedCountry}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
                  enableSearch
                  countryCodeEditable={false}
                  inputClass="!w-full !h-[42px] !bg-secondary/50 !text-sm !text-foreground !border !border-border !rounded-lg"
                  buttonClass="!border-border"
                  dropdownClass="!bg-background !text-foreground"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">
                ADDITIONAL NOTES
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
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

            {/* Status Messages */}
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
              disabled={
                status === "loading" ||
                !captchaToken ||
                !formData.phone ||
                !isValidPhoneNumber(`+${formData.phone}`)
              }
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
      </DialogContent>
    </Dialog>
  );
};
