import { type Project, type Service, type Testimonial } from "@shared/schema";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cartier-Inspired Luxury Hotel",
    description: "An opulent hotel design drawing inspiration from Cartier's timeless elegance and sophistication",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    category: "hospitality"
  },
  {
    id: 2,
    title: "VR Technology Showcase Booth",
    description: "Modern exhibition booth design for university tech showcase, focusing on VR experience",
    imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    category: "commercial"
  }
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
  {
    id: 3,
    title: "Hospitality Design",
    description: "Luxurious and welcoming spaces for hotels and entertainment venues",
    icon: "Hotel"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mustafa Aljishi",
    role: "Client",
    content: "Working with Fatima was an exceptional experience. Her attention to detail and innovative approach transformed our space beyond expectations.",
    imageUrl: "" // No picture provided
  }
];