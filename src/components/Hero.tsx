// components/Hero.tsx
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 500+ Companies
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise-Grade{" "}
              <span className="text-blue-600">Software Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with custom software solutions built by
              our expert team. From concept to deployment, we deliver scalable,
              secure, and innovative applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-lg text-gray-700 font-semibold text-lg transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Professional development team"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    99.9% Uptime
                  </div>
                  <div className="text-sm text-gray-500">
                    Guaranteed reliability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">72hrs</div>
              <div className="text-gray-600 font-medium">
                Lightspeed Project Turnaround
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
