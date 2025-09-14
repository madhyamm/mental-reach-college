import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-primary-soft px-4 py-2 rounded-full">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium text-sm">Mental Health Support</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Your Journey to
          <span className="bg-gradient-hero bg-clip-text text-transparent"> Mental Wellness </span>
          Starts Here
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional, confidential mental health support designed specifically for students. 
          Access resources, track your wellness, and connect with care when you need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-medium px-8 py-3 text-lg"
          >
            Start Your Wellness Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary-soft px-8 py-3 text-lg"
          >
            Crisis Support
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            <span className="font-medium">Licensed Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-accent" />
            <span className="font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;