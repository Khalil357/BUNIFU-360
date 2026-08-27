import Placeholder from "./ui/Placeholder";
import SectionHeading from "./ui/SectionHeading";

const projects = [
  "Product Design",
  "Web Development",
  "Web Development",
  "Online Marketing",
  "Online Marketing",
  "Digital Branding",
  "Cyber Security",
];

export default function Projects() {
  return (
    <section className="projects section">
      <div className="container">
        <div className="projects__head">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Enhancing experience with enhanced technology"
            align="left"
          />
          <p className="projects__copy">
            Ac nec mattis fames convallis curae. Convallis sapien efficitur sit
            primis nascetur lacinia quisque amet. Dignissim morbi rutrum dis sem
            consequat senectus inceptos donec. Interdum non purus aptent
            volutpat justo aenean fringilla sollicitudin.
          </p>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div className="projects__card" key={`${p}-${i}`}>
              <Placeholder label={p} ratio="1 / 1" />
              <div className="projects__tag">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
