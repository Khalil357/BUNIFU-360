import Icon from "./ui/Icon";

const items = [
  { icon: "code", title: "Application Development" },
  { icon: "shield", title: "Cyber Security System" },
  { icon: "megaphone", title: "Digital Marketing & Branding" },
];

export default function IconRow() {
  return (
    <section className="iconrow">
      <div className="container iconrow__grid">
        {items.map((item) => (
          <div className="iconrow__card" key={item.title}>
            <span className="iconrow__icon">
              <Icon name={item.icon} size={28} />
            </span>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
