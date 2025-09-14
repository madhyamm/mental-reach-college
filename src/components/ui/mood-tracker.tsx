import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Meh, Frown, Heart, Brain, Zap } from "lucide-react";

const moods = [
  { id: 'great', icon: Smile, label: 'Great', color: 'text-secondary' },
  { id: 'good', icon: Heart, label: 'Good', color: 'text-primary' },
  { id: 'okay', icon: Meh, label: 'Okay', color: 'text-accent' },
  { id: 'low', icon: Brain, label: 'Low', color: 'text-muted-foreground' },
  { id: 'struggling', icon: Frown, label: 'Struggling', color: 'text-destructive' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    // Here you would typically save to database
  };

  return (
    <Card className="shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Quick Mood Check-in
        </CardTitle>
        <CardDescription>
          How are you feeling today? Your input helps us provide better support.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-3 mb-4">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.id}
                onClick={() => handleMoodSelect(mood.id)}
                className={`flex flex-col items-center p-3 rounded-lg border transition-all duration-200 hover:shadow-soft ${
                  selectedMood === mood.id 
                    ? 'bg-primary-soft border-primary shadow-medium' 
                    : 'bg-card hover:bg-muted/50 border-border'
                }`}
              >
                <Icon className={`h-8 w-8 mb-2 ${mood.color}`} />
                <span className="text-sm font-medium">{mood.label}</span>
              </button>
            );
          })}
        </div>
        {selectedMood && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Thank you for sharing. Would you like personalized resources for today?
            </p>
            <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              Get Today's Resources
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;