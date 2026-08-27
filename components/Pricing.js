import Button from "./ui/Button";
import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

const plans = [
  { name: "Basic Plan", price: "79" },
  { name: "Business Plan", price: "149" },
  { name: "Enterprise Plan", price: "299" },
];

const features = [
  "Etiam ultrices aliquet consequat",
  "Efficitur cubilia tristique lacus lorem",
  "Sollicitudin urna diam nec proin",
  "Viverra erat eros quis fames suscipit",
  "Fames facilisis sodales gravida",
];

export default function Pricing() {
  return (
    <section className="pricing section section--light">
      <div className="container">
        <SectionHeading
          eyebrow="Choose Price Package"
          title="Inspiring Digital Transformation, Empowering Growth"
        />
        <div className="pricing__grid">
          {plans.map((plan) => (
            <div className="pricing__card" key={plan.name}>
              <h4 className="pricing__name">{plan.name}</h4>
              <div className="pricing__price">
                <span className="pricing__currency">$</span>
                <span className="pricing__value">{plan.price}</span>
                <span className="pricing__period">/ Monthly</span>
              </div>
              <ul className="pricing__list">
                {features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button>Get Started</Button>
            </div>
          ))}
        </div>
        <div className="pricing__help">
          <h3>Need more help or consultations?</h3>
          <Button variant="ghost">Contact Our Sales</Button>
        </div>
      </div>
    </section>
  );
}
