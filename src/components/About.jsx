import { FaMapMarkerAlt, FaGlobe, FaStore } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#9B4647] via-[#5B3C3C] to-[#D4AF37] p-8 sm:p-10 text-white shadow-[0_30px_80px_rgba(155,70,71,0.22)]">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Sobre a Fantastic Hair</h2>
                <p className="text-sm uppercase tracking-[0.35em] bg-white/10 inline-block px-3 py-1 rounded-full font-bold">Desde 1998 · São Paulo</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-white/90">Atuamos</div>
                <div className="text-lg font-bold">Brasil inteiro</div>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-white/95">
              Fundada em 1998 em São Paulo, a Fantastic Hair começou com a visão de oferecer perucas e soluções capilares que valorizam a
              autoestima. Ao longo de décadas crescemos com atendimento próximo ao cliente, lojas e um forte canal digital — hoje atendemos clientes em todo o Brasil.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Origem</div>
                  <div className="text-xs text-white/90">São Paulo</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <FaGlobe className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Presença</div>
                  <div className="text-xs text-white/90">Nacional</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <div className="text-white font-bold">25+</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">Anos de mercado</div>
                  <div className="text-xs text-white/90">Desde 1998</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 rounded-2xl bg-white/10 p-4 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <FaStore className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Loja física — Florianópolis</div>
                  <p className="text-sm text-white/90">Presença forte na cidade com loja e atendimento local. Av. Hercílio Luz, 636 — Centro.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-[#9B4647]/20 bg-[#D4AF37]/10 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Missão</h3>
              <p className="text-slate-600 leading-7">
                Elevar a confiança por meio de produtos capilares de alta qualidade e suporte transparente para quem busca um novo visual.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#9B4647]/20 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Visão</h3>
              <p className="text-slate-600 leading-7">
                Ser referência em perucas premium, fornecendo uma experiência digital moderna e um atendimento impecável pelo WhatsApp.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#9B4647]/20 bg-[#D4AF37]/10 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Nossa história</h3>
              <p className="text-slate-600 leading-7">
                Começamos em São Paulo em 1998, crescemos com lojas físicas e expandimos nosso atendimento online para alcançar clientes em todos os estados do país.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
