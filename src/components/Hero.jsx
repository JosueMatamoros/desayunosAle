import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Split Background */}
      <div className="absolute inset-0 hidden md:flex">
        <div className="w-1/2 bg-background" />

        <div className="w-1/2 relative">
          <img
            src="/images/desayuno-tipico.jpg"
            alt="Desayuno costarricense"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/30" />
        </div>
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/images/desayuno-tipico.jpg"
          alt="Desayuno costarricense"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="text-center md:text-left">

            {/* Top label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">
                Costa Rica
              </span>
              <span className="w-12 h-px bg-primary" />
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
            >
              Desayunos
              <span className="block text-primary italic font-light mt-2">
                Pura Vida
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-md mb-10 leading-relaxed"
            >
              El auténtico sabor costarricense preparado con amor, entregado fresco cada mañana a tu puerta.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Ordenar Ahora
              </a>

              <a
                href="#menu"
                className="flex items-center justify-center px-8 py-4 border border-border text-foreground rounded-full hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                Ver Menú
              </a>
            </motion.div>

            {/* Badge */}
            <div className="mt-12 inline-flex items-center gap-4 bg-foreground/70 px-6 py-4 rounded-2xl border border-border/80 shadow-lg shadow-black/20">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary-foreground text-sm font-medium">
                Servicio a domicilio en La Fortuna
              </span>
            </div>

          </div>

          <div className="hidden md:block" />

        </div>
      </div>

      {/* Scroll icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 md:left-1/4 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-11 h-11 rounded-full border border-border/80 bg-background/45 backdrop-blur-sm flex items-center justify-center">
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

    </section>
  );
}
