import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '554899258544';
const whatsappMessage = 'Olá! Tenho interesse nas perucas premium. Pode me ajudar?';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export default function WhatsAppChat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-24 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25d366]/30 transition-transform duration-200 hover:-translate-y-1"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  )
}
