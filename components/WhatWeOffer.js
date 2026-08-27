import Icon from "./ui/Icon";
import SectionHeading from "./ui/SectionHeading";

const offers = [
  { icon: "pen", title: "Graphic Design" },
  { icon: "phone", title: "Mobile App Development" },
  { icon: "shield", title: "Cyber Security" },
  { icon: "megaphone", title: "Online Marketing" },
  { icon: "monitor", title: "Website Development" },
  { icon: "cloud", title: "Cloud Services" },
];

export default function WhatWeOffer() {
  return (
    <section className="offer section">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title="Taking technology forward with possibilities"
          copy="Mattis dolor nulla sociosqu dapibus morbi vivamus elit maximus pede natoque. Dapibus elementum id mauris tempor massa a est eget sollicitudin."
        />
        <div className="offer__grid">
          {offers.map((o) => (
            <div className="offer__card" key={o.title}>
              <span className="offer__icon">
                <Icon name={o.icon} size={26} />
              </span>
              <h4>{o.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
