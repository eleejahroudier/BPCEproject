import { Button } from "@/components/ui/button";
import sphereGlass from "@/assets/sphere-glass.png";
import sphereBlue from "@/assets/sphere-blue.png";
import glowEffect from "@/assets/glow-effect.png";
import sphereReflection from "@/assets/sphere-reflection.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={sphereGlass}
          alt=""
          className="absolute top-20 left-10 w-64 h-auto opacity-80 animate-pulse"
        />
        <img
          src={sphereBlue}
          alt=""
          className="absolute top-32 right-20 w-48 h-auto opacity-70"
        />
        <img
          src={glowEffect}
          alt=""
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-auto opacity-50"
        />
        <img
          src={sphereReflection}
          alt=""
          className="absolute bottom-20 left-1/4 w-32 h-auto opacity-60"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          
          <div className="lg:w-1/2 relative">
            <div className="relative mb-8 lg:mb-0">
              <div className="bg-secondary rounded-full p-8 w-80 h-80 mx-auto flex items-center justify-center text-white text-center shadow-2xl">
                <div>
                  <h2 className="text-2xl font-bold mb-2">LA MÉLÉE NUMÉRIQUE</h2>
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    RÉVOLUTIONS ARTIFICIELLES
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="text-primary-foreground">FESTIVAL</span>{" "}
              <span className="text-primary-foreground">DU</span>{" "}
              <span className="text-secondary">NUMÉRIQUE</span>
              <br />
              <span className="text-primary-foreground">ET DE L'</span>
              <span className="text-secondary">INNOVATION</span>
              <br />
              <span className="text-primary-foreground">D'OCCITANIE</span>
            </h1>

            <div className="mb-6">
              <p className="text-secondary text-xl font-semibold mb-2">TOULOUSE & EN LIGNE</p>
              <p className="text-secondary text-2xl font-bold">Du 22 au 27 septembre 2025</p>
            </div>

            <p className="text-primary-foreground text-lg mb-8 max-w-lg">
              Intelligence artificielle, souveraineté, cybersécurité
              <br />
              et plus de 22 thématiques à explorer !
            </p>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                Je prends mon billet
              </Button>
              <p className="text-primary-foreground/80 text-sm">
                Gratuit, rapide, indispensable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};