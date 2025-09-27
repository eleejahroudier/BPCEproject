import { Button } from "@/components/ui/button";

export const RevolutionsSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-r from-background via-muted/20 to-background"
      aria-labelledby="revolutions-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            id="revolutions-title"
            className="text-4xl lg:text-5xl font-bold mb-8 text-center"
          >
            <span className="text-secondary">Révolutions</span>{" "}
            <span className="text-primary">artificielles</span>
          </h2>

          <div className="prose prose-lg max-w-none text-center mb-12">
            <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-6">
              L&apos;intelligence artificielle n&apos;est plus un futur lointain.
              Elle est partout. Elle redéfinit nos métiers, nos décisions, nos
              rapports humains, notre quotidien.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ajoutez à cela la question brûlante de la souveraineté numérique,
              la pression géopolitique, les défis du cloud, de l&apos;inclusion,
              de la sécurité… et vous obtenez un cocktail aussi explosif
              qu&apos;essentiel.
            </p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
              aria-label="Découvrir le programme complet du festival"
            >
              Découvrir le programme
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
