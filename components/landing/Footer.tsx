
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Solutions</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">For Doctors</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">For Patients</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">For Clinics</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Support</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Help Center</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">FAQ</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Legal</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Security</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Company</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">About</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Blog</a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 block">Careers</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">&copy; 2025 HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;