export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`border border-accent text-accent hover:bg-accent-dark disabled:opacity-60 hover:text-white font-body text-sm font-medium rounded-md px-6 py-3 transition-colors cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
