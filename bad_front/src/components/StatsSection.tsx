export const StatsSection = () => {
  const stats = [
    { number: "9 740", label: "Participants" },
    { number: "520", label: "Speakers" },
    { number: "178", label: "Partenaires" },
    { number: "3", label: "Salles Live" },
  ];

  return (
    <section
      className="py-16 bg-background"
      aria-labelledby="stats-heading"
    >
      <h2 id="stats-heading" className="sr-only">
        Statistiques du festival
      </h2>

      <div className="container mx-auto px-4">
        <dl
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          role="list"
          aria-label="Statistiques clés du festival"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-4xl lg:text-5xl font-bold block">
                  {stat.number}
                </span>
                <span className="text-sm lg:text-base font-medium opacity-90">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
