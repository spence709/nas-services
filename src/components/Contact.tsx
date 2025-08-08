// components/Contact.tsx
"use client";

import { useState, FormEvent } from "react";
import { Mail, Globe } from "lucide-react";
import { toast } from "react-toastify";
import { ContactFormData } from "@/types";

export default function Contact() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [projectType, setProjectType] = useState<string>("Custom Application");
  const [projectDetails, setProjectDetails] = useState<string>("");

  const validateForm = (): boolean => {
    if (!firstName || !lastName || !email || !company || !projectDetails) {
      toast.error("Please fill in all fields.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formData: ContactFormData = {
        firstName,
        lastName,
        email,
        company,
        projectDetails,
        projectType,
      };

      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setProjectType("Custom Application");
        setProjectDetails("");
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Failed to send email. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {"Let's Build Something Amazing Together"}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Our expert team is here to turn
            your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-300">contact@envirocloud.net</p>
                    <p className="text-sm text-gray-400">
                      {"We'll respond within 24 hours"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Office
                    </h4>
                    <p className="text-gray-300">New York, NY</p>
                    <p className="text-sm text-gray-400">
                      Available for in-person meetings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Free Consultation
              </h3>
              <p className="text-blue-100 mb-6">
                Schedule a 30-minute strategy session to discuss your project
                requirements and get expert recommendations.
              </p>
              <button
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/ZwVZLUTdUbKGs3KU8",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Book Free Consultation
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Start Your Project
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Custom Application</option>
                  <option>Website Development</option>
                  <option>Software Platform</option>
                  <option>Dashboard/Analytics</option>
                  <option>Web3 Integration</option>
                  <option>AI/ML Solution</option>
                  <option>Lead Generation System</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements, timeline, and budget..."
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg text-white font-semibold text-lg transition-colors  cursor-pointer">
                Get Project Quote
              </button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
