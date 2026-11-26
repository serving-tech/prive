import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <span className="footer__mark">
            <span className="wordmark" style={{ fontSize: 26 }}>Privé</span>
            <span className="dots" aria-hidden="true">
              <i style={{ width: 12, height: 12, borderRadius: "50%", background: "#e8b64c" }} />
              <svg width="14" height="14" viewBox="0 0 100 100"><polygon points="8,92 50,8 92,92" fill="#cc3f25" /></svg>
              <i style={{ width: 9, height: 9, borderRadius: 2, background: "#2a1840", transform: "rotate(45deg)" }} />
              <i style={{ width: 12, height: 12, borderRadius: "50%", border: "3px solid #ff8a1f", boxSizing: "border-box" }} />
            </span>
          </span>
          <nav className="footer__links" aria-label="Legal">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/delete-account">Delete account</Link>
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </nav>
        </div>
        <p className="footer__small">© {new Date().getFullYear()} Privé. Events are run by their hosts, not by Privé. <b>Privé is a product of Vixe Africa.</b></p>
      </div>
    </footer>
  );
}
