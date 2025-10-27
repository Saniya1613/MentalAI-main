import Link from "next/link";
import CornerElements from './CornerElements';
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const NoFitnessPlan = () => {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-12 text-center">
      <CornerElements />
      <div className="mb-6">
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center mb-4">
          <ArrowRightIcon className="w-10 h-10 text-primary" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-3 text-gray-900">
        No care plans yet
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Start by creating a personalized mental health care plan tailored to your specific needs and challenges
      </p>
      <Button
        size="lg"
        asChild
        className="bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl hover:scale-105 transition-all px-8 py-6 text-lg font-semibold"
      >
        <Link href="/generate-program">
          <span className="flex items-center justify-center">
            Create Your First Care Plan
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </span>
        </Link>
      </Button>
    </div>
  );
};
export default NoFitnessPlan;
