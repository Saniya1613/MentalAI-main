"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { BrainIcon, HomeIcon, UserIcon, HeartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-xl group-hover:shadow-lg transition-shadow">
            <HeartIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            MindCare AI
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-6">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <HomeIcon size={18} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <BrainIcon size={18} />
                <span>Create Plan</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                <UserIcon size={18} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                className="ml-2 bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:scale-105 transition-all">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
