export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  size = "default",
  className = "",
}) {
  const sizeClasses = size === "sm" ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`border border-accent text-accent hover:bg-accent-dark disabled:opacity-60 hover:text-white font-body font-medium rounded-md transition-colors cursor-pointer ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
}
