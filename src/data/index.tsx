import { ServiceProps, SuccessStory } from "@/types";
import { BarChart, Code, Database, Globe, Mail, Star, Zap } from "lucide-react";

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

export const successStories: SuccessStory[] = [
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
