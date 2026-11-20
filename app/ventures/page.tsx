import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";
import { company, ventures, type Status } from "@/lib/site";

const statusClass: Record<Status, string> = {
  Operating: "tag tag--live",
  "In development": "tag tag--build",
  "Open source": "tag tag--oss",
  Legacy: "tag tag--legacy",
};

export const metadata = {
  title: "Ventures — AGK Fire",
  description: `${company.name} portfolio — platforms in operation and products in development.`,
};

export default function VenturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--paper">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Portfolio</span>
              <h2 className="h2">
                Platforms in operation and products in development.
              </h2>
              <p className="lede">
                Every venture below is either live today or actively in build —
                with a clear owner, a clear purpose, and a public destination.
              </p>
            </div>

            <div className="grid grid--2">
              {ventures.map((venture, index) => (
                <Reveal key={venture.id} delay={(index % 2) * 70}>
                  <article
                    className={`venture${venture.featured ? " venture--featured" : ""}`}
                  >
                    <div className="venture__top">
                      <span className="venture__kicker">{venture.kicker}</span>
                      <span className={statusClass[venture.status]}>
                        <span className="tag__dot" />
                        {venture.status}
                      </span>
                    </div>

                    <h3>{venture.name}</h3>
                    <p className="venture__body">{venture.blurb}</p>

                    <div className="chips">
                      {venture.chips.map((chip) => (
                        <span className="chip" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>

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
          </div>
        </section>
      </main>

      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}
