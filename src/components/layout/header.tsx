import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Resources", href: "#resources" },
    { name: "Support Groups", href: "#groups" },
    { name: "Counseling", href: "#counseling" },
    { name: "Crisis Help", href: "#crisis" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">MindWell</h1>
              <p className="text-xs text-muted-foreground">Student Mental Health Support</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning/10">
              <Phone className="h-4 w-4 mr-2" />
              Crisis Support
            </Button>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Support
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="border-warning text-warning hover:bg-warning/10">
                  <Phone className="h-4 w-4 mr-2" />
                  Crisis Support
                </Button>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;