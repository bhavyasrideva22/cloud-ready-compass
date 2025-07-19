import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Brain, Code, Target, TrendingUp, CheckCircle } from "lucide-react";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { AssessmentEngine } from "@/components/AssessmentEngine";

const sections = [
  { id: 0, title: "Introduction", icon: BookOpen },
  { id: 1, title: "Psychological Fit", icon: Brain },
  { id: 2, title: "Technical Aptitude", icon: Code },
  { id: 3, title: "WISCAR Analysis", icon: Target },
  { id: 4, title: "Your Results", icon: TrendingUp },
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const getCurrentSectionIndex = () => currentStep;

  const handleStartAssessment = () => {
    setCurrentStep(1);
    setProgress(((1 + 1) / sections.length) * 100);
  };

  const handleSectionComplete = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setProgress(((nextStep + 1) / sections.length) * 100);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setProgress(((prevStep + 1) / sections.length) * 100);
    }
  };

  const renderCurrentSection = () => {
    if (currentStep === 0) {
      return <AssessmentIntro onStartAssessment={handleStartAssessment} />;
    }
    if (currentStep >= 1 && currentStep <= 3) {
      return (
        <AssessmentEngine
          currentSection={currentStep}
          onSectionComplete={handleSectionComplete}
          onBack={handleBack}
        />
      );
    }
    // Results section placeholder
    if (currentStep === 4) {
      return (
        <div className="text-center py-16">
          <h2 className="text-3xl font-bold mb-4">Your Results</h2>
          <p className="text-muted-foreground">(Results UI to be implemented)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Is AWS Right for You?
              </h1>
              <p className="text-gray-600 text-sm">
                Comprehensive Career Assessment & Guidance
              </p>
            </div>
            <Badge variant="outline" className="text-sm">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
          {/* Section Navigation */}
          <div className="flex mt-4 space-x-4 overflow-x-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = currentStep === index;
              const isCompleted = currentStep > index;
              return (
                <div
                  key={section.id}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg min-w-fit ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                      : isCompleted
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {renderCurrentSection()}
      </div>
    </div>
  );
};

export default Index;
