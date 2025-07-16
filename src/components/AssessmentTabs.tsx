import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Cog, Target, TrendingUp } from "lucide-react";

interface AssessmentTabsProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const tabs = [
  { id: 0, label: "Introduction", icon: BookOpen },
  { id: 1, label: "Psychological Fit", icon: Brain },
  { id: 2, label: "Technical Aptitude", icon: Cog },
  { id: 3, label: "WISCAR Analysis", icon: Target },
  { id: 4, label: "Your Results", icon: TrendingUp },
];

export const AssessmentTabs = ({ currentStep, onStepClick }: AssessmentTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentStep === tab.id;
        const isCompleted = currentStep > tab.id;
        
        return (
          <Button
            key={tab.id}
            variant={isActive ? "default" : "outline"}
            size="sm"
            className={`gap-2 ${
              isCompleted ? "bg-primary/10 text-primary border-primary/20" : ""
            }`}
            onClick={() => onStepClick?.(tab.id)}
            disabled={!onStepClick || tab.id > currentStep}
          >
            <Icon className="w-4 h-4" />
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};