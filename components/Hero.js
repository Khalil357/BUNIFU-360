import Button from "./ui/Button";
import Placeholder from "./ui/Placeholder";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">A source of innovation and excellence</h1>
          <p className="hero__copy">
            Pede mus ac auctor facilisis sem aliquam. Sem auctor fames enim
            scelerisque himenaeos in velit.
          </p>
          <div className="hero__actions">
            <Button>Discover More</Button>
          </div>
        </div>
        <div className="hero__media">
          <Placeholder label="Lottie animation" ratio="1 / 1" />
        </div>
      </div>
    </section>
  );
}
