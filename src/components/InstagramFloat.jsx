import { FaInstagram } from 'react-icons/fa'

export default function InstagramFloat() {
  return (
    <a
      href="https://www.instagram.com/fantastichairr/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Instagram Fantastic Hair"
      className="fixed right-6 bottom-28 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E1306C] text-white shadow-2xl shadow-[#E1306C]/30 transition-transform duration-200 hover:-translate-y-1 hover:bg-[#c72f60]"
    >
      <FaInstagram className="text-2xl" />
    </a>
  )
}
