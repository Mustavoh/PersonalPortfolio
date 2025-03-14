import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {TESTIMONIALS.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                  <AvatarFallback>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
