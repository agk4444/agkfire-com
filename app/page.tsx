import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { company, stats, ventures, type Status } from "@/lib/site";

const statusClass: Record<Status, string> = {
  Operating: "tag tag--live",
  "In development": "tag tag--build",
  "Open source": "tag tag--oss",
  Legacy: "tag tag--legacy",
};

export default function Home() {
  const year = new Date().getFullYear();
  const preview = ventures.slice(0, 3);

  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* ------------------------------------------------------------ hero */}
        <section className="hero">
          <div className="container hero__inner">
            <span className="eyebrow">Melbourne, Florida · {year}</span>
            <h1 className="display">
              Ideas built for the <em>digital world.</em>
            </h1>
            <p className="hero__sub">
              Founded in New York in {company.founded}, {company.name} is an
              independent software and media company developing useful products,
              education technology, and publishing platforms — built and
              operated under one roof.
            </p>

            <div className="btn-row">
              <a className="btn btn--primary" href="/ventures">
                Explore our portfolio
              </a>
              <a className="btn btn--onInk" href="/about">
                Company overview
              </a>
            </div>

            <div className="hero__meta">
              <span>Software product development</span>
              <span>Independent digital publishing</span>
              <span>Focused learning technology</span>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- stats */}
        <section className="section section--tight">
          <div className="container">
            <Reveal>
              <div className="stats">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <div className="stat__value">{stat.value}</div>
                    <div className="stat__label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------- ventures */}
        <section className="section section--paper" id="ventures">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Selected ventures</span>
              <h2 className="h2">Platforms in operation and products in development.</h2>
              <p className="lede">
                Every venture below is either live today or actively in build —
                with a clear owner, a clear purpose, and a public destination.
              </p>
            </div>

            <div className="grid grid--2">
              {preview.map((venture, index) => (
                <Reveal key={venture.id} delay={(index % 2) * 70}>
                  <article className={`venture${venture.featured ? " venture--featured" : ""}`}>
                    <div className="venture__top">
                      <span className="venture__kicker">{venture.kicker}</span>
                      <span className={statusClass[venture.status]}>
                        <span className="tag__dot" />
                        {venture.status}
                      </span>
                    </div>

                    <h3>{venture.name}</h3>
                    <p className="venture__body">{venture.blurb}</p>

                    <div className="venture__links">
                      {venture.links.map((link) => (
                        <a
                          key={link.href + link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <ArrowUpRightIcon />
                        </a>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="btn-row" style={{ marginTop: "2rem" }}>
              <a className="btn btn--primary" href="/ventures">
                View all ventures
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- contact */}
        <section className="section section--tight">
          <div className="container">
            <Reveal>
              <div className="contact">
                <div>
                  <span className="eyebrow">Work with us</span>
                  <h2 className="h2">Let&apos;s build something useful.</h2>
                  <p className="lede">
                    We work with organizations that need thoughtful web, mobile,
                    AI-assisted, or custom software. Tell us about your goals and
                    requirements.
                  </p>
                  <div className="btn-row">
                    <a className="btn btn--primary" href={`mailto:${company.email}`}>
                      Email our team
                    </a>
                    <a className="btn btn--onInk" href={`tel:${company.phone}`}>
                      Call {company.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter year={year} />
    </>
  );
}
