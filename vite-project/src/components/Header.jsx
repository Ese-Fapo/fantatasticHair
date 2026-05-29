import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';

const Header = ({ cartCount, onNavigate, view }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Início', link: '#home' },
    { name: 'Serviços', link: '#services' },
    { name: 'Galeria', link: '#gallery' },
    { name: 'Coleção', link: '#collection' },
    { name: 'Sobre', link: '#about' },
    { name: 'Contato', link: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur shadow-lg shadow-pink-200/30 py-3'
          : 'bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('#home')}
            className="flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-500 shadow-xl shadow-fuchsia-300/20 text-white ring-1 ring-white/20">
              <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 35C25 23 38 20 46 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M22 44C30 32 42 28 51 33" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M36 14L40 24L50 26L42 32L44 42L36 36L28 42L30 32L22 26L32 24L36 14Z" fill="currentColor" opacity="0.85" />
              </svg>
            </span>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-600">Fantastic Hair</p>
              <h1 className="text-lg font-bold text-slate-900 sm:text-xl md:text-2xl bg-gradient-to-r from-fuchsia-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                cabelo com brilho
              </h1>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onNavigate(item.link)}
                className="text-slate-700 font-medium text-sm lg:text-base hover:text-fuchsia-600 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-fuchsia-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-700 hover:text-fuchsia-600 transition-colors duration-300 relative group">
              <FaSearch className="text-xl" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rounded-full bg-slate-900 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Buscar
              </span>
            </button>
            <button className="text-slate-700 hover:text-fuchsia-600 transition-colors duration-300 relative group">
              <FaHeart className="text-xl" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rounded-full bg-slate-900 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Favoritos
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('cart')}
              className="relative inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            >
              <FaShoppingBag className="text-base" />
              <span>Sacola</span>
              {cartCount > 0 && (
                <span className="rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500 px-2 py-0.5 text-[11px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-fuchsia-600 transition-colors duration-300"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 rounded-3xl bg-white/95 p-4 shadow-xl shadow-fuchsia-100/60 backdrop-blur-xl animate-slide-down">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    onNavigate(item.link)
                    setIsMenuOpen(false)
                  }}
                  className="rounded-2xl px-4 py-3 text-left text-slate-700 font-medium transition-colors duration-300 hover:bg-pink-50 hover:text-fuchsia-600"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  onNavigate('cart')
                  setIsMenuOpen(false)
                }}
                className="flex-1 rounded-2xl bg-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600"
              >
                Minha sacola
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate('#contact')
                  setIsMenuOpen(false)
                }}
                className="flex-1 rounded-2xl border border-pink-200 bg-white px-4 py-3 text-sm font-semibold text-fuchsia-600 transition hover:bg-pink-50"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.28s ease-out;
        }
      `}</style>
    </header>
  )
};

export default Header;
