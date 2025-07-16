import { useState } from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { AssessmentTabs } from "@/components/AssessmentTabs";
import { AssessmentIntro } from "@/components/AssessmentIntro";
import { AssessmentEngine } from "@/components/AssessmentEngine";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(20);

  const handleStartAssessment = () => {
    setCurrentStep(1);
    setProgress(25);
  };

  const handleSectionComplete = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    setProgress(20 + (nextStep * 20));
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setProgress(20 + (prevStep * 20));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold">Is AWS Right for You?</h1>
              <p className="text-muted-foreground">Comprehensive Career Assessment & Guidance</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{progress}% Complete</div>
            </div>
          </div>
          
          <ProgressBar progress={progress} />
          
          <div className="mt-6">
            <AssessmentTabs currentStep={currentStep} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentStep === 0 && (
          <AssessmentIntro onStartAssessment={handleStartAssessment} />
        )}
        
        {currentStep >= 1 && currentStep <= 3 && (
          <AssessmentEngine 
            currentSection={currentStep}
            onSectionComplete={handleSectionComplete}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
