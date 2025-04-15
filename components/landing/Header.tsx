
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Health Connect</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How it Works</a>
            <div className="flex items-center gap-2">
              <SignInButton>
                <Button variant="outline" className="flex items-center gap-2">
                  <LogInIcon className="w-4 h-4" />
                  <span>Sign In</span>
                </Button>
              </SignInButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;