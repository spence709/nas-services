// components/ServicesGrid.tsx
import { ArrowRight, CheckCircle } from "lucide-react";
import { ServiceProps } from "@/types";

type Props = {
  services: ServiceProps[];
  onSelect: (service: ServiceProps) => void;
};

export default function ServicesGrid({ services, onSelect }: Props) {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
              onClick={() => onSelect(service)}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <div className="text-blue-600">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="text-lg font-bold text-blue-600 mb-4">
                {service.price}
              </div>
              <div className="mt-6">
                <div className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
