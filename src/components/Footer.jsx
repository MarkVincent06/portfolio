import { FaEnvelope } from "react-icons/fa6";
import Container from "./ui/Container";
import SocialLinks from "./ui/SocialLinks";
import { email } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8">
      <Container>
        <div className="xl:hidden flex justify-center items-center gap-5 mb-6">
          <SocialLinks direction="row" iconSize={22} />
          <a
            href={`mailto:${email}`}
            aria-label="Email me"
            className="text-ink hover:text-accent transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
        <p className="text-center font-mono text-xs text-muted">
          Designed &amp; Built by Mark Vincent Cleofe
        </p>
      </Container>
    </footer>
  );
}
