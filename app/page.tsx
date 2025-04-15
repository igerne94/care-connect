import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}