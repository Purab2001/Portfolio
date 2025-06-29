export default function EducationSection() {
  return (
    <section className="py-16 px-4" id="education">
      <div className="container mx-auto max-w-3xl bg-card rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">Education</h2>
        <div>
          <h3 className="text-lg font-semibold">Bachelor’s in English Honours</h3>
          <p className="text-muted-foreground">
            Mohammadpur Kendriya College, National University
          </p>
          <p className="text-sm">Session: 2022–2026</p>
          <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
            Currently Pursuing
          </span>
        </div>
      </div>
    </section>
  );
}