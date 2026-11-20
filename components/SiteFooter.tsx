import { company } from "@/lib/site";

export default function SiteFooter({ year }: { year: number }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="brand">
              <img className="brand__logo" src="/agk-logo.png" alt="AGK Fire" />
              <span>
                {company.name}
                <span className="brand__sub">Software &amp; Media</span>
              </span>
            </span>
            <p className="footer__blurb">
              Independent software and media company building digital products
              and operating independent media platforms.
            </p>
          </div>

          <div>
            <div className="footer__title">Navigate</div>
            <div className="footer__links">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/ventures">Ventures</a>
              <a href="/capabilities">Capabilities</a>
              <a href="/leadership">Leadership</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <div className="footer__title">Contact</div>
            <div className="footer__links">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              <a
                href="https://www.socialnews.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Social News XYZ
              </a>
              <a
                href="https://agkfireos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AGK OS
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {company.legal}. All rights reserved.</span>
          <span>
            {company.address.city}, {company.address.state} {company.address.zip}
          </span>
        </div>
      </div>
    </footer>
  );
}
