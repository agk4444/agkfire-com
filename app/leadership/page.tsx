import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@/components/Icons";
import { leader, company } from "@/lib/site";

export const metadata = {
  title: "Leadership — AGK Fire",
  description: `${leader.name}, ${leader.role} at ${company.name}.`,
};

export default function LeadershipPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section--ink">
          <div className="container">
            <div className="head-block">
              <span className="eyebrow">Leadership</span>
              <h2 className="h2">
                Engineering leadership across software and media.
              </h2>
            </div>

            <Reveal>
              <div className="leader">
                <img
                  className="leader__photo"
                  src="/leader.jpg"
                  alt={`Portrait of ${leader.name}`}
                />
                <div>
                  <h3>{leader.name}</h3>
                  <div className="leader__role">{leader.role}</div>
                  <a
                    className="leader__link"
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn profile
                    <ArrowUpRightIcon />
                  </a>
                  <p className="leader__bio">{leader.bio}</p>
                  <p className="leader__note">{leader.note}</p>
                  <div className="chips">
                    {leader.skills.map((skill) => (
                      <span className="chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter year={new Date().getFullYear()} />
    </>
  );
}
