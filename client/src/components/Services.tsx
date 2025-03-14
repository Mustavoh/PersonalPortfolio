import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, index) => {
        const Icon = (LucideIcons as any)[service.icon];

        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {Icon && <Icon className="h-12 w-12 text-primary mb-6" />}
            <h3 className="text-xl font-playfair font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground font-raleway">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}