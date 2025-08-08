import { JSX } from "react";

export interface ServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
}

type Stat = {
  label: string;
  value: string;
};

export interface SuccessStory {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  keyResults: string[];
  impact: string;
  imageUrl: string;
  stats: Stat[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  projectDetails: string;
  projectType: string;
}
