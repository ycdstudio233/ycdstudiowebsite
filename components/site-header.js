"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Transparent header (white text) only on homepage where the dark hero is
  const headerClass = scrolled
    ? "header header--scrolled"
    : isHome
      ? "header header--transparent"
      : "header header--scrolled";

  return (
    <>
      <header className={headerClass}>
        <div className="header__inner">
          <Link className="header__brand" href="/" onClick={() => setMenuOpen(false)}>
            <span className="header__logo" aria-hidden="true" />
            YCD Studio
          </Link>

          <nav className="header__nav" aria-label="Main navigation">
            {navLinks.map((item) => (
              <Link className="header__link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="btn btn--primary header__cta" href="/contact">
              Start a project
            </Link>
          </nav>

          <button
            className={`header__menu-toggle${menuOpen ? " header__menu-toggle--open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`} aria-label="Mobile navigation">
        {navLinks.map((item) => (
          <Link
            className="mobile-nav__link"
            href={item.href}
            key={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="btn btn--primary btn--large mobile-nav__cta"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Start a project
        </Link>
      </nav>
    </>
  );
}
