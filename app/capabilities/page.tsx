import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { AcademicIcon, BroadcastIcon, CodeIcon } from "@/components/Icons";
import { capabilities, company } from "@/lib/site";

const capIcons = {
  code: CodeIcon,
  broadcast: BroadcastIcon,
  academic: AcademicIcon,
};

export const metadata = {
  title: "Capabilities — AGK Fire",
  description: `${company.name} — product development, digital media, education technology.`,
};

export default function CapabilitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">What we do</span>
              <h2 className="h2">
                A focused portfolio across products and publishing.
              </h2>
              <p className="lede">
                Three disciplines, one engineering-led team: we build software,
                run media, and develop focused learning technology.
              </p>
            </div>

            <div className="grid grid--3">
              {capabilities.map((cap, index) => {
                const Icon = capIcons[cap.icon];
                return (
                  <Reveal key={cap.title} delay={index * 70}>
                    <article className="card">
                      <div className="card__num">0{index + 1}</div>
                      <div className="card__icon">
                        <Icon />
                      </div>
                      <h3 className="h3">{cap.title}</h3>
                      <p>{cap.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}
