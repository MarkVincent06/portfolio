import Container from "./ui/Container";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="py-8">
      <Container>
        <div className="xl:hidden flex justify-center mb-6">
          <SocialLinks direction="row" iconSize={22} />
        </div>
        <p className="text-center font-mono text-xs text-muted">
          Designed &amp; Built by Mark Vincent Cleofe
        </p>
      </Container>
    </footer>
  );
}
