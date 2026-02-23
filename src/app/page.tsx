import Link from "next/link";

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
      "A leading full-service digital media and custom software development company with a team of 65+ AI engineers. Clients include Barclays UK, Packages Limited, Beaconhouse School System, Hashoo Group, and Tetra Pak.",
    link: "https://bearplex.com",
  },
  {
    name: "Turing Venture Capital",
    role: "Co-founder",
    description:
      "An early-stage venture capital firm focused on funding and fostering tech and AI startups, helping transform innovative ideas into successful ventures.",
    link: "#",
  },
  {
    name: "PeoplePlus",
    role: "Visionary",
    description:
      "An AI-powered HR platform designed to revolutionize how businesses manage talent, streamline operations, and drive workforce productivity.",
    link: "#",
  },
  {
    name: "The MediaGale",
    role: "Fractional CTO",
    description:
      "Providing strategic technology leadership for this New York City-based media company, driving digital transformation and innovation.",
    link: "#",
  },
];

const HIGHLIGHTS = [
  { value: "13+", label: "Years in Tech" },
  { value: "65+", label: "AI Engineers Led" },
  { value: "50+", label: "Global Clients" },
  { value: "$100K+", label: "Angel Investments" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="inline-block ml-1 transition-transform group-hover:translate-x-1"
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
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-tight">
            HP
          </Link>
          <div className="hidden gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
          >
            Get in Touch
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted">
            Serial Entrepreneur &middot; Angel Investor &middot; Tech CEO
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Hamad{" "}
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Pervaiz
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Building the future through technology, venture capital, and
            relentless entrepreneurship. CEO of BearPlex, Co-founder of Turing
            Venture Capital, and Ex-Advisor to the Prime Minister of Pakistan on
            Science &amp; Technology.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#ventures"
              className="rounded-full bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-light"
            >
              Explore Ventures
            </Link>
            <Link
              href="#about"
              className="rounded-full border border-card-border px-8 py-3 font-medium text-foreground transition-colors hover:bg-card"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-card-border bg-card">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-4">
          {HIGHLIGHTS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
                A dynamic leader shaping the tech landscape
              </h3>
              <p className="mb-4 leading-relaxed text-muted">
                With over 13 years of experience in the technology industry,
                Hamad Pervaiz has established himself as a formidable force in
                entrepreneurship, venture capital, and digital transformation.
                As a certified ERP Consultant and Software Architect, he brings
                deep technical expertise paired with strategic business acumen.
              </p>
              <p className="leading-relaxed text-muted">
                Beyond business, Hamad is passionate about astrophysics and
                aspires to create ventures with profound impact&mdash;akin to
                SpaceX&mdash;that push the boundaries of human potential.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl border border-card-border bg-card p-6">
                <h4 className="mb-2 font-semibold">Technical Expertise</h4>
                <p className="text-sm text-muted">
                  Full-stack development with React, Node.js, TypeScript, and
                  TailwindCSS. Certified ERP Consultant and Software Architect
                  with multi-stakeholder experience.
                </p>
              </div>
              <div className="rounded-xl border border-card-border bg-card p-6">
                <h4 className="mb-2 font-semibold">Education</h4>
                <p className="text-sm text-muted">
                  University of Virginia &middot; Lahore University of
                  Management Sciences (LUMS)
                </p>
              </div>
              <div className="rounded-xl border border-card-border bg-card p-6">
                <h4 className="mb-2 font-semibold">Recognition</h4>
                <p className="text-sm text-muted">
                  Young Prodigy Award recipient &middot; Ex-Advisor to the Prime
                  Minister of Pakistan on Science &amp; Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="border-t border-card-border px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Ventures
          </h2>
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
            Building companies that matter
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {VENTURES.map((venture) => (
              <a
                key={venture.name}
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
                  {venture.role}
                </div>
                <h4 className="mb-3 text-xl font-bold">{venture.name}</h4>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {venture.description}
                </p>
                <span className="text-sm font-medium text-accent group">
                  Learn more
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Investments */}
      <section
        id="investments"
        className="border-t border-card-border px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Investments
          </h2>
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
            Backing the next wave of innovation
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h4 className="mb-2 text-lg font-bold">Odus Studio</h4>
              <div className="mb-3 text-xs font-medium text-accent">
                Pre-Seed &middot; $100K &middot; Nov 2023
              </div>
              <p className="text-sm text-muted">
                Early-stage investment in a promising studio pushing the
                boundaries of digital creativity and AI-driven tooling.
              </p>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h4 className="mb-2 text-lg font-bold">Turing VC Portfolio</h4>
              <div className="mb-3 text-xs font-medium text-accent">
                Early-Stage Focus
              </div>
              <p className="text-sm text-muted">
                Through Turing Venture Capital, actively investing in and
                mentoring early-stage tech and AI startups across the globe.
              </p>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h4 className="mb-2 text-lg font-bold">Investment Thesis</h4>
              <div className="mb-3 text-xs font-medium text-accent">
                AI &middot; Deep Tech &middot; SaaS
              </div>
              <p className="text-sm text-muted">
                Focused on transformative technologies with proven track record
                of turning startups into successful, scalable ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="border-t border-card-border px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Get in Touch
          </h2>
          <h3 className="mb-6 text-3xl font-bold sm:text-4xl">
            Let&apos;s build something extraordinary
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-muted">
            Whether you&apos;re a founder seeking investment, a company looking
            for technology leadership, or an innovator ready to collaborate
            &mdash; let&apos;s connect.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.linkedin.com/in/hamadpervaiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-light sm:w-auto"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/hamadpervaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-card-border px-8 py-3 font-medium text-foreground transition-colors hover:bg-card sm:w-auto"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
            <a
              href="https://hamadpervaiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-card-border px-8 py-3 font-medium text-foreground transition-colors hover:bg-card sm:w-auto"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Website
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; 2027 Hamad Pervaiz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/hamadpervaiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hamadpervaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://dribbble.com/hamadpervaiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Dribbble
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
