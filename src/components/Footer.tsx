// components/Footer.tsx
import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-blue-600 rounded-lg p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                EnviroCloud
              </span>
              <span className="ml-2 text-sm text-gray-400 font-medium">
                Professional
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading development agency specializing in enterprise-grade
              solutions. Trusted by Fortune 500 companies worldwide.
            </p>
            <div className="text-sm text-gray-400">
              <p>
                © 2025 EnviroCloud Professional Services. All rights reserved.
              </p>
              <p className="mt-1">
                ISO 27001 Certified | SOC 2 Type II Compliant
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Web Applications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
