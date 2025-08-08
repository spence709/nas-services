"use client";

import { useState, FormEvent, JSX } from "react";
import {
  Code,
  Globe,
  Mail,
  ArrowRight,
  Menu,
  X,
  Award,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import { services } from "@/data/index";
import Image from "next/image";
import { ContactFormData, ServiceProps, SuccessStory } from "@/types";

const successStories: SuccessStory[] = [
  {
    id: "zintlr",
    title: "Zintlr",
    subtitle: "B2B Sales Intelligence Platform",
    challenge:
      "A growing startup needed a comprehensive B2B sales intelligence platform to compete with established players like ZoomInfo and Apollo in the crowded lead generation market.",
    keyResults: [
      "Built a scalable SaaS platform handling 500M+ contacts and 75M+ companies globally",
      "Integrated advanced AI powered personality profiling (zPersonality Intel) using DISC and OCEAN frameworks",
      "Developed proprietary Indian Data Suite with 6.5M companies and 50M decision makers",
      "Implemented real time data accuracy validation across billions of web data points",
      "Created seamless Chrome extension and CRM integrations for enterprise workflows",
      "Achieved successful funding of $896K and gained 3,679+ LinkedIn followers",
    ],
    impact:
      "Our custom built platform transformed Zintlr into a competitive B2B sales intelligence solution that not only matches industry giants but introduces unique psychological insights through zPersonality profiling. By combining massive data processing capabilities with AI driven personality analysis, we helped position Zintlr as an innovative disruptor in the sales intelligence space. The platform now serves large enterprises and mid market companies, providing them with the strategic knowledge to significantly improve sales conversion rates through personalized outreach strategies.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    stats: [
      { label: "Contacts", value: "500M+" },
      { label: "Companies", value: "75M+" },
      { label: "Funding Raised", value: "$896K" },
    ],
  },
  {
    id: "stellaryai",
    title: "StellaryAI",
    subtitle: "Creative AI Platform",
    challenge:
      "Developing a comprehensive AI powered creative platform that democratizes content creation across multiple media types while ensuring real time performance and user friendly interfaces.",
    keyResults: [
      "Built a unified platform supporting AI powered image, voice, music, and video generation",
      "Implemented advanced real time generation capabilities with upscaling and relighting features",
      "Developed intuitive user interfaces that make complex AI tools accessible to non technical users",
      "Created scalable architecture handling multiple AI model integrations simultaneously",
      "Established secure user authentication and content management systems",
      "Delivered cross platform compatibility ensuring consistent experience across devices",
    ],
    impact:
      'We transformed the creative bottleneck that many face by building StellaryAI as "The Aggregator of AI Creativity," enabling users to turn raw creative ideas into professional quality content without requiring technical expertise. Our solution addresses the fundamental challenge of creative expression in the digital age by bridging the gap between inspiration and execution. The platform empowers users to create like Renaissance masters or compose symphonies, regardless of their technical background, making advanced AI creativity tools accessible to creators, businesses, and content professionals worldwide.',
    imageUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
    stats: [
      { label: "AI Models", value: "Multi-Modal" },
      { label: "Generation Types", value: "4+" },
      { label: "User Experience", value: "Real-time" },
    ],
  },
  {
    id: "streamer",
    title: "Streamer",
    subtitle: "Community Sports Streaming Platform",
    challenge:
      "Creating a specialized streaming platform for Australian community sports that gives local clubs the tools to broadcast their games while building engaged fan communities.",
    keyResults: [
      "Developed live streaming infrastructure supporting multiple sports (AFL, hockey, surfing, volleyball)",
      "Built self service club registration and content management system",
      "Implemented replay functionality and community engagement features",
      "Created user friendly streaming setup tools for non technical club administrators",
      "Designed responsive platform supporting both live viewing and on demand content",
      "Established scalable video delivery network optimized for Australian market",
    ],
    impact:
      "We revolutionized how Australian community sports connect with their audiences by creating Streamer, a platform that puts the power directly in clubs' hands to create, share, and monetize their unique sporting content. Rather than competing with major streaming services, we identified and filled a crucial niche market where local sports communities needed professional broadcasting tools without the complexity. Our solution enables clubs to boost performance through fan engagement, build stronger community connections, and create new revenue streams through their sporting content, transforming local sports from purely offline experiences into digital community hubs.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    stats: [
      { label: "Sports Supported", value: "4+" },
      { label: "Market", value: "Australia" },
      { label: "Platform Type", value: "Live & VOD" },
    ],
  },
];

function App(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(
    null
  );
  const [selectedCaseStudy, setSelectedCaseStudy] =
    useState<SuccessStory | null>(null);
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

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const formData: ContactFormData = {
        firstName,
        lastName,
        email,
        company,
        projectDetails,
        projectType,
      };

      const response: Response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");

        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompany("");
        setProjectType("Custom Application");
        setProjectDetails("");
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error: unknown) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    }
  };

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
                className="text-gray-700 cursor-pointer"
              >
                {isMenuOpen ?
                  <X className="h-6 w-6" />
                : <Menu className="h-6 w-6" />}
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

      {/* Portfolio Preview - Update the button */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              {
                "Discover how we've helped businesses transform through technology"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story: SuccessStory) => (
              <div
                key={story.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <Image
                  src={story.imageUrl}
                  alt={story.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.title}
                    </h3>
                    <div className="flex space-x-2">
                      {story.stats.slice(0, 1).map((stat, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                        >
                          {stat.value}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {story.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {story.challenge}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Results:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {story.keyResults.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="line-clamp-2">{result}</span>
                        </li>
                      ))}
                      {story.keyResults.length > 2 && (
                        <li className="text-blue-600 text-xs">
                          +{story.keyResults.length - 2} more achievements
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {story.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedCaseStudy(story)}
                    className="w-full text-blue-600 font-medium hover:text-blue-700 text-sm border border-blue-200 hover:border-blue-300 rounded-lg py-2 transition-colors cursor-pointer hover:bg-blue-100"
                  >
                    View Full Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  {/* <div className="flex items-start space-x-4">
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
                  </div> */}
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
                  ></textarea>
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
                  © 2025 EnviroCloud Professional Services. All rights
                  reserved.
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

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Header Image */}
              <div className="h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedCaseStudy.imageUrl}
                  alt={selectedCaseStudy.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Title Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {selectedCaseStudy.title}
                      </h1>
                      <p className="text-xl text-blue-600 font-semibold">
                        {selectedCaseStudy.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 bg-gray-50 p-6 rounded-xl">
                    {selectedCaseStudy.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <span className="text-red-600 text-lg">🎯</span>
                    </div>
                    The Challenge
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                {/* Key Results Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <span className="text-green-600 text-lg">🚀</span>
                    </div>
                    Key Results Delivered
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCaseStudy.keyResults.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Section */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <span className="text-blue-600 text-lg">💡</span>
                    </div>
                    The Impact
                  </h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {selectedCaseStudy.impact}
                    </p>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {
                      "Let's discuss how we can help you achieve similar results for your organization."
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        setSelectedCaseStudy(null);
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-colors cursor-pointer"
                    >
                      Start Your Project
                    </button>
                    <button
                      onClick={() => {
                        setSelectedCaseStudy(null);
                        window.open(
                          "https://calendar.app.google/ZwVZLUTdUbKGs3KU8",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                    >
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
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
                  className="text-gray-400 hover:text-gray-600  cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {selectedService.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {"What's Included"}
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
      )}
    </div>
  );
}

export default App;
