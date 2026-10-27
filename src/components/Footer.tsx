import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-sm font-bold text-foreground">
            MacWorld <span className="text-primary">Technology</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 MacWorld Technology. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Sitemap"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
