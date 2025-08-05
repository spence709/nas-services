import { useState } from "react";
import {
  Code,
  Globe,
  Database,
  BarChart,
  Zap,
  Star,
  Mail,
  ArrowRight,
  Menu,
  X,
  Users,
  Award,
  Phone,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Apps",
      description: "Native and web applications tailored to your needs",
      features: [
        "iOS & Android Apps",
        "Cross-platform Development",
        "API Integration",
        "App Store Deployment",
      ],
      price: "Starting at $15,000",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Custom Websites",
      description: "Responsive, modern websites that convert visitors",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "CMS Integration",
        "Performance Optimization",
      ],
      price: "Starting at $5,000",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Software Platforms",
      description: "Scalable platforms with robust architecture",
      features: [
        "Cloud Infrastructure",
        "Microservices",
        "Database Design",
        "Auto-scaling",
      ],
      price: "Starting at $25,000",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Dashboards",
      description: "Data visualization and analytics dashboards",
      features: [
        "Real-time Analytics",
        "Custom Charts",
        "Data Integration",
        "Export Features",
      ],
      price: "Starting at $8,000",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Web3 Integration",
      description: "Blockchain and cryptocurrency solutions",
      features: [
        "Smart Contracts",
        "NFT Platforms",
        "DeFi Solutions",
        "Wallet Integration",
      ],
      price: "Starting at $20,000",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Generative AI",
      description: "AI-powered automation and content generation",
      features: [
        "Custom AI Models",
        "Chatbot Development",
        "Content Generation",
        "ML Integration",
      ],
      price: "Starting at $12,000",
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Lead Generation",
      description: "Systems to capture and nurture prospects",
      features: [
        "Landing Pages",
        "CRM Integration",
        "Email Automation",
        "Analytics Tracking",
      ],
      price: "Starting at $3,000",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Marketing Intelligence",
      description: "Data-driven insights for marketing optimization",
      features: [
        "Campaign Analytics",
        "Customer Insights",
        "ROI Tracking",
        "Competitive Analysis",
      ],
      price: "Starting at $6,000",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Process Automation",
      description: "Streamline workflows with intelligent automation",
      features: [
        "Workflow Design",
        "API Integrations",
        "Task Automation",
        "Reporting Tools",
      ],
      price: "Starting at $4,000",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center bg-blue-600 rounded-lg p-2">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-blue-600 ">
                Enviro<span className="text-gray-500">Cloud</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors"
              >
                Get Quote
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                our expert team. From concept to deployment, we deliver
                scalable, secure, and innovative applications.
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
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional development team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
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

        {/* Stats */}
        <div className="mt-20 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600 font-medium">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  72hrs
                </div>
                <div className="text-gray-600 font-medium">
                  Lightspeed Project Turnaround
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development solutions tailored to your business
              needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedService(service)}
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

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Professional development team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    ISO 27001
                  </div>
                  <div className="text-sm text-gray-500">
                    Certified Security
                  </div>
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

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform through technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop"
                alt="E-commerce platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  E-commerce Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom marketplace solution serving 100K+ users
                </p>
                <div className="text-blue-600 font-medium">
                  View Case Study →
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
                alt="Analytics dashboard"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-time data visualization for Fortune 500 client
                </p>
                <div className="text-blue-600 font-medium">
                  View Case Study →
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
                alt="Mobile application"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mobile Application
                </h3>
                <p className="text-gray-600 mb-4">
                  Cross-platform app with 1M+ downloads
                </p>
                <div className="text-blue-600 font-medium">
                  View Case Study →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
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
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-400">
                        Mon-Fri 9AM-6PM EST
                      </p>
                    </div>
                  </div>
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
                        We'll respond within 24 hours
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
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Free Consultation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Project
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    rows="4"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-lg text-white font-semibold text-lg transition-colors">
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

      {/* Footer */}
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
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
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

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">{selectedService.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-semibold">
                      {selectedService.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {selectedService.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                  Get Started
                </button>
                <button className="flex-1 border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg text-gray-700 font-semibold transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
