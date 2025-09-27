import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import sphereGlass from "@/assets/sphere-glass.png";
import sphereBlue from "@/assets/sphere-blue.png";
import glowEffect from "@/assets/glow-effect.png";
import sphereReflection from "@/assets/sphere-reflection.png";

const HorribleDirtyIndex = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Au lieu d'utiliser l'array proprement, on fait du hardcoding partout
  const menuItems = [
    "Partenaires",
    "Programme", 
    "Intervenants",
    "Temps Forts",
    "Infos pratiques",
    "Billetterie"
  ];

  // On garde les stats mais on les utilisera mal
  const stats = [
    { number: "9 740", label: "Participants" },
    { number: "520", label: "Speakers" },
    { number: "178", label: "Partenaires" },
    { number: "3", label: "Salles Live" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header avec une structure dégeulasse */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              {/* Logo avec des p au lieu d'un titre propre */}
              <div className="text-2xl font-bold">
                <p className="text-secondary inline">LA MÊLÉE</p>{" "}
                <p className="text-primary inline">NUMÉRIQUE</p>
              </div>
            </div>

            {/* Menu hardcodé au lieu d'utiliser la map */}
            <div className="hidden lg:flex items-center space-x-8">
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Partenaires</p>
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Programme</p>
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Intervenants</p>
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Temps Forts</p>
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Infos pratiques</p>
              <p className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Billetterie</p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  EN
                </Button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md">
              {/* Menu mobile hardcodé aussi */}
              <div className="py-4 space-y-2">
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Partenaires</p>
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Programme</p>
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Intervenants</p>
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Temps Forts</p>
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Infos pratiques</p>
                <p className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">Billetterie</p>
                <div className="px-4 py-2">
                  <Button variant="outline" size="sm">
                    EN
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero section avec les vraies images mais structure dégeulasse */}
      <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
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
                    {/* Titre avec p au lieu de h2 */}
                    <p className="text-2xl font-bold mb-2">LA MÊLÉE NUMÉRIQUE</p>
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      RÉVOLUTIONS ARTIFICIELLES
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
              {/* Titre principal avec des p au lieu de h1 */}
              <div className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                <p className="text-primary-foreground inline">FESTIVAL</p>{" "}
                <p className="text-primary-foreground inline">DU</p>{" "}
                <p className="text-secondary inline">NUMÉRIQUE</p>
                <br />
                <p className="text-primary-foreground inline">ET DE L'</p>
                <p className="text-secondary inline">INNOVATION</p>
                <br />
                <p className="text-primary-foreground inline">D'OCCITANIE</p>
              </div>

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
      </div>

      {/* Section stats hardcodée au lieu d'utiliser la boucle */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl lg:text-5xl font-bold mb-2">9 740</p>
              <p className="text-sm lg:text-base font-medium opacity-90">Participants</p>
            </div>
            <div className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl lg:text-5xl font-bold mb-2">520</p>
              <p className="text-sm lg:text-base font-medium opacity-90">Speakers</p>
            </div>
            <div className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl lg:text-5xl font-bold mb-2">178</p>
              <p className="text-sm lg:text-base font-medium opacity-90">Partenaires</p>
            </div>
            <div className="bg-gradient-card text-white rounded-3xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl lg:text-5xl font-bold mb-2">3</p>
              <p className="text-sm lg:text-base font-medium opacity-90">Salles Live</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section révolutions avec des p au lieu de h2 */}
      <div className="py-20 bg-gradient-to-r from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              <span className="text-secondary">Révolutions</span>{" "}
              <span className="text-primary">artificielles</span>
            </p>
            
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-6">
                L'intelligence artificielle n'est plus un futur lointain. Elle est partout. 
                Elle redéfinit nos métiers, nos décisions, nos rapports humains, notre quotidien.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ajoutez à cela la question brûlante de la souveraineté numérique, la pression 
                géopolitique, les défis du cloud, de l'inclusion, de la sécurité… et vous obtenez 
                un cocktail aussi explosif qu'essentiel.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
              >
                Découvrir le programme
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section speakers hardcodée */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-secondary">Ils seront</span>{" "}
              <span className="text-primary">présents</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les experts qui marqueront l'édition 2025 avec leurs visions 
              sur l'innovation et les technologies de demain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #1</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #2</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #3</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #4</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #5</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-gradient-card rounded-full mb-4 mx-auto"></div>
              <p className="font-semibold text-lg text-center text-foreground mb-2">Expert #6</p>
              <p className="text-sm text-muted-foreground text-center">Innovation & IA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorribleDirtyIndex;
