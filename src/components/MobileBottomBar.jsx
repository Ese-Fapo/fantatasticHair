const MobileBottomBar = ({ cartCount, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block bg-slate-950/95 p-4 shadow-[0_-10px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onNavigate('cart')}
          className="flex-1 rounded-full border border-white/10 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
           {cartCount > 0 ? `(${cartCount})` : ''}
        </button>
        <a
          href="#contact"
          className="flex-1 rounded-full bg-gradient-to-r from-[#9B4647] to-[#D4AF37] px-4 py-3 text-sm font-semibold text-white text-center transition hover:opacity-95"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default MobileBottomBar;
