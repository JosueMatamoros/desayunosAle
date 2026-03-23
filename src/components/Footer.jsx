import { Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-background-alt text-foreground border-t border-border">

      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2">
              Desayunos Pura Vida
            </h3>
            <p className="text-muted-foreground">
              Sabor casero, directo a tu puerta
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6">

            <a
              href="https://wa.me/50688888888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+506 8888-8888</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@desayunospuravida</span>
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Desayunos Pura Vida.
        </div>

      </div>
    </footer>
  );
}
