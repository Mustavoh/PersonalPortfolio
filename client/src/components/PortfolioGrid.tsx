import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PortfolioGridProps {
  category?: string;
  limit?: number;
}

export function PortfolioGrid({ category, limit }: PortfolioGridProps) {
  let filteredProjects = category
    ? PROJECTS.filter((project) => project.category === category)
    : PROJECTS;

  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <AspectRatio ratio={4/3}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
