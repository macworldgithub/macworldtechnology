import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GetQuoteModal } from "@/components/GetQuoteModal";

const categories = [
  "All Demos",
  "Finance",
  "Automotive",
  "Real Estate",
  "Gaming",
  "Telecommunications",
  "Home Services",
];

const demos = [
  {
    cat: "Finance",
    stat: "Instant",
    statLabel: "ABN Verification",
    name: "VHM Finance Partners",
    tagline: "Business cashflow finance, simplified",
    desc: "An AI-powered platform that matches businesses with unsecured loans from $5,000 to $500,000. Provides instant ABN verification and same-day decisions.",
    tags: ["Instant ABN Verification", "Same-Day Decisions", "Panel of Lenders", "Real-Time Tracking"],
    url: "https://imaginative-kitten-4e8e26.netlify.app",
  },
  {
    cat: "Automotive",
    stat: "24/7",
    statLabel: "AI Sales Kiosk",
    name: "BYD Digital Kiosk Proposal",
    tagline: "Your 24/7 AI Sales Kiosk Network",
    desc: "A proposal to deploy voice-powered AI kiosks across Australian shopping centres for selling BYD vehicles autonomously.",
    tags: ["Voice-Powered AI", "Live Inventory Connection", "CRM Integration", "Finance Systems"],
    url: "https://lucent-lollipop-78e2a9.netlify.app",
  },
  {
    cat: "Home Services",
    stat: "24/7",
    statLabel: "Tradie Support",
    name: "Bele.Ai",
    tagline: "Never miss a customer call again",
    desc: "An AI-powered call answering service for tradies that picks up missed calls, qualifies callers, captures details, and sends an SMS instantly.",
    tags: ["AI Voice Agent", "CLI Detection", "Call Qualification", "Instant SMS"],
    url: "https://tradie-frontend.vercel.app",
  },
  {
    cat: "Finance",
    stat: "6+",
    statLabel: "AI Concepts",
    name: "CardConnect × LevukaLabs",
    tagline: "AI-Powered Payment Innovation",
    desc: "Six novel AI concepts built on CardConnect’s existing API environment. From churn-busting subscription orchestration to autonomous commerce agents.",
    tags: ["AI Subscription Orchestrator", "Payment Router", "Conversational Checkout", "Autonomous Agents"],
    url: "https://fluffy-kashata-b7251f.netlify.app",
  },
  {
    cat: "Real Estate",
    stat: "360°",
    statLabel: "Client Engagement",
    name: "Geelong Real Estate Co",
    tagline: "The Future of Geelong Real Estate",
    desc: "An AI-powered platform that transforms real estate operations, offering intelligent customer engagement, market intelligence, and marketing automation.",
    tags: ["AI Property Concierge", "Predictive Intelligence", "Marketing Engine", "Multilingual Support"],
    url: "https://phenomenal-torte-769e72.netlify.app",
  },
  {
    cat: "Finance",
    stat: "Real-time",
    statLabel: "Trade Signals",
    name: "FinSuite360",
    tagline: "Trading Intelligence Platform",
    desc: "A trading intelligence platform providing live market overviews, trade signals, analytics, and risk calculation tools for crypto, forex, and indices.",
    tags: ["Live Market Overview", "Trade Signals", "Risk Calculator", "Economic Calendar"],
    url: "https://finsuite360.com",
  },
  {
    cat: "Real Estate",
    stat: "AI Valuations",
    statLabel: "Smart Search",
    name: "Knight Frank AI Proposal",
    tagline: "The Future of Real Estate Intelligence",
    desc: "An AI innovation proposal for Knight Frank featuring AI Property Search, Valuations Engine, Client Concierge, and Market Intelligence.",
    tags: ["AI Property Search", "AI Valuations Engine", "AI Client Concierge", "Market Intelligence"],
    url: "https://lovely-fenglisu-ee32b7.netlify.app",
  },
  {
    cat: "Gaming",
    stat: "Simulated",
    statLabel: "Leagues",
    name: "BetMania",
    tagline: "Fictional Sports Betting",
    desc: "A fictional sports betting platform featuring simulated leagues like Cyber Basketball and Neon Soccer. Users can place bets on upcoming matches and track progress.",
    tags: ["Fictional Sports Leagues", "Daily Bonus", "Betting Odds", "Match Tracking"],
    url: "https://betmaniagame.com",
  },
  {
    cat: "Gaming",
    stat: "18",
    statLabel: "Agent Types",
    name: "Manaverse",
    tagline: "Where Agents Battle, Evolve, and Own the Verse",
    desc: "An AI agent battle arena where users train agents, compete in tournaments, and earn $MANA tokens. Features 18 unique types and agent evolution mechanics.",
    tags: ["18 Unique Types", "Epic Tournaments", "Agent Evolution", "$MANA Tokens"],
    url: "https://manaverseofficial.com/",
  },
  {
    cat: "Automotive",
    stat: "Real-time",
    statLabel: "Market Intelligence",
    name: "AutoIntel Australia",
    tagline: "Vehicle Market Intelligence",
    desc: "Provides live vehicle market intelligence, tracking total listings, average prices, and top acquisition opportunities for dealerships.",
    tags: ["Live Market Intelligence", "Pricing Guidance", "Segment Index Trends", "Market Share Analytics"],
    url: "https://aiautomotivesuite.com",
  },
  {
    cat: "Telecommunications",
    stat: "100%",
    statLabel: "AI-Powered Operations",
    name: "JUSTmobile",
    tagline: "Australia’s first AI-powered eSIM provider",
    desc: "An AI-powered eSIM provider in Australia offering affordable mobile plans on the Telstra Wholesale network. Uses AI for setup, support, and plan management.",
    tags: ["AI-Powered Setup", "Telstra Wholesale Network", "Data Rollover up to 1000GB", "No Lock-In Contracts"],
    url: "https://justmobile.ai",
  },
  {
    cat: "Automotive",
    stat: "70%",
    statLabel: "Profit Retention",
    name: "AfterCareAI",
    tagline: "Transform Your Revenue With Intelligent Upselling",
    desc: "Delivers consistent, high-performance upselling for automotive dealerships. Provides 24/7 availability and data-driven pitches at a fraction of traditional costs.",
    tags: ["Sales Follow-Up Calls", "Service Bookings", "Parts Interpretation", "Vehicle Sourcing"],
    url: "https://aftercareai.com.au",
  },
];

const demoStats = [
  { value: "12", label: "Live Products" },
  { value: "6", label: "Industries Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "AI-Powered Support" },
];

const Demos = () => {
  const [filter, setFilter] = useState("All Demos");
  const filtered =
    filter === "All Demos" ? demos : demos.filter((d) => d.cat === filter);

  return (
    <section id="demos" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Live Demos</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Our Products <span className="gradient-text">In Action</span>
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Explore live deployments across industries — from AI-powered MVNOs to
          intelligent dashboards and voice automation platforms.
        </p>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                filter === c
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
                  <span className="text-xs font-medium text-primary">
                    {d.cat}
                  </span>
                  <div className="text-right">
                    <span className="stat-number gradient-cyan-text">
                      {d.stat}
                    </span>
                    <p className="stat-label">{d.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {d.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {d.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-[10px] text-secondary-foreground"
                    >
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
              className="flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-primary/30"
              style={{ backgroundColor: "#08708F" }}
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
