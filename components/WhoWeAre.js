import Button from "./ui/Button";
import Placeholder from "./ui/Placeholder";

export default function WhoWeAre() {
  return (
    <section className="who section">
      <div className="container who__inner">
        <div className="who__media">
          <Placeholder label="Team photo" ratio="4 / 3" />
          <div className="who__badge">Experienced since 2005</div>
        </div>
        <div className="who__content">
          <span className="eyebrow">Who We Are</span>
          <h2>Delivering IT solutions that enable you to work smarter</h2>
          <p>
            Velit ante praesent blandit imperdiet massa scelerisque volutpat.
            Cubilia elit turpis habitasse hac molestie. Quisque dui himenaeos ut
            interdum hac viverra. Tortor ante hac nam curae finibus sed.
          </p>
          <blockquote className="who__quote">
            The features are up-to-date and have helped our clients streamline
            their workflow significantly
          </blockquote>
          <Button>More About Us</Button>
        </div>
      </div>
    </section>
  );
}
