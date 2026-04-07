import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand">YCD Studio</div>
            <p className="footer__desc">
              Architecture, interiors, and tenant improvement design rooted in
              the San Francisco Bay Area.
            </p>
          </div>

          <div className="footer__columns">
            <div>
              <div className="footer__column-title">Pages</div>
              <div className="footer__column">
                <Link href="/">Home</Link>
                <Link href="/work">Work</Link>
                <Link href="/studio">Studio</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <div className="footer__column-title">Services</div>
              <div className="footer__column">
                <Link href="/residential">Residential</Link>
                <Link href="/hospitality">Hospitality</Link>
                <Link href="/commercial">Commercial</Link>
                <Link href="/multi-family">Multi-Family</Link>
                <Link href="/sacred">Sacred</Link>
                <Link href="/tenant-improvement">Tenant Improvement</Link>
              </div>
            </div>

            <div>
              <div className="footer__column-title">Connect</div>
              <div className="footer__column">
                <a href="mailto:info@ycd.studio">
                  Email
                </a>
                <a
                  href="https://instagram.com/ycd.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/ycd-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a href="tel:+14153000057">+1 415-300-0057</a>
              </div>
            </div>
          </div>
        </div>

        <p className="footer__signoff">Designed with care in San Francisco.</p>
        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} YCD Studio. All rights reserved.</span>
          <div className="footer__social">
            <a
              href="https://instagram.com/ycd.studios"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/ycd-studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
