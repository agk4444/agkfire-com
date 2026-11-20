import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon, BriefcaseIcon } from "@/components/Icons";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact — AGK Fire",
  description: `Contact ${company.name} — ${company.phoneDisplay}, ${company.email}, ${company.address.line1}, ${company.address.city}, ${company.address.state}`,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact">
                <div>
                  <span className="eyebrow">Work with us</span>
                  <h2 className="h2">Let's build something useful.</h2>
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

                <div className="contact__list">
                  <div className="contact__row">
                    <div className="contact__icon">
                      <PinIcon />
                    </div>
                    <div>
                      <div className="contact__label">Office</div>
                      <div className="contact__value">
                        {company.address.line1}, {company.address.city},{" "}
                        {company.address.state} {company.address.zip}
                      </div>
                    </div>
                  </div>

                  <a className="contact__row" href={`tel:${company.phone}`}>
                    <div className="contact__icon">
                      <PhoneIcon />
                    </div>
                    <div>
                      <div className="contact__label">Phone</div>
                      <div className="contact__value">{company.phoneDisplay}</div>
                    </div>
                  </a>

                  <a className="contact__row" href={`mailto:${company.email}`}>
                    <div className="contact__icon">
                      <MailIcon />
                    </div>
                    <div>
                      <div className="contact__label">Email</div>
                      <div className="contact__value">{company.email}</div>
                    </div>
                  </a>

                  <div className="contact__row">
                    <div className="contact__icon">
                      <BriefcaseIcon />
                    </div>
                    <div>
                      <div className="contact__label">Legal entity</div>
                      <div className="contact__value">{company.dba}</div>
                    </div>
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
