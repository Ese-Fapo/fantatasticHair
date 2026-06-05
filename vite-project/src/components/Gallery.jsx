import { useState } from 'react'

const galleryPhotos = [
  '/hair.jpeg',
  '/hair2.jpeg',
  '/hair3.jpeg',
  '/hair4.jpeg',
  '/Hair5.jpeg',
  '/Hair6.jpeg',
  '/Hair7.jpeg',
  '/Hair8.jpeg',
  '/hair9.jpeg',
  '/hair99.jpeg',
  '/Wig1.jpeg',
  '/Wig2.jpeg',
  '/Wig3.jpeg',
  '/Wig4.jpeg',
  '/Wig5.jpeg',
  '/Wig6.jpeg',
  '/Wig7.jpeg',
  '/Wig8.jpeg',
  '/Wig10.jpeg',
]

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const lastIndex = galleryPhotos.length - 1

  const goPrevious = () => setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1)
  const goNext = () => setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1)

  return (
    <section id="gallery" className="bg-slate-950 py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
            Galeria premium
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Inspire-se com looks reais
          </h2>
          <p className="max-w-2xl text-slate-300">
            Navegue pela nossa coleção de estilos e escolha o seu visual favorito com um clique.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/95 p-4 shadow-2xl shadow-black/30">
          <div className="relative">
            <img
              src={galleryPhotos[activeIndex]}
              alt={`Galeria de peruca ${activeIndex + 1}`}
              className="mx-auto h-[420px] w-full max-w-5xl rounded-[2rem] object-cover shadow-2xl shadow-black/30"
            />
            <button
              type="button"
              onClick={goPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/90 p-3 text-white shadow-lg shadow-black/30 transition hover:bg-slate-800 sm:left-5"
              aria-label="Imagem anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/90 p-3 text-white shadow-lg shadow-black/30 transition hover:bg-slate-800 sm:right-5"
              aria-label="Próxima imagem"
            >
              ›
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm uppercase tracking-[0.35em] text-slate-400">
              {activeIndex + 1} / {galleryPhotos.length}
            </span>
            <div className="flex overflow-x-auto gap-3 py-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
              {galleryPhotos.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative block h-20 w-20 flex-none overflow-hidden rounded-3xl border transition ${
                    index === activeIndex ? 'border-[#9B4647]' : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={src} alt={`Miniatura ${index + 1}`} className="h-full w-full object-cover" />
                  {index === activeIndex && (
                    <span className="absolute right-2 top-2 rounded-full bg-[#9B4647] px-2 py-0.5 text-[11px] font-semibold text-white">
                      Ativa
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery;
