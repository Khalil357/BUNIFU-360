import Placeholder from "./ui/Placeholder";

export default function Transform() {
  return (
    <section className="transform section section--light">
      <div className="container transform__inner">
        <div className="transform__head">
          <span className="eyebrow">We&apos;re Tech Company</span>
          <h2>Transforming Challenges into Technological Triumphs</h2>
          <p>
            Adipiscing ultrices laoreet letius massa venenatis. Consequat dolor
            condimentum himenaeos nulla massa nec maecenas rutrum turpis
            molestie. In scelerisque ut aptent.
          </p>
        </div>
        <div className="transform__carousel">
          <Placeholder label="Image carousel" ratio="16 / 7" />
        </div>
      </div>
    </section>
  );
}
