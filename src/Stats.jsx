export default function Stats({ text }) {
  const wordCount = text.split(/\s/).filter((word) => word !== "").length;
  const charCount = text.length;

  return (
    <section className="stats">
      <Stat label="Words" number={wordCount} />
      <Stat label="Characters" number={charCount} />
      <Stat label="Instagram" number={280 - charCount} />
      <Stat label="Facebook" number={2200 - charCount} />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}>
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}