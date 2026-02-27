import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const categories = ["All Demos", "MVNO", "Voice AI", "Widget", "Dashboards", "AI Retail"];

const demos = [
  { cat: "MVNO", stat: "100%", statLabel: "AI-Powered Operations", name: "JUSTmobile", tagline: "Australia's First AI-Powered eSIM Provider", desc: "Revolutionizing the Australian mobile industry with an AI-powered eSIM platform, offering smarter plans on the Telstra Wholesale Network.", tags: ["AI-Powered Setup", "eSIM Technology", "Telstra Network"], url: "https://www.justmobile.ai/" },
  { cat: "Voice AI", stat: "70%", statLabel: "Profit Retention", name: "AfterCare AI", tagline: "AI-Powered Upselling for Dealerships", desc: "Supercharges dealership revenue with a 24/7 AI-powered upselling solution at a fraction of the cost.", tags: ["AI Upselling", "24/7 Availability", "70% Profit"], url: "https://aftercareai.com.au/" },
  { cat: "Voice AI", stat: "24/7", statLabel: "Automated Service", name: "AI Mortgage Suite", tagline: "Intelligent Mortgage Automation", desc: "Transforms the mortgage industry by automating processes and enhancing customer engagement.", tags: ["24/7 Availability", "Intelligent Recs", "Cost-Effective"], url: "https://aimortgagesuite.com/" },
  { cat: "Widget", stat: "360°", statLabel: "Full-Service Digital", name: "The Hype Society", tagline: "Creative Digital Marketing Agency", desc: "A Melbourne-based creative agency empowering brands through innovative digital strategies.", tags: ["Digital Strategy", "Web Development", "Creative Services"], url: "https://www.thehypesociety.com.au/" },
  { cat: "Widget", stat: "1000+", statLabel: "Active Listings", name: "Just JDM Cars", tagline: "Premier JDM Marketplace Australia", desc: "The premier online destination for JDM vehicle enthusiasts in Australia.", tags: ["Advanced Search", "Buy & Sell", "JDM News"], url: "https://justjdmcars.com.au/" },
  { cat: "Dashboards", stat: "Real-time", statLabel: "Market Intelligence", name: "AutoIntel Australia", tagline: "Vehicle Market Intelligence Dashboard", desc: "Real-time vehicle market intelligence empowering dealerships to make data-driven decisions.", tags: ["Acquisition Opps", "Pricing Guidance", "AI Intelligence"], url: "https://aiautomotivesuite.com/" },
  { cat: "Dashboards", stat: "10x", statLabel: "Faster Insights", name: "Forecast Wells", tagline: "Upstream Energy Intelligence Platform", desc: "The premier upstream energy intelligence platform for the oil and gas industry.", tags: ["Analytics", "Forecasting", "Benchmarking"], url: "https://forecastwells.com/" },
  { cat: "AI Retail", stat: "20+", statLabel: "Retailers Compared", name: "The Power Broker", tagline: "AI-Powered Energy Comparison Platform", desc: "Empowers Australian consumers to take control of energy costs with free, independent comparison.", tags: ["20+ Retailers", "AI Bill Scanning", "60-Day Reminders"], url: "https://thepowerbroker.com.au/" },
];

const demoStats = [
  { value: "8", label: "Live Products" },
  { value: "5", label: "Industries Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "AI-Powered Support" },
];

const Demos = () => {
  const [filter, setFilter] = useState("All Demos");
  const filtered = filter === "All Demos" ? demos : demos.filter((d) => d.cat === filter);

  return (
    <section id="demos" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Live Demos</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Our Products{" "}
          <span className="gradient-text">In Action</span>
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Explore live deployments across industries — from AI-powered MVNOs to intelligent dashboards and voice automation platforms.
        </p>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${filter === c
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {filtered.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="glass-card flex flex-col p-6 transition-all hover:border-primary/30"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-xs font-medium text-primary">{d.cat}</span>
                  <div className="text-right">
                    <span className="stat-number gradient-cyan-text">{d.stat}</span>
                    <p className="stat-label">{d.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{d.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-[10px] text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {demoStats.map((s, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <span className="stat-number gradient-cyan-text">{s.value}</span>
              <p className="stat-label mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <GetQuoteModal>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </GetQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default Demos;
