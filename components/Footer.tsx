import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <span className="wordmark" style={{ fontSize: 26 }}>Privé</span>
          <nav className="footer__links" aria-label="Legal">
            <Link href="/terms">Terms of Use</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/delete-account">Delete account</Link>
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </nav>
        </div>
        <p className="footer__small">© {new Date().getFullYear()} Privé. Events are run by their hosts, not by Privé.</p>
      </div>
    </footer>
  );
}
