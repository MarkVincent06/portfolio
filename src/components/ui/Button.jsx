export default function Button({ name, cta, className = "" }) {
  return (
    <div className={`max-w-6xl ${className}`}>
      <a
        href={cta}
        target="_blank"
        className="border border-accent text-accent hover:bg-accent-dark hover:text-white font-body text-sm font-medium rounded-md px-5 py-3 transition-colors"
      >
        {name}
      </a>
    </div>
  );
}
