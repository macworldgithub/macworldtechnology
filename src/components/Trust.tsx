import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

const awards = [
  { name: "Clutch", desc: "Top Web Developer 2026" },
  { name: "Google Partner", desc: "Certified Partner" },
  { name: "AppFutura", desc: "Top Digital Marketing" },
];

const offices = [
  { country: "Australia", city: "Melbourne" },
  { country: "USA", city: "New York" },
  { country: "UAE", city: "Dubai" },
  { country: "Pakistan", city: "Lahore" },
];

const Trust = () => {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label mb-4">// Why OmniSuite AI</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Trusted by Industry{" "}
          <span className="gradient-text">Leaders Worldwide</span>
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          With years of excellence and high client retention, we've earned the trust of enterprises across four continents.
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
              <Award className="h-8 w-8 text-primary" />
              <div>
                <h4 className="text-sm font-bold text-foreground">{a.name}</h4>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="glass-card p-8">
          <h3 className="mb-6 text-lg font-bold text-foreground">Global Presence</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {offices.map((o, i) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{o.country}</p>
                  <p className="text-xs text-muted-foreground">{o.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
