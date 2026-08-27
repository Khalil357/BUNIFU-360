import Icon from "./ui/Icon";
import Placeholder from "./ui/Placeholder";

const features = [
  { icon: "lock", title: "Smart & Secure System", desc: "Pede cursus suscipit urna dolor augue morbi porta vel fusce. Tempor maximus letius nascetur auctor sed venenatis." },
  { icon: "users", title: "Professional Team", desc: "Pede cursus suscipit urna dolor augue morbi porta vel fusce. Tempor maximus letius nascetur auctor sed venenatis." },
  { icon: "award", title: "Certified Expert", desc: "Pede cursus suscipit urna dolor augue morbi porta vel fusce. Tempor maximus letius nascetur auctor sed venenatis." },
];

const bars = [
  { label: "Cyber Security", pct: 92 },
  { label: "IT Consulting", pct: 86 },
];

export default function WhyChooseUs() {
  return (
    <section className="why section">
      <div className="container why__inner">
        <div className="why__content">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Let us change the way you think about technology</h2>
          <div className="why__features">
            {features.map((f) => (
              <div className="why__feature" key={f.title}>
                <span className="why__icon">
                  <Icon name={f.icon} size={22} />
                </span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why__media">
          <Placeholder label="Why choose us photo" ratio="4 / 5" />
          <div className="why__panel">
            <h4>Building Bridges with Innovative Technology</h4>
            <p>Tempus nisl adipiscing neque cras lectus si dignissim litora tellus.</p>
            {bars.map((b) => (
              <div className="why__bar" key={b.label}>
                <div className="why__bar-head">
                  <span>{b.label}</span>
                  <span>{b.pct}%</span>
                </div>
                <div className="why__bar-track">
                  <span className="why__bar-fill" style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
