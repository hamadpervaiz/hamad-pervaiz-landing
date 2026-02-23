import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Investments", href: "#investments" },
  { label: "Contact", href: "#contact" },
];

const VENTURES = [
  {
    name: "BearPlex",
    role: "Founder & CEO",
    description:
      "Leading a 65+ team of AI engineers in a full-service custom software development company. Trusted by Barclays UK, Tetra Pak, Hashoo Group, and Beaconhouse.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    link: "https://bearplex.com",
    accent: "from-violet-500 to-purple-600",
  },
  {
    name: "Turing Venture Capital",
    role: "Co-founder",
    description:
      "Early-stage VC firm focused on funding and fostering the next generation of tech and AI startups across the globe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    link: "#",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    name: "PeoplePlus",
    role: "Visionary",
    description:
      "An AI-powered HR platform revolutionizing how businesses manage talent, streamline operations, and unlock workforce potential.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    link: "#",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "The MediaGale",
    role: "Fractional CTO",
    description:
      "Strategic technology leadership for this NYC-based media company, driving digital transformation and scalable architecture.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    link: "#",
    accent: "from-orange-500 to-amber-500",
  },
];

const STATS = [
  { value: 13, suffix: "+", label: "Years in Tech" },
  { value: 65, suffix: "+", label: "AI Engineers Led" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 100, prefix: "$", suffix: "K+", label: "Angel Investments" },
];

const CLIENTS = [
  "Barclays UK",
  "Tetra Pak",
  "Packages Limited",
  "Hashoo Group",
  "Beaconhouse",
];

