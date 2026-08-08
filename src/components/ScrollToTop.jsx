import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`xl:hidden fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-accent text-bg shadow-[0_8px_20px_rgba(18,20,26,0.15)] hover:bg-accent-dark transition-all duration-200 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp size={16} />
    </button>
  );
}
