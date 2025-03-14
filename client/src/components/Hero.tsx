import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <img
          src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Transforming Spaces with Elegance and Innovation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Creating exceptional interior designs that reflect your personality and elevate your lifestyle.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio">
              <Button size="lg">View Portfolio</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
