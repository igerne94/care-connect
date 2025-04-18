
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    "Secure patient-doctor communication",
    "Easy appointment scheduling",
    "Digital health records access",
    "Video consultations",
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features designed for modern healthcare
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to provide the best care for your patients
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;