
// import { SignInButton } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// import { LogInIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image alt="logo" width={40} height={40} src={"logo.svg"} />
            <span className="text-2xl font-bold text-blue-600"><Link href={"/"}>Health Connect</Link></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;