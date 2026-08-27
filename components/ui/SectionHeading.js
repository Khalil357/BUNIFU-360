export default function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  return (
    <div className={`sec-head sec-head--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p className="sec-head__copy">{copy}</p>}
    </div>
  );
}
