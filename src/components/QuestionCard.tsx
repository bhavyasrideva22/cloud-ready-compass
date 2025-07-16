import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Question } from "@/types/assessment";

interface QuestionCardProps {
  question: Question;
  answer: string | number | undefined;
  onAnswer: (answer: string | number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({ 
  question, 
  answer, 
  onAnswer, 
  questionNumber, 
  totalQuestions 
}: QuestionCardProps) => {
  const renderScaleQuestion = () => {
    if (!question.scaleMin || !question.scaleMax) return null;
    
    const scaleValues = [];
    for (let i = question.scaleMin; i <= question.scaleMax; i++) {
      scaleValues.push(i);
    }

    return (
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{question.scaleLabels?.min}</span>
          <span>{question.scaleLabels?.max}</span>
        </div>
        
        <RadioGroup 
          value={answer?.toString()} 
          onValueChange={(value) => onAnswer(parseInt(value))}
          className="flex justify-between"
        >
          {scaleValues.map((value) => (
            <div key={value} className="flex flex-col items-center space-y-2">
              <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
              <Label htmlFor={`${question.id}-${value}`} className="text-sm font-medium">
                {value}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  };

  const renderMultipleChoice = () => {
    if (!question.options) return null;

    return (
      <RadioGroup 
        value={answer?.toString()} 
        onValueChange={(value) => onAnswer(value)}
        className="space-y-3"
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value={option} id={`${question.id}-${index}`} className="mt-0.5" />
            <Label 
              htmlFor={`${question.id}-${index}`} 
              className="flex-1 cursor-pointer leading-relaxed"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    );
  };

  const renderYesNo = () => {
    return (
      <RadioGroup 
        value={answer?.toString()} 
        onValueChange={(value) => onAnswer(value)}
        className="flex gap-6 justify-center"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id={`${question.id}-yes`} />
          <Label htmlFor={`${question.id}-yes`} className="text-lg">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id={`${question.id}-no`} />
          <Label htmlFor={`${question.id}-no`} className="text-lg">No</Label>
        </div>
      </RadioGroup>
    );
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="w-24 h-2 bg-muted rounded-full">
            <div 
              className="h-2 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <CardTitle className="text-xl leading-relaxed">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {question.type === 'scale' && renderScaleQuestion()}
        {question.type === 'multiple-choice' && renderMultipleChoice()}
        {question.type === 'yes-no' && renderYesNo()}
      </CardContent>
    </Card>
  );
};