export const SpeakersSection = () => {
  return (
    <section
      className="py-20 bg-muted/30"
      aria-labelledby="speakers-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2
            id="speakers-heading"
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="text-secondary">Ils seront</span>{" "}
            <span className="text-primary">présents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les experts qui marqueront l&apos;édition 2025
          </p>
        </header>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          aria-label="Liste des intervenants"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <li
              key={i}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div
                className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"
                aria-hidden="true"
              ></div>

              <h3 className="font-semibold text-lg text-center text-foreground mb-2">
                Expert {i}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Innovation &amp; IA
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
