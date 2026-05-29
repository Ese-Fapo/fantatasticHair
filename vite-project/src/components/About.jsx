const About = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-fuchsia-500 via-rose-400 to-orange-400 p-10 text-white shadow-2xl shadow-pink-200/40">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">Sobre a Fantastic Hair</h2>
            <p className="text-base leading-8 text-white/90">
              Fantastic Hair nasceu para transformar autoestima com perucas, extensões e serviços de beleza que unem conforto, acabamento realista e estilo autoral.
            </p>
            <p className="mt-5 text-base leading-8 text-white/90">
              Nossa missão é atender cada cliente com atenção exclusiva, sugerindo peças que combinam com sua rotina e celebrando a beleza em todas as formas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-pink-100 bg-pink-50/80 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Missão</h3>
              <p className="text-slate-600 leading-7">
                Elevar a confiança por meio de produtos capilares de alta qualidade e suporte transparente para quem busca um novo visual.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-pink-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Visão</h3>
              <p className="text-slate-600 leading-7">
                Ser referência em perucas premium, fornecendo uma experiência digital moderna e um atendimento impecável pelo WhatsApp.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-pink-100 bg-pink-50/80 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Valores</h3>
              <p className="text-slate-600 leading-7">
                Transparência, atendimento humano, qualidade de produtos e beleza acessível com padrão boutique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
