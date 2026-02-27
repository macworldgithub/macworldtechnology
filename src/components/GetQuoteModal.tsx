import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Send, Loader2 } from "lucide-react";

interface GetQuoteModalProps {
    children: ReactNode;
}

const BACKEND_URL = "https://www.test.omnisuiteai.com";

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
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        mainService: "",
        subService: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

            const response = await fetch(`${BACKEND_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus("success");
                setMessage(result.message || "Thank you! Your quote request has been sent.");
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
            // Even if fetch fails because backend isn't ready, we show a graceful message
            setStatus("error");
            setMessage("Failed to connect to the server. Please try again later.");
            console.error(err);
        }
    };

    const availableSubServices = formData.mainService ? SERVICES_MAP[formData.mainService] : [];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            {/* Blurred overlay is handled by DialogOverlay in our shadcn dialog implementation.
          Wait, shadcn dialog already has bg-black/80. We can add backdrop-blur-md there or inline here by appending class. 
          Actually shadcn Dialog doesn't let us pass classes easily to overlay from here unless we customize the dialog.tsx. 
          But wait, the user requested "background screen should be blurred". We will modify DialogOverlay in dialog.tsx. */}
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
                                    Main Service *
                                </label>
                                <select
                                    name="mainService"
                                    value={formData.mainService}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none appearance-none"
                                >
                                    <option value="">Select a main service</option>
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
                                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <option value="">Select a sub service</option>
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
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">Name *</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">Email *</label>
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
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">Company</label>
                                <input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">Phone</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-xs font-medium text-muted-foreground">Message *</label>
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
