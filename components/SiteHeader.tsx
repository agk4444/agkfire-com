"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet when the viewport grows into the desktop nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Close mobile nav on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`header${stuck ? " header--stuck" : ""}`}>
      <div className="container header__inner">
        <a className="brand" href="/" aria-label="AGK Fire Inc — home">
          <img className="brand__logo" src="/agk-logo.png" alt="AGK Fire" />
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "nav__active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <a className="btn btn--primary btn--sm header__cta" href="/contact">
            Start a project
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? " nav-toggle--open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pathname === link.href ? "nav__active" : ""}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  );
}
