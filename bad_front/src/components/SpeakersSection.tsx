export const SpeakersSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-secondary">Ils seront</span>{" "}
            <span className="text-primary">présents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les experts qui marqueront l'édition 2025 avec leurs visions 
            sur l'innovation et les technologies de demain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <h3 className="font-semibold text-lg text-center text-foreground mb-2">
                Expert #{i}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Innovation & IA
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};