import { type Project, type Service, type Testimonial } from "@shared/schema";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    description: "A contemporary living space with clean lines and neutral tones",
    imageUrl: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
    category: "residential"
  },
  {
    id: 2,
    title: "Luxury Office Suite",
    description: "Corporate workspace with elegant finishes",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "commercial"
  },
  // Add more projects...
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Residential Design",
    description: "Creating beautiful, functional living spaces tailored to your lifestyle",
    icon: "Home"
  },
  {
    id: 2,
    title: "Commercial Design",
    description: "Innovative workspace solutions that enhance productivity",
    icon: "Building2"
  },
  // Add more services...
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Homeowner",
    content: "Fatima transformed our house into a dream home. Her attention to detail and understanding of our needs was exceptional.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },
  // Add more testimonials...
];
