import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const desayunos = [
  {
    id: 1,
    nombre: "Gallo Pinto Tradicional",
    descripcion: "Nuestro clásico arroz con frijoles salteados con Salsa Lizano, acompañado de huevos al gusto, plátano maduro frito, queso fresco y tortillas calentitas.",
    imagen: "/images/gallo-pinto.jpg",
    precio: "₡4,500",
    destacado: true
  },
  {
    id: 2,
    nombre: "Desayuno Típico Completo",
    descripcion: "Huevos fritos con tocino crujiente, aguacate fresco, tostadas de pan artesanal y una selección de frutas tropicales de temporada.",
    imagen: "/images/desayuno-tipico.jpg",
    precio: "₡5,200",
    destacado: false
  },
  {
    id: 3,
    nombre: "Pancakes Tropicales",
    descripcion: "Torre de pancakes esponjosos bañados en miel de maple, decorados con mango fresco, papaya, fresas y crema batida.",
    imagen: "/images/pancakes.jpg",
    precio: "₡4,800",
    destacado: false
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-28 bg-foreground">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
              Nuestro Menú
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground mb-6">
            Desayunos Clásicos
          </h2>

          <p className="text-card-foreground/75 text-lg max-w-2xl mx-auto">
            Preparados con ingredientes frescos y el amor de la cocina costarricense
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {desayunos.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/25 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >

              {/* Imagen */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />

                {/* Badge */}
                {item.destacado && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    Favorito
                  </div>
                )}

                {/* Precio */}
                <div className="absolute bottom-4 left-4 bg-foreground text-card-foreground border border-primary/30 px-4 py-2 rounded-full font-bold text-lg">
                  {item.precio}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow">

                <h3 className="font-serif text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.nombre}
                </h3>

                <p className="text-card-foreground/75 leading-relaxed mb-6 grow">
                  {item.descripcion}
                </p>

                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <Coffee className="w-4 h-4" />
                  <span>Incluye bebida a elección</span>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}
