const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="/" className="flex items-center" aria-label="MacWorld Technologies home">
          <img
            src="/macworld_logo.png"
            alt="MacWorld Technologies"
            className="h-14 w-40 object-cover object-center"
          />
        </a>
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
