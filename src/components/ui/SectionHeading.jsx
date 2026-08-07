export default function SectionHeading({ eyebrow, title, subtext }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
        {`// ${eyebrow}`}
      </p>
      <h2 className="font-display font-bold text-3xl text-ink">{title}</h2>
      {subtext && (
        <p className="font-body text-sm text-muted mt-2">{subtext}</p>
      )}
    </div>
  );
}
