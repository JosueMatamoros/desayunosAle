import { Check } from "lucide-react";
import { motion } from "framer-motion";

const bebidas = [
  {
    id: 1,
    nombre: "Café de Altura",
    descripcion: "100% café costarricense de Tarrazú",
    imagen: "/images/cafe-costarricense.jpg"
  },
  {
    id: 2,
    nombre: "Jugo Natural",
    descripcion: "Naranja, piña, mango o la fruta de tu elección",
    imagen: "/images/jugo-natural.jpg"
  },
  {
    id: 3,
    nombre: "Batido Tropical",
    descripcion: "Mezcla de frutas frescas con leche o agua de coco",
    imagen: "/images/batido.jpg"
  }
];

export default function Drinks() {
  return (
    <section className="py-28 bg-background">

      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-secondary/70">
            <Check className="w-3.5 h-3.5" />
            Incluido en tu desayuno
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Elige tu Bebida
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada desayuno incluye una bebida a tu elección
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {bebidas.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background-alt rounded-3xl overflow-hidden border border-border hover:border-accent/70 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {item.nombre}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {item.descripcion}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-secondary" />
            Sin costo adicional con tu desayuno
          </p>
        </div>

      </div>
    </section>
  );
}
