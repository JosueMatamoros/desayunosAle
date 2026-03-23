import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/50688888888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed bottom-3 right-3 md:bottom-4 md:right-4 z-50 w-15 h-15 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground shadow-xl shadow-black/30 flex items-center justify-center hover:scale-110 hover:opacity-95 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
