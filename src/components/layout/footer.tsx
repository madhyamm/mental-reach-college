import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Mental Health Resources", href: "#resources" },
    { name: "Crisis Support", href: "#crisis" },
    { name: "Support Groups", href: "#groups" },
    { name: "Counseling Services", href: "#counseling" },
  ];

  const supportLinks = [
    { name: "About Us", href: "#about" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Contact", href: "#contact" },
  ];

  const crisisResources = [
    { name: "988 Suicide & Crisis Lifeline", number: "988" },
    { name: "Crisis Text Line", number: "Text HOME to 741741" },
    { name: "Emergency Services", number: "911" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">MindWell</h3>
                <p className="text-sm text-muted-foreground">Student Mental Health</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing comprehensive, confidential mental health support for students in higher education.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Available nationwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Access</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Crisis Resources</h4>
            <div className="space-y-3">
              {crisisResources.map((resource) => (
                <div key={resource.name} className="text-sm">
                  <p className="font-medium text-foreground">{resource.name}</p>
                  <p className="text-warning font-mono">{resource.number}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
              <p className="text-xs text-warning-foreground font-medium">
                If you're having thoughts of suicide or self-harm, please reach out immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MindWell. All rights reserved. HIPAA compliant and confidential.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:support@mindwell.edu" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                support@mindwell.edu
              </a>
              <a 
                href="tel:988" 
                className="flex items-center gap-2 text-sm text-warning hover:text-warning/80 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                Crisis: 988
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;