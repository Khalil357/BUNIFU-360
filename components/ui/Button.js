export default function Button({ children, href = "#", variant = "primary" }) {
  const cls = `btn${variant === "ghost" ? " btn--ghost" : ""}`;
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
