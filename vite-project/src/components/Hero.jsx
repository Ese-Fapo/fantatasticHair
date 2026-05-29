
import { useState } from 'react'

const Hero = () => {
  const [imgSrc, setImgSrc] = useState('/Wig6.jpeg')

  const placeholder =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect fill='%23fff7ed' width='600' height='400'/><text x='300' y='200' text-anchor='middle' dominant-baseline='middle' fill='%23b91c1c' font-size='22' font-family='Arial'>Imagem%20não%20encontrada</text></svg>"

  return (
    <section id="home" className="bg-amber-50 scroll-mt-20 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-700 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-500 animate-pulse" /> Novidades premium
            </span>
            <div className="space-y-5">
              <p className="text-base font-semibold uppercase tracking-[0.23em] text-pink-600">Fantastic Hair</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                O melhor da beleza capilar com perucas e extensões de alto brilho.
              </h1>
              <p className="max-w-2xl text-slate-600 text-base leading-8 sm:text-lg">
                Escolha seu estilo entre nossas coleções premium, adicione ao carrinho e envie a seleção diretamente para o WhatsApp em segundos.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#collection"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-fuchsia-500 to-orange-500 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-fuchsia-300/30 transition hover:-translate-y-0.5"
              >
                Ver coleção
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-6 py-3 text-base font-semibold text-fuchsia-600 shadow-sm hover:bg-pink-50 transition"
              >
                Fale conosco
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Entrega rápida</p>
                <p className="mt-3 text-slate-600">Seleção rápida e envio direto para o seu WhatsApp, sem complicação.</p>
              </div>
              <div className="rounded-[1.75rem] border border-pink-100 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Suporte VIP</p>
                <p className="mt-3 text-slate-600">Atendimento pessoal para ajudar você a escolher a peruca ideal.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-fuchsia-500 via-rose-400 to-orange-300 p-2 shadow-2xl shadow-pink-200/50">
            <div className="overflow-hidden rounded-4xl bg-slate-950">
              <img
                src={imgSrc}
                alt="Modelo com peruca estilosa"
                className="h-105 w-full object-cover transition duration-700 hover:scale-105"
                loading="eager"
                onError={() => setImgSrc(placeholder)}
              />
            </div>
            <div className="absolute left-6 bottom-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              Brilho realista × Estilo prático
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero