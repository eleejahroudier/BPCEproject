export const StatsSection = () => {
  const stats = [
    { number: "9 740", label: "Participants" },
    { number: "520", label: "Speakers" },
    { number: "178", label: "Partenaires" },
    { number: "3", label: "Salles Live" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};