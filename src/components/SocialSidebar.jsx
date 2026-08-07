import SocialLinks from "./ui/SocialLinks";

export default function SocialSidebar() {
  return (
    <div
      className="hidden xl:flex fixed bottom-0 z-40 flex-col items-center"
      style={{ left: "max(1.5rem, calc((100vw - 72rem) / 2 - 3.5rem))" }}
    >
      <SocialLinks direction="col" iconSize={20} />
      <div className="w-px h-24 bg-border mt-6" aria-hidden="true" />
    </div>
  );
}
