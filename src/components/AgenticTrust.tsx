import { motion } from "framer-motion";
import { Award, MapPin, ArrowRight } from "lucide-react";
import { AgenticQuoteModal } from "@/components/AgenticQuoteModal";



const offices = [
  { country: "Australia", city: "Melbourne" },
  { country: "USA", city: "New York" },
  { country: "UAE", city: "Dubai" },
  { country: "Pakistan", city: "Lahore" },
];

const awards = [
  { name: "Clutch", desc: "Top Web Developer 2026", logo: "/img3.svg" },
  { name: "Google Partner", desc: "Certified Partner", logo: "/img.svg" },
  { name: "AppFutura", desc: "Top Digital Marketing", logo: "/img2.svg" },
];

const AgenticTrust = () => {
  return (
    <section id="trust" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="section-label mb-4 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          Why OmniSuite AI
        </p>
        <h2>
          Trusted by Industry{" "}
          <span className="gradient-text">Leaders Worldwide</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          With years of excellence and high client retention, we've earned the
          trust of enterprises across four continents.
        </p>

        {/* Awards */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex items-center gap-4 p-5"
            >
              <img
                src={a.logo}
                alt={a.name}
                className="h-20 w-auto opacity-80"
              />
              <div>
                <h4 className="text-sm font-bold text-foreground">{a.name}</h4>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="glass-card p-8">
          <h3>Global Presence</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {offices.map((o, i) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {o.country}
                  </p>
                  <p className="text-xs text-muted-foreground">{o.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <AgenticQuoteModal>
            <button
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              style={{ backgroundColor: "#08708F" }}
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </AgenticQuoteModal>
        </motion.div>
      </div>
    </section>
  );
};

export default AgenticTrust;
