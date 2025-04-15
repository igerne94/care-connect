import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { console } from "inspector";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  console.log("User ID:", userId);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Health Connect</span>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <div className="flex items-center gap-2">
                {userId ?
                  <SignOutButton>
                     <Button variant="outline" className="flex items-center gap-2">
                      <LogOutIcon className="w-4 h-4" />
                      <span>Log out</span>
                    </Button>
                  </SignOutButton>
                  : <></>
                }
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
              <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Healthcare simplified for</span>
                <span className="block text-blue-600">professionals and patients</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Connect with healthcare professionals, manage appointments, and access your medical records - all in one secure platform.
              </p>
            </div>
            <div className="flex gap-4">
              {userId ? <>(Logged in)</> :
                <>
                  <Link href={"/sign-up"}><Button className="md:text-base font-light">Create a new account</Button></Link>
                  <Link href={"/sign-in"}><Button className="md:text-base underline hover:text-blue-600">Log in to account</Button></Link>
                </>
              }
            </div>
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}