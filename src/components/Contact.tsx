import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Get in Touch</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Let's Build{" "}
          <span className="gradient-text">Something Exceptional</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Ready to transform your digital presence? Schedule a free consultation with our team.
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Office</p>
                  <p className="text-sm text-muted-foreground">10 Merna Drv, Templestowe VIC 3106, Australia</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+61 435 386 534</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@omnisuiteai.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 p-6 lg:col-span-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Name *</label>
                <input name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Email *</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Service of Interest</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none">
                <option value="">Select a service</option>
                <option>Managed Services (MSP)</option>
                <option>Strategy & Consulting</option>
                <option>Advertising & Marketing</option>
                <option>Web Development</option>
                <option>AI Automation</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted-foreground">Message *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25">
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
