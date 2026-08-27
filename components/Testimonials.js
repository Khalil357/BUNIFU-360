import SectionHeading from "./ui/SectionHeading";
import Placeholder from "./ui/Placeholder";

const items = [
  {
    quote:
      "The features are up-to-date and have helped our clients streamline their workflow significantly.",
    name: "Client Name",
    role: "Company",
  },
  {
    quote:
      "Pede cursus suscipit urna dolor augue morbi porta vel fusce tempor maximus.",
    name: "Client Name",
    role: "Company",
  },
  {
    quote:
      "Consequat dolor condimentum himenaeos nulla massa nec maecenas rutrum turpis molestie.",
    name: "Client Name",
    role: "Company",
  },
];

export default function Testimonials() {
  return (
    <section className="testi section section--light">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Reviews from our awesome clients"
        />
        <div className="testi__grid">
          {items.map((t, i) => (
            <div className="testi__card" key={i}>
              <p className="testi__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi__author">
                <span className="testi__avatar">
                  <Placeholder label="Avatar" ratio="1 / 1" />
                </span>
                <div>
                  <h5>{t.name}</h5>
                  <span className="testi__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
