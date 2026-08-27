import Button from "./ui/Button";

const nav = ["Home", "About", "Services", "Portfolio", "Pricing", "Contact"];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <span className="header__logo-mark">◆</span>
          Xcelliance
        </a>
        <nav className="header__nav">
          {nav.map((item) => (
            <a key={item} href="#" className="header__link">
              {item}
            </a>
          ))}
        </nav>
        <div className="header__cta">
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
