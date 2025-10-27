import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const UserPrograms = () => {
  return (
    <div className="w-full pb-24 pt-12 relative">
      <div className="container mx-auto max-w-7xl px-6">
        {/* CTA section */}
        <div className="text-center bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent rounded-3xl p-12 border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Create your personalized mental health care plan in just minutes
          </p>
          <Link href="/generate-program">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:scale-105 transition-all px-8 py-6 text-lg font-semibold"
            >
              Create Your Care Plan
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPrograms;
