const services = [
  {
    title: 'Consultoria de Estilo',
    description: 'Ajuda personalizada para escolher a peruca, corte e cor que combinam com sua identidade visual.',
    icon: '✨',
  },
  {
    title: 'Perucas Premium',
    description: 'Seleção de perucas de cabelo humano com acabamento natural, leveza e durabilidade.',
    icon: '💎',
  },
  {
    title: 'Ajuste e Manutenção',
    description: 'Suporte para ajustes finos, colorações e manutenção das peças para sempre parecer novo.',
    icon: '🛠️',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="inline-flex rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold tracking-[0.35em] text-pink-700 uppercase">
            Serviços profissionais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Tudo para seu cabelo brilhar
          </h2>
          <p className="max-w-2xl text-slate-600">
            Descubra serviços de beleza completos, coleção premium de perucas e atendimentos sob medida. Desde a escolha dos fios até o envio final para sua casa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] border border-pink-100 bg-pink-50/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-orange-400 text-2xl text-white shadow-lg shadow-fuchsia-200/50">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;
