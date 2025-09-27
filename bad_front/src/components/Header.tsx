import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Partenaires",
    "Programme", 
    "Intervenants",
    "Temps Forts",
    "Infos pratiques",
    "Billetterie"
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">
              <span className="text-secondary">LA MÊLÉE</span>{" "}
              <span className="text-primary">NUMÉRIQUE</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navigation principale">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    aria-current={item === "Accueil" ? "page" : undefined}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" aria-label="Changer la langue en anglais">
                EN
              </Button>
            </div>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden border-t border-border bg-white/95 backdrop-blur-md"
            aria-label="Navigation mobile"
          >
            <ul className="py-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    aria-current={item === "Accueil" ? "page" : undefined}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="px-4 py-2">
                <Button variant="outline" size="sm" aria-label="Changer la langue en anglais">
                  EN
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};