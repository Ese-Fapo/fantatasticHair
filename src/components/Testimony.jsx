

const testimonials = [
  {
    id: 't1',
    name: 'Mariana Silva',
    location: 'Florianópolis, SC',
    rating: 5,
    quote:
      'Comprei uma peruca para um evento e foi a melhor decisão — acabamento impecável e atendimento super atencioso. Voltarei sempre!',
    avatarColor: 'bg-[#9B4647]',
  },
  {
    id: 't2',
    name: 'João Pereira',
    location: 'São Paulo, SP',
    rating: 5,
    quote:
      'A qualidade é excelente e o cabelo parece muito natural. A entrega foi rápida e o suporte me ajudou com dicas de cuidados.',
    avatarColor: 'bg-amber-400',
  },
  {
    id: 't3',
    name: 'Camila Rocha',
    location: 'Rio de Janeiro, RJ',
    rating: 4,
    quote:
      'Adorei o volume e o caimento. Recomendo para quem quer um resultado natural sem perder o estilo.',
    avatarColor: 'bg-[#D4AF37]',
  },
]

const Stars = ({ rating = 5 }) => (
  <div className="flex items-center gap-1 text-amber-500">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} aria-hidden="true">{i < rating ? '★' : '☆'}</span>
    ))}
  </div>
)

export default function Testimony() {
  return (
      <section id="testimony" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">O que nossos clientes dizem</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Depoimentos reais de clientes que compraram com a gente — confiança, qualidade e atendimento personalizado.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.id} className="rounded-3xl border border-[#9B4647]/20 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white ${t.avatarColor} shrink-0`}> 
                  <span className="font-bold">{t.name.split(' ').map(n => n[0]).slice(0,2).join('')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                    <Stars rating={t.rating} />
                  </div>
                  <p className="mt-4 text-slate-600 leading-7">“{t.quote}”</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
