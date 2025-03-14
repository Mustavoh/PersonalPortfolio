import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
            Our Services
          </h2>
          <Services />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
            Featured Projects
          </h2>
          <PortfolioGrid limit={6} />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16">
            Client Testimonials
          </h2>
          <Testimonials />
        </div>
      </motion.section>
    </div>
  );
}
