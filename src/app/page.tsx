import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UserPrograms";
import { ArrowRightIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 flex-grow">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-200 rounded-full">
                <span className="text-sm font-semibold text-primary">AI Mental Health Companion</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <div className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Transform Your Mind
                </div>
                <div className="pt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  With Compassionate AI
                </div>
              </h1>

              <p className="text-xl text-gray-600 max-w-xl">
                Get personalized mental health care plans and emotional support strategies tailored to your needs, challenges, and goals through an empathetic AI conversation.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Personalized Care Plans",
                  "Emotional Support Strategies",
                  "Progress Tracking",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:scale-105 transition-all px-8 py-6 text-lg font-semibold"
                >
                  <Link href={"/generate-program"} className="flex items-center">
                    Start Your Journey
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">3min</div>
                  <div className="text-sm text-gray-600">Generation Time</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-gray-600">Personalized</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative lg:ml-8">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative gradient circles */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
                
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/hero-ai3.png"
                    alt="AI Mental Health Companion"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg animate-float">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Care Plan Ready</div>
                        <div className="text-xs text-gray-600">Tailored to your needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserPrograms />
    </div>
  );
};
export default HomePage;
