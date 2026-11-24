
import { siteData } from "@/data/siteData";

interface CallButtonProps {
  label?: string;
  className?: string;
}

export default function CallButton({
  label = "Llamar ahora",
  className = "",
}: CallButtonProps) {
  const phone = siteData.contact.phone;

  return (
    <a
      href={phone ? `tel:+${phone}` : undefined}
      aria-label="Llamar a la doctora"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-red-700 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.46.56 3.58a1 1 0 0 1-.25 1.01l-2.19 2.2Z" />
      </svg>

      {label}
    </a>
  );
}
