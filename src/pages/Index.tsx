import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/features/hero-section";
import SupportFeatures from "@/components/features/support-features";
import CrisisBanner from "@/components/ui/crisis-banner";
import MoodTracker from "@/components/ui/mood-tracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Crisis Banner - Always visible */}
      <div className="container mx-auto px-6 pt-4">
        <CrisisBanner />
      </div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mood Tracker Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-2xl">
            <MoodTracker />
          </div>
        </section>
        
        {/* Support Features */}
        <SupportFeatures />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
