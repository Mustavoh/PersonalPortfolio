import { Link } from "wouter";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">
              Fatima AlDarwish
            </h3>
            <p className="text-muted-foreground">
              Transforming spaces with elegance and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Residential Design</li>
              <li className="text-muted-foreground">Commercial Design</li>
              <li className="text-muted-foreground">Space Planning</li>
              <li className="text-muted-foreground">3D Visualization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Fatima AlDarwish Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
