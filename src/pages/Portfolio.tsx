import { useState } from "react";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Category = "all" | "residential" | "commercial" | "hospitality";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "hospitality", label: "Hospitality" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-8">
            Our Portfolio
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our collection of thoughtfully designed spaces that reflect our commitment to elegance and innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <PortfolioGrid category={selectedCategory === "all" ? undefined : selectedCategory} />
        </motion.div>
      </div>
    </div>
  );
}
