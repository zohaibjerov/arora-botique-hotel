import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/3225550100"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={24} />
  </a>
);

export default WhatsAppButton;
