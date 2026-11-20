import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { CodeIcon, BroadcastIcon } from "@/components/Icons";
import { company, stats } from "@/lib/site";

export const metadata = {
  title: "About — AGK Fire",
  description: `${company.name} was founded in New York in ${company.founded}, still registered there, based in Melbourne, Florida.`,
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--ink">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Company</span>
              <h2 className="h2">
                Founded in New York. Registered in New York. Based in Florida.
              </h2>
              <p className="lede">
                {company.name} was founded in New York in {company.founded} and
                is still registered there. Today the company is based in
                Melbourne, Florida. Its work spans mobile utilities, AI products,
                education technology, and digital publishing. The company
                operates Social News XYZ, owns truthsocial.co.in, and maintains
                a portfolio that includes products in development and legacy
                Android utilities.
              </p>
            </div>

            <div className="stats">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="head-block">
              <h2 className="h2">What we build</h2>
              <p className="lede">
                Three disciplines, one engineering-led team.
              </p>
            </div>

            <div className="grid grid--2">
              <Reveal>
                <article className="card">
                  <div className="card__icon">
                    <CodeIcon />
                  </div>
                  <span className="venture__kicker">Build</span>
                  <h3 className="h3">Digital products</h3>
                  <p>
                    Product work includes mobile utilities, personal AI
                    experiences, and education tools — engineered around clear
                    user needs.
                  </p>
                </article>
              </Reveal>
              <Reveal delay={70}>
                <article className="card">
                  <div className="card__icon">
                    <BroadcastIcon />
                  </div>
                  <span className="venture__kicker">Operate</span>
                  <h3 className="h3">Media properties</h3>
                  <p>
                    Publishing operations cover entertainment news and owned
                    digital media properties across text, photo, and video.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}
