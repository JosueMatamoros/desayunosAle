import { MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="py-24 bg-foreground">

      <div className="max-w-4xl mx-auto px-6">

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-primary-foreground rounded-4xl border border-border/10 shadow-xl overflow-hidden"
        >
          <div className="p-10 md:p-14">

            {/* Header */}
            <div className="text-center mb-10">

              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4">
                ¿Querés algo diferente?
              </h2>

              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Personalizamos tu desayuno. Escribinos por WhatsApp y te armamos el combo perfecto para vos o para sorprender a alguien especial.
              </p>

            </div>

            {/* CTA Button */}
            <div className="flex justify-center mb-10">
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 px-7 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground text-base md:text-lg rounded-full font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="md:hidden">WhatsApp</span>
                <span className="hidden md:inline">Consultá por WhatsApp</span>
              </a>
            </div>

            {/* Info */}
            <div className="flex flex-wrap justify-center gap-6">

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="hidden md:flex w-10 h-10 bg-background-alt rounded-full items-center justify-center">
                  <Clock className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-medium">6:00 AM - 11:00 AM</span>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="hidden md:flex w-10 h-10 bg-background-alt rounded-full items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-medium">La Fortuna y alrededores</span>
              </div>

            </div>

          </div>

          {/* Bottom accent */}
          <div className="h-2 bg-primary" />
        </motion.div>

      </div>

    </section>
  );
}
