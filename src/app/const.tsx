import { BarChart, Code, Database, Globe, Mail, Star, Zap } from "lucide-react";
import { JSX } from "react";

export interface ServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export const services: ServiceProps[] = [
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
