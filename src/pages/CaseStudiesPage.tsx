import React, { useState, useEffect } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { TURNSTILE_SITE_KEY, BACKEND_URL } from "../lib/constants";
import { OUR_BUILDS } from "../data/showcaseBuilds";
import "./case-studies-manus.css";

const CaseStudiesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [feedback, setFeedback] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });
  const [currentYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    // Reveal animations observer
    const revealItems = document.querySelectorAll(".case-studies-scope .reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -26px 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));
      return () => {
        revealObserver.disconnect();
      };
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.service) {
      setFeedback("Please fill in all required fields.");
      setIsSuccess(false);
      return;
    }

    if (!captchaToken) {
      setFeedback("Please complete the captcha.");
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setFeedback("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      service: formData.service,
      source: "macworld",
      captchaToken,
    };

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Enquiry submission failed"
        );
      }

      setIsSuccess(true);
      setFeedback(data.message || "Your enquiry has been submitted successfully.");
      alert(data.message || "Your enquiry has been submitted successfully.");
      setFormData({
        name: "",
        email: "",
        service: "",
      });
      setCaptchaToken(null);
    } catch (error: any) {
      console.error("Error:", error.message);
      setIsSuccess(false);
      setFeedback(error.message || "Something went wrong. Please try again.");
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showcaseItems = [
    {
      id: "01",
      category: "infrastructure",
      image: "/case-studies-infra.webp",
      alt: "Abstract cloud infrastructure with connected digital nodes",
      kicker: "FOUNDATION / 01",
      tag1: "INFRASTRUCTURE",
      tag2: "CONNECTED CLOUD",
      title: "Room to grow, built in.",
      desc: "Bring your digital workspace together on a foundation designed to flex as your business changes.",
    },
    {
      id: "02",
      category: "automation",
      image: "/case-studies-workflow.webp",
      alt: "Luminous workflow nodes converging into a central automation hub",
      kicker: "WORKFLOW / 02",
      tag1: "AUTOMATION",
      tag2: "SMARTER WORK",
      title: "Less busywork. More momentum.",
      desc: "Connect everyday systems so important work can move forward without unnecessary handoffs.",
    },
    {
      id: "03",
      category: "security",
      image: "/case-studies-security.webp",
      alt: "Geometric shield integrated with a connected secure network",
      kicker: "RESILIENCE / 03",
      tag1: "SECURITY",
      tag2: "BUILT-IN TRUST",
      title: "Confidence at every layer.",
      desc: "Strengthen visibility and access with practical protection shaped around the way your team works.",
    },
  ];

  return (
    <div className="case-studies-scope min-h-screen bg-[#080a0f] text-[#f3f6fb] font-['Inter',sans-serif]">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header */}
      <header className="site-header" id="top">
        <div className="nav-shell">
          <a className="brand" href="/" aria-label="MacWorld Technologies home">
            <img
              src="/macworld-logo-cropped.png"
              alt="MacWorld Technologies"
              className="h-16 w-52 sm:h-20 sm:w-64 object-contain"
            />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <nav
            className={`primary-nav ${mobileMenuOpen ? "is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#capabilities" onClick={closeMenu}>
              Capabilities
            </a>
            <a href="#showcase" onClick={closeMenu}>
              Showcase
            </a>
            <a href="#approach" onClick={closeMenu}>
              Approach
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a project <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art" aria-hidden="true"></div>
          <div className="hero-orbit hero-orbit-one" aria-hidden="true"></div>
          <div className="hero-orbit hero-orbit-two" aria-hidden="true"></div>
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span> TECHNOLOGY FOR WHAT’S NEXT
            </p>
            <h1 id="hero-title">
              Make technology
              <br />
              feel <span className="gradient-text">effortless.</span>
            </h1>
            <p className="hero-intro">
              The right systems give good ideas room to grow. We bring your technology together—so your people can move
              forward with clarity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let’s talk about your goals <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-quiet" href="#showcase">
                Explore our work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line"></span>
              <span>A better way to work starts with a better foundation.</span>
            </div>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            <span>CONNECTED SYSTEMS</span>
            <i></i>
            <span>HUMAN FIRST</span>
          </div>
          <a className="scroll-cue" href="#capabilities" aria-label="Scroll to capabilities">
            <span></span>
          </a>
        </section>

        {/* Promise Strip */}
        <section className="promise-strip" aria-label="What to expect">
          <div className="promise-inner">
            <p>
              <span className="promise-icon">01</span>
              <span>
                <strong>Clear by design</strong>
                <small>Advice you can act on</small>
              </span>
            </p>
            <p>
              <span className="promise-icon">02</span>
              <span>
                <strong>Secure at the core</strong>
                <small>Resilience built in</small>
              </span>
            </p>
            <p>
              <span className="promise-icon">03</span>
              <span>
                <strong>Ready to evolve</strong>
                <small>Technology that grows with you</small>
              </span>
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="section capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-heading reveal">
            <p className="eyebrow">
              <span className="section-slash">//</span> WHAT WE DO
            </p>
            <div className="heading-row">
              <h2 id="capabilities-title">
                Everything works
                <br />
                <span className="muted-heading">better together.</span>
              </h2>
              <p className="section-deck">
                Technology is at its best when the pieces fit. We connect the right tools, teams, and ideas around the
                way you work.
              </p>
            </div>
          </div>

          <div className="service-grid">
            <article className="service-card reveal">
              <div className="service-top">
                <span className="service-icon icon-cyan">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M14 35h20a8 8 0 0 0 1.2-15.9A12 12 0 0 0 12 21a7 7 0 0 0 2 14Z" />
                    <path d="M20 27h8M24 23v8" />
                  </svg>
                </span>
                <span className="card-index">01</span>
              </div>
              <h3>Smart infrastructure</h3>
              <p>
                Build a dependable digital foundation, from cloud environments to the everyday tools your team relies
                on.
              </p>
              <a className="text-link" href="#contact">
                Explore infrastructure <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="service-card reveal">
              <div className="service-top">
                <span className="service-icon icon-blue">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <rect x="8" y="9" width="13" height="12" rx="3" />
                    <rect x="27" y="27" width="13" height="12" rx="3" />
                    <path d="M21 15h4a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h2" />
                    <path d="m31 23 4 4-4 4" />
                  </svg>
                </span>
                <span className="card-index">02</span>
              </div>
              <h3>Workflow &amp; automation</h3>
              <p>
                Give people their time back by making repeatable work flow naturally across the tools you already use.
              </p>
              <a className="text-link" href="#contact">
                Explore automation <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="service-card reveal">
              <div className="service-top">
                <span className="service-icon icon-violet">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M24 7 38 13v10c0 9-5.8 15.1-14 18-8.2-2.9-14-9-14-18V13l14-6Z" />
                    <path d="m18 24 4 4 8-9" />
                  </svg>
                </span>
                <span className="card-index">03</span>
              </div>
              <h3>Cyber resilience</h3>
              <p>
                Protect the work that matters with practical safeguards, thoughtful access, and better visibility.
              </p>
              <a className="text-link" href="#contact">
                Explore resilience <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="service-card service-card-highlight reveal">
              <div className="service-top">
                <span className="service-icon icon-lime">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M11 13h26M11 24h26M11 35h26" />
                    <circle cx="18" cy="13" r="4" />
                    <circle cx="30" cy="24" r="4" />
                    <circle cx="21" cy="35" r="4" />
                  </svg>
                </span>
                <span className="card-index">04</span>
              </div>
              <h3>Technology care</h3>
              <p>
                Keep your setup useful and up to date with ongoing guidance that makes the next step feel simple.
              </p>
              <a className="text-link" href="#contact">
                Explore support <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        {/* Portfolio - Our Builds (Left-to-right scrolling showcase) */}
        <section className="builds-section" id="builds" aria-labelledby="builds-title">
          <div className="section mb-8">
            <div className="section-heading reveal">
              <p className="eyebrow">
                <span className="section-slash">//</span> PORTFOLIO
              </p>
              <div className="heading-row">
                <h2 id="builds-title">
                  Our Builds
                  <br />
                  <span className="muted-heading text-lg sm:text-2xl md:text-5xl font-normal block mt-1">
                    Live AI demos &amp; production platforms.
                  </span>
                </h2>
                <p className="section-deck">
                  A curated selection of live demos and production applications from our portfolio — from trading intelligence and fintech to AI sales kiosks and autonomous agents.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative w-full">
            {/* Edge Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#080a0f] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#080a0f] to-transparent z-10 pointer-events-none"></div>

            {/* Infinite Horizontal Marquee */}
            <div className="builds-marquee-track px-4">
              {[...OUR_BUILDS, ...OUR_BUILDS].map((build, idx) => (
                <article key={`${build.id}-${idx}`} className="build-card">
                  <div className="build-card-image-wrap">
                    <img
                      src={build.image}
                      alt={build.title}
                      className="build-card-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10141d] via-transparent to-transparent"></div>
                  </div>
                  <div className="build-card-body">
                    <span className={`build-category-badge ${build.categoryColor.bg} ${build.categoryColor.text}`}>
                      {build.category}
                    </span>
                    <h3 className="build-card-title">
                      <span>{build.title}</span>
                    </h3>
                    <p className="build-card-tagline">"{build.tagline}"</p>
                    <p className="build-card-desc">{build.description}</p>
                    <div className="build-features">
                      {build.features.map((feat, fIdx) => (
                        <span key={fIdx} className="build-feature-pill">
                          {feat}
                        </span>
                      ))}
                    </div>
                    <a
                      href={build.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="build-link-btn"
                    >
                      View Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="showcase-section" id="showcase" aria-labelledby="showcase-title">
          <div className="section showcase-wrap">
            <div className="section-heading reveal">
              <p className="eyebrow">
                <span className="section-slash">//</span> BUILT TO MAKE A DIFFERENCE
              </p>
              <div className="heading-row">
                <h2 id="showcase-title">
                  Good ideas.
                  <br />
                  <span className="muted-heading">Thoughtfully connected.</span>
                </h2>
                <p className="section-deck">
                  A closer look at the foundations, workflows, and safeguards that help modern teams do their best
                  work.
                </p>
              </div>
            </div>

            <div className="filter-bar reveal" role="group" aria-label="Filter capability highlights">
              <span className="filter-label">VIEW BY</span>
              <button
                className={`filter-button ${selectedFilter === "all" ? "is-active" : ""}`}
                type="button"
                data-filter="all"
                aria-pressed={selectedFilter === "all"}
                onClick={() => setSelectedFilter("all")}
              >
                All highlights <span>03</span>
              </button>
              <button
                className={`filter-button ${selectedFilter === "infrastructure" ? "is-active" : ""}`}
                type="button"
                data-filter="infrastructure"
                aria-pressed={selectedFilter === "infrastructure"}
                onClick={() => setSelectedFilter("infrastructure")}
              >
                Infrastructure
              </button>
              <button
                className={`filter-button ${selectedFilter === "automation" ? "is-active" : ""}`}
                type="button"
                data-filter="automation"
                aria-pressed={selectedFilter === "automation"}
                onClick={() => setSelectedFilter("automation")}
              >
                Automation
              </button>
              <button
                className={`filter-button ${selectedFilter === "security" ? "is-active" : ""}`}
                type="button"
                data-filter="security"
                aria-pressed={selectedFilter === "security"}
                onClick={() => setSelectedFilter("security")}
              >
                Security
              </button>
            </div>

            <div className="showcase-grid" id="showcase-grid">
              {showcaseItems.map((item) => {
                const isHidden = selectedFilter !== "all" && item.category !== selectedFilter;
                return (
                  <article
                    key={item.id}
                    className={`showcase-card reveal ${isHidden ? "is-hidden" : ""}`}
                    data-category={item.category}
                  >
                    <a className="showcase-image" href="#contact" aria-label={`Ask about ${item.title}`}>
                      <img src={item.image} alt={item.alt} loading="lazy" />
                      <span className="image-shade"></span>
                      <span className="image-arrow" aria-hidden="true">
                        ↗
                      </span>
                      <span className="image-kicker">{item.kicker}</span>
                    </a>
                    <div className="showcase-meta">
                      <span>{item.tag1}</span>
                      <span className="meta-dot"></span>
                      <span>{item.tag2}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a className="text-link" href="#contact">
                      Explore the approach <span aria-hidden="true">↗</span>
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="showcase-note">
              <span className="note-spark" aria-hidden="true">
                ✳
              </span>{" "}
              Each solution starts with your people, priorities, and plans.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="approach-section section" id="approach" aria-labelledby="approach-title">
          <div className="approach-copy reveal">
            <p className="eyebrow">
              <span className="section-slash">//</span> HOW WE WORK
            </p>
            <h2 id="approach-title">
              Clarity first.
              <br />
              <span className="muted-heading">Progress that lasts.</span>
            </h2>
            <p className="approach-deck">
              No jargon for its own sake. No technology without a reason. Just a considered path from where you are to
              where you want to be.
            </p>
            <a className="button button-outline" href="#contact">
              Find your next step <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="approach-steps">
            <article className="approach-step reveal">
              <span className="step-number">01</span>
              <div>
                <h3>Listen &amp; understand</h3>
                <p>We start with your goals, your people, and the challenges in the way.</p>
              </div>
              <span className="step-mark" aria-hidden="true">
                +
              </span>
            </article>
            <article className="approach-step reveal">
              <span className="step-number">02</span>
              <div>
                <h3>Shape a clear plan</h3>
                <p>We map the right-sized solution, the moving parts, and what comes first.</p>
              </div>
              <span className="step-mark" aria-hidden="true">
                +
              </span>
            </article>
            <article className="approach-step reveal">
              <span className="step-number">03</span>
              <div>
                <h3>Build, connect, improve</h3>
                <p>We bring it to life, then keep listening as the next opportunity takes shape.</p>
              </div>
              <span className="step-mark" aria-hidden="true">
                +
              </span>
            </article>
          </div>
        </section>

        {/* Confidence Section */}
        <section className="confidence-section" aria-labelledby="confidence-title">
          <div className="confidence-inner section">
            <div className="confidence-heading reveal">
              <p className="eyebrow">
                <span className="section-slash">//</span> THE MACWORLD DIFFERENCE
              </p>
              <h2 id="confidence-title">
                Technology should
                <br />
                <span className="gradient-text">work for you.</span>
              </h2>
              <p>Make the complex feel clear. Make the everyday feel easier. Make your next move with confidence.</p>
            </div>
            <div className="benefit-list">
              <article className="benefit reveal">
                <span className="benefit-mark">✳</span>
                <div>
                  <h3>Thoughtful, not overbuilt</h3>
                  <p>Practical solutions shaped around the outcomes you actually need.</p>
                </div>
              </article>
              <article className="benefit reveal">
                <span className="benefit-mark">✳</span>
                <div>
                  <h3>One connected picture</h3>
                  <p>Less fragmentation. A clearer view of the systems behind your work.</p>
                </div>
              </article>
              <article className="benefit reveal">
                <span className="benefit-mark">✳</span>
                <div>
                  <h3>People stay at the centre</h3>
                  <p>Technology that meets your team where they are—and moves with them.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy reveal">
            <p className="eyebrow">
              <span className="section-slash">//</span> YOUR NEXT MOVE
            </p>
            <h2 id="contact-title">
              Let’s make it
              <br />
              <span className="muted-heading">make sense.</span>
            </h2>
            <p>Tell us what you’re exploring. We’ll help you find the right place to start.</p>
            <div className="contact-aside">
              <span className="contact-pulse"></span>
              <span>A real conversation. A clearer next step.</span>
            </div>
          </div>
          <form className="contact-form reveal" id="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-heading">
              <span>START A CONVERSATION</span>
              <span className="form-asterisk" aria-hidden="true">
                ✳
              </span>
            </div>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="How should we address you?"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="contact-email">Work email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="contact-interest">What would you like to make easier?</label>
            <select
              id="contact-interest"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Choose an area to explore
              </option>
              <option value="Infrastructure & cloud">Infrastructure &amp; cloud</option>
              <option value="Workflow & automation">Workflow &amp; automation</option>
              <option value="Security & resilience">Security &amp; resilience</option>
              <option value="Ongoing technology support">Ongoing technology support</option>
              <option value="Something else">Something else</option>
            </select>
            <div className="my-3 flex justify-center">
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken(null)}
              />
            </div>
            <button
              className="button button-primary form-submit disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Prepare your enquiry"}{" "}
              <span aria-hidden="true">↗</span>
            </button>
            {feedback && (
              <p
                className={`form-feedback ${isSuccess ? "text-cyan-400" : "text-red-400"}`}
                id="form-feedback"
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main section">
          <div className="footer-brand-column">
            <a className="brand !p-0 -ml-1 sm:-ml-2 inline-flex" href="/" aria-label="MacWorld Technologies home">
              <img
                src="/macworld-logo-cropped.png"
                alt="MacWorld Technologies"
                className="h-16 w-auto max-w-[220px] object-contain object-left"
              />
            </a>
            <p>
              Technology, thoughtfully connected.
              <br />
              Built around what matters to you.
            </p>
          </div>
          <div className="footer-column">
            <h2>EXPLORE</h2>
            <a href="#capabilities">Capabilities</a>
            <a href="#showcase">Showcase</a>
            <a href="#approach">Our approach</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h2>START HERE</h2>
            <p>Have a question or an idea taking shape?</p>
            <a className="footer-contact-link" href="mailto:?subject=Macworld%20Technology%20enquiry">
              Prepare an email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-column footer-social">
            <h2>ON THE WEB</h2>
            <a href="https://www.linkedin.com/company/mac-world-technology/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.instagram.com/macworldtechnology?dlrf=MWtyMjR2djIxaXNvdw==" target="_blank" rel="noreferrer">
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom section">
          <span>© {currentYear} Macworld Technology</span>
          <a href="#top">Back to the top ↑</a>
          <span className="footer-signoff">A little more clarity. A lot more possibility.</span>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;
