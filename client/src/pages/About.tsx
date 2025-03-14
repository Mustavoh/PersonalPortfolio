import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt="Fatima AlDarwish"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              About Fatima
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              With over a decade of experience in interior design, I've had the privilege
              of transforming countless spaces into beautiful, functional environments
              that inspire and delight.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My design philosophy centers on creating harmonious spaces that reflect
              the unique personality and lifestyle of each client. I believe in the
              power of thoughtful design to enhance daily living and working experiences.
            </p>
            <Button className="mb-8">
              <FileDown className="mr-2 h-4 w-4" />
              Download Portfolio PDF
            </Button>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-playfair font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-playfair font-bold mb-2">150+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Professional Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-muted-foreground">
                Master's in Interior Architecture<br />
                Royal College of Art, London
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-muted-foreground">
                NCIDQ Certified Interior Designer<br />
                LEED Accredited Professional
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-bold mb-4">Recognition</h3>
              <p className="text-muted-foreground">
                Middle East Design Awards 2023<br />
                Gulf Interior Design Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
