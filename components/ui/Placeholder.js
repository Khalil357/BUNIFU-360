export default function Placeholder({ label, ratio = "16 / 9", className = "" }) {
  return (
    <div
      className={`ph ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <span className="ph__label">{label}</span>
    </div>
  );
}
