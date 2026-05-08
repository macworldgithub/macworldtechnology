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

interface MarketingQuoteModalProps {
  children: ReactNode;
}

const BACKEND_URL = "https://www.test.omnisuiteai.com/api";

const SERVICES = ["Meta Advertising", "Google Ads", "SEO"];

export const MarketingQuoteModal = ({ children }: MarketingQuoteModalProps) => {
  const navigate = useNavigate();
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

    try {
      const payload = { ...formData, captchaToken };
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-2xl bg-background/95 backdrop-blur-xl border border-border sm:rounded-2xl">
        <div className="p-4">
          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Request an <span className="gradient-text">Marketing Quote</span>
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Select a service and provide your details. Our team will contact you
            shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm appearance-none cursor-pointer ${!formData.service
                    ? "text-muted-foreground"
                    : "text-foreground"
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
                  key={detectedCountry}
                  country={detectedCountry}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone }))
                  }
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
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-1">
                Additional Notes
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

            {status === "success" && (
              <div className="rounded-lg bg-green-950/40 border border-green-800/50 p-4 text-sm text-green-300">
                {message || "Your request was submitted successfully!"}
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