const EXPERTISE = [
  { label: "React", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "Node.js", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { label: "TypeScript", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { label: "TailwindCSS", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  { label: "AI/ML", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { label: "ERP Systems", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "Software Architecture", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
  { label: "Venture Capital", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={`inline-block ml-1.5 transition-transform duration-300 ${className}`}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#050507]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="relative text-xl font-bold tracking-tight">
            <span className="gradient-text">HP</span>
          </Link>
          <div className="hidden gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="glow-btn relative z-10 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-6">
        {/* Grid background */}
        <div className="hero-grid animate-grid absolute inset-0" />

        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/8 blur-[100px]" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] h-2 w-2 rounded-full bg-accent/60 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 left-[10%] h-1.5 w-1.5 rounded-full bg-purple-400/40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-32 right-[25%] h-1 w-1 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            <span className="text-sm text-muted-light">
              Available for advisory &amp; investment opportunities
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 mb-8 text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
            Hamad{" "}
            <span className="gradient-text">Pervaiz</span>
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-light sm:text-xl">
            Building the future through technology, venture capital, and
            relentless entrepreneurship.
          </p>

          <p className="animate-fade-up-delay-2 mx-auto mb-12 max-w-xl text-sm leading-relaxed text-muted">
            CEO of BearPlex &middot; Co-founder of Turing VC &middot; Ex-Advisor
            to the Prime Minister of Pakistan on Science &amp; Technology
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#ventures"
              className="glow-btn relative z-10 rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/25"
            >
              Explore Ventures
            </Link>
            <Link
              href="#about"
              className="group rounded-full border border-white/[0.1] px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.03]"
            >
              Learn More
              <ArrowIcon className="group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-muted to-transparent" />
          </div>
        </div>
      </section>

      {/* Trusted By Marquee */}
      <section className="border-y border-white/[0.06] bg-white/[0.01] py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
            <span
              key={i}
              className="mx-8 text-sm font-medium uppercase tracking-[0.2em] text-muted/50 sm:mx-12 sm:text-base"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <RevealSection key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="gradient-text">
                    <CountUp
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                About
              </span>
            </div>
          </RevealSection>

          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <RevealSection delay={100}>
                <h3 className="mb-8 text-3xl font-bold leading-tight sm:text-5xl">
                  A dynamic leader
                  <br />
                  <span className="text-muted">shaping the tech landscape</span>
                </h3>
              </RevealSection>
              <RevealSection delay={200}>
                <p className="mb-6 text-lg leading-relaxed text-muted-light">
                  With over 13 years of experience in the technology industry,
                  Hamad Pervaiz has established himself as a formidable force in
                  entrepreneurship, venture capital, and digital transformation.
                </p>
              </RevealSection>
              <RevealSection delay={300}>
                <p className="mb-10 leading-relaxed text-muted">
                  As a certified ERP Consultant and Software Architect, he brings
                  deep technical expertise paired with strategic business acumen.
                  Beyond business, Hamad is passionate about astrophysics and
                  aspires to create ventures with profound impact&mdash;akin to
                  SpaceX&mdash;that push the boundaries of human potential.
                </p>
              </RevealSection>
              <RevealSection delay={400}>
                <div className="flex flex-wrap gap-2">
                  {EXPERTISE.map((skill) => (
                    <span
                      key={skill.label}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${skill.color}`}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              </RevealSection>
            </div>

            <div className="space-y-5 lg:col-span-2">
              {[
                {
                  icon: "M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                  title: "Education",
                  text: "University of Virginia\nLahore University of Management Sciences (LUMS)",
                },
                {
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  title: "Recognition",
                  text: "Young Prodigy Award\nEx-Advisor to PM of Pakistan on Science & Technology",
                },
                {
                  icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                  title: "Global Impact",
                  text: "Multi-cultural, multi-stakeholder partnerships spanning Pakistan, UK, USA, and beyond",
                },
              ].map((card, i) => (
                <RevealSection key={card.title} delay={200 + i * 150}>
                  <div className="glass-card rounded-2xl p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent"
                      >
                        <path d={card.icon} />
                      </svg>
                    </div>
                    <h4 className="mb-2 font-semibold">{card.title}</h4>
                    <p className="text-sm leading-relaxed text-muted whitespace-pre-line">
                      {card.text}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Ventures
              </span>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h3 className="mb-4 text-3xl font-bold sm:text-5xl">
              Building companies
              <br />
              <span className="text-muted">that matter</span>
            </h3>
          </RevealSection>
          <RevealSection delay={150}>
            <p className="mb-14 max-w-xl text-muted-light">
              From AI-powered platforms to venture capital, each venture is driven
              by a mission to create lasting impact through technology.
            </p>
          </RevealSection>

          <div className="grid gap-5 sm:grid-cols-2">
            {VENTURES.map((venture, i) => (
              <RevealSection key={venture.name} delay={200 + i * 100}>
                <a
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group block h-full rounded-2xl p-7"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${venture.accent} text-white shadow-lg`}>
                    {venture.icon}
                  </div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {venture.role}
                  </div>
                  <h4 className="mb-3 text-xl font-bold">{venture.name}</h4>
                  <p className="mb-5 text-sm leading-relaxed text-muted">
                    {venture.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-accent transition-colors group-hover:text-accent-light">
                    Learn more
                    <ArrowIcon className="group-hover:translate-x-1.5" />
                  </span>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investments */}
      <section id="investments" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Investments
              </span>
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h3 className="mb-4 text-3xl font-bold sm:text-5xl">
              Backing the next wave
              <br />
              <span className="text-muted">of innovation</span>
            </h3>
          </RevealSection>
          <RevealSection delay={150}>
            <p className="mb-14 max-w-xl text-muted-light">
              Strategic investments in transformative technologies, with a focus
              on AI, deep tech, and SaaS startups ready to scale.
            </p>
          </RevealSection>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Odus Studio",
                tag: "Pre-Seed &middot; $100K &middot; Nov 2023",
                desc: "Early-stage investment in a promising studio pushing the boundaries of digital creativity and AI-driven tooling.",
                gradient: "from-violet-500/20 to-transparent",
              },
              {
                name: "Turing VC Portfolio",
                tag: "Early-Stage Focus",
                desc: "Actively investing in and mentoring early-stage tech and AI startups through Turing Venture Capital.",
                gradient: "from-blue-500/20 to-transparent",
              },
              {
                name: "Investment Thesis",
                tag: "AI &middot; Deep Tech &middot; SaaS",
                desc: "Focused on transformative technologies with a proven track record of turning startups into scalable ventures.",
                gradient: "from-emerald-500/20 to-transparent",
              },
            ].map((item, i) => (
              <RevealSection key={item.name} delay={200 + i * 100}>
                <div className="glass-card group relative overflow-hidden rounded-2xl p-7 h-full">
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${item.gradient}`} />
                  <h4 className="mb-2 text-lg font-bold">{item.name}</h4>
                  <div
                    className="mb-4 text-xs font-semibold uppercase tracking-wider text-accent"
                    dangerouslySetInnerHTML={{ __html: item.tag }}
                  />
                  <p className="text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="relative px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,92,252,0.1)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <RevealSection>
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-accent" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Get in Touch
              </span>
              <div className="h-[1px] w-8 bg-accent" />
            </div>
          </RevealSection>
          <RevealSection delay={100}>
            <h3 className="mb-6 text-3xl font-bold sm:text-5xl">
              Let&apos;s build something
              <br />
              <span className="gradient-text">extraordinary</span>
            </h3>
          </RevealSection>
          <RevealSection delay={200}>
            <p className="mx-auto mb-12 max-w-lg text-muted-light">
              Whether you&apos;re a founder seeking investment, a company looking
              for technology leadership, or an innovator ready to
              collaborate&mdash;let&apos;s connect.
            </p>
          </RevealSection>
          <RevealSection delay={300}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://www.linkedin.com/in/hamadpervaiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn relative z-10 flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/25 sm:w-auto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/hamadpervaiz"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-white/[0.1] px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.03] sm:w-auto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="https://hamadpervaiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-white/[0.1] px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.03] sm:w-auto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Website
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold gradient-text">HP</span>
            <span className="text-sm text-muted">
              &copy; 2027 Hamad Pervaiz
            </span>
          </div>
          <div className="flex gap-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/hamadpervaiz/" },
              { label: "GitHub", href: "https://github.com/hamadpervaiz" },
              { label: "Dribbble", href: "https://dribbble.com/hamadpervaiz" },
              { label: "Crunchbase", href: "https://www.crunchbase.com/person/hamad-pervaiz" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
