import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
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
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            Creating Timeless Spaces with Elegance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-raleway">
            Transforming interiors into sophisticated sanctuaries that reflect your unique style and elevate your everyday living.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Portfolio
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary hover:bg-primary/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}