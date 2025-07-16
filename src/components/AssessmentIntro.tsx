import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, TrendingUp, Cloud, Database, Shield, Cpu, Network, Zap } from "lucide-react";

interface AssessmentIntroProps {
  onStartAssessment: () => void;
}

export const AssessmentIntro = ({ onStartAssessment }: AssessmentIntroProps) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Your AWS Career Potential</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our comprehensive assessment to evaluate your psychological fit, 
            technical readiness, and career alignment for a future in AWS cloud computing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              25-30 minutes
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Personalized Results
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Career Guidance
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg"
            onClick={onStartAssessment}
          >
            Start Assessment →
          </Button>
        </CardContent>
      </Card>

      {/* What is AWS Section */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">What is AWS?</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 text-lg">
            AWS (Amazon Web Services) is a powerful <strong>cloud computing platform</strong> that offers 
            scalable infrastructure, databases, AI, security, DevOps, and more. It empowers organizations 
            to build modern applications and drive digital transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-600 mb-2">Cloud Platform</h4>
              <p className="text-sm text-muted-foreground">Scalable, secure, and accessible from anywhere</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-green-600 mb-2">Automation & DevOps</h4>
              <p className="text-sm text-muted-foreground">Streamline deployments and reduce manual work</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-purple-600 mb-2">Enterprise Scale</h4>
              <p className="text-sm text-muted-foreground">Used by Fortune 500 companies worldwide</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Opportunities */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Career Opportunities</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "AWS Cloud Engineer", desc: "Build and manage cloud infrastructure" },
              { title: "Solutions Architect", desc: "Design scalable cloud systems" },
              { title: "DevOps Engineer", desc: "Automate CI/CD pipelines" },
              { title: "Cloud Security Specialist", desc: "Secure AWS environments" },
              { title: "Data Engineer", desc: "Build big data pipelines" },
              { title: "Site Reliability Engineer", desc: "Ensure system uptime and performance" }
            ].map((role) => (
              <div key={role.title} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-semibold mb-2">{role.title}</h4>
                <p className="text-sm text-muted-foreground">{role.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ideal Traits & Skills */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">Ideal Traits & Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Psychological Traits</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Strong analytical thinking</li>
                <li>• Systems-oriented mindset</li>
                <li>• Logical problem-solving</li>
                <li>• Interest in automation</li>
                <li>• Curiosity about technology trends</li>
                <li>• Attention to detail</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Technical Prerequisites</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Basic Linux/CLI experience</li>
                <li>• Understanding of networking</li>
                <li>• Scripting knowledge (Python/Bash)</li>
                <li>• Comfort with cloud concepts</li>
                <li>• Interest in DevOps practices</li>
                <li>• Security awareness</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What You'll Discover */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6">What You'll Discover</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Assessment Modules:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Psychological Fit Evaluation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Technical Aptitude Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>WISCAR Framework Analysis</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Your Results Include:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personalized fit score (0-100)</li>
                <li>• Detailed trait analysis</li>
                <li>• Technical readiness assessment</li>
                <li>• Career pathway recommendations</li>
                <li>• Next steps and learning resources</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};