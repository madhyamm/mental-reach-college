import { AlertTriangle, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const CrisisBanner = () => {
  return (
    <Alert className="bg-warning/10 border-warning text-warning-foreground">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="font-medium">Crisis Support: If you're experiencing a mental health emergency, reach out immediately.</span>
        <div className="flex gap-2 flex-wrap">
          <Button size="sm" variant="outline" className="bg-warning text-warning-foreground border-warning hover:bg-warning/20">
            <Phone className="h-3 w-3 mr-1" />
            988 Crisis Line
          </Button>
          <Button size="sm" variant="outline" className="bg-warning text-warning-foreground border-warning hover:bg-warning/20">
            Emergency: 911
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default CrisisBanner;