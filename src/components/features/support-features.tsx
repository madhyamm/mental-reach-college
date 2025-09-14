import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BookOpen, 
  MessageCircle, 
  Calendar, 
  Activity, 
  Users,
  Headphones,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Mindfulness & Meditation",
    description: "Guided meditation sessions, breathing exercises, and mindfulness practices to help manage stress and anxiety.",
    color: "text-primary",
    bgColor: "bg-primary-soft",
    buttonText: "Start Session"
  },
  {
    icon: Activity,
    title: "Mood & Wellness Tracking",
    description: "Track your daily mood, energy levels, and wellness patterns to better understand your mental health journey.",
    color: "text-secondary",
    bgColor: "bg-secondary-soft",
    buttonText: "Track Mood"
  },
  {
    icon: BookOpen,
    title: "Study Stress Management",
    description: "Specialized resources for academic pressure, exam anxiety, time management, and healthy study habits.",
    color: "text-accent",
    bgColor: "bg-accent-soft",
    buttonText: "Get Resources"
  },
  {
    icon: MessageCircle,
    title: "Anonymous Support Chat",
    description: "Connect with peer support groups or professional counselors in a safe, anonymous environment.",
    color: "text-primary",
    bgColor: "bg-primary-soft",
    buttonText: "Join Chat"
  },
  {
    icon: Calendar,
    title: "Counseling Appointments",
    description: "Schedule one-on-one sessions with licensed mental health professionals who understand student life.",
    color: "text-secondary",
    bgColor: "bg-secondary-soft",
    buttonText: "Book Session"
  },
  {
    icon: FileText,
    title: "Mental Health Library",
    description: "Access articles, videos, and guides on depression, anxiety, stress, relationships, and personal growth.",
    color: "text-accent",
    bgColor: "bg-accent-soft",
    buttonText: "Explore Library"
  },
  {
    icon: Headphones,
    title: "Crisis Support",
    description: "Immediate access to crisis hotlines, emergency resources, and urgent mental health support when needed.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    buttonText: "Get Help Now"
  },
  {
    icon: Users,
    title: "Peer Support Groups",
    description: "Join student-led support groups focused on specific challenges like social anxiety, academic stress, or life transitions.",
    color: "text-primary",
    bgColor: "bg-primary-soft",
    buttonText: "Find Groups"
  }
];

const SupportFeatures = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access a full range of mental health resources designed specifically for the unique challenges of student life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-medium transition-all duration-300 border-0 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary-soft hover:border-primary hover:text-primary"
                  >
                    {feature.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportFeatures;