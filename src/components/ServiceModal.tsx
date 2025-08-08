// components/ServiceModal.tsx
"use client";

import { X, CheckCircle } from "lucide-react";
import { ServiceProps } from "@/types";

type Props = {
  service: ServiceProps | null;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: Props) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                <div className="text-blue-600">{service.icon}</div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-lg text-blue-600 font-semibold">
                  {service.price}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600  cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-lg text-gray-600 mb-8">{service.description}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {"What's Included"}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg text-gray-700 font-semibold transition-colors cursor-pointer"
              onClick={() =>
                window.open(
                  "https://calendar.app.google/ZwVZLUTdUbKGs3KU8",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
