import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, index) => {
        const Icon = Icons[service.icon as keyof typeof Icons];
        
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow"
          >
            {Icon && <Icon className="h-10 w-10 text-primary mb-4" />}
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
