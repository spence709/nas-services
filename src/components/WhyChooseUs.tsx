// components/WhyChooseUs.tsx
import Image from "next/image";
import { Award, Shield, Clock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Professional development team collaboration"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  ISO 27001
                </div>
                <div className="text-sm text-gray-500">Certified Security</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Industry Leaders Choose EnviroCloud
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical expertise with business acumen to deliver
              solutions that drive measurable results for your organization.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Certified Excellence
                  </h3>
                  <p className="text-gray-600">
                    Our team holds industry certifications and follows
                    enterprise-grade development practices
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Security First
                  </h3>
                  <p className="text-gray-600">
                    Bank-level security protocols and compliance with
                    international standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-600">
                    Proven track record of delivering projects on schedule and
                    within budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
