import { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" className="bg-slate-900 py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Fale conosco
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Pronto para transformar seu visual?
            </h2>
            <p className="mt-4 max-w-xl text-slate-300 leading-7">
              Use o formulário ao lado ou envie sua mensagem diretamente pelo WhatsApp. Nossa equipe responde rápido e preza por um atendimento personalizado.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">WhatsApp</p>
                <div className="mt-3 space-y-2 text-lg font-semibold text-white">
                  <a href="https://wa.me/554899258544" target="_blank" rel="noopener noreferrer" className="block underline">
                    +55 (48) 48 9925-8544
                  </a>
                  <a href="https://wa.me/5548999567337" target="_blank" rel="noopener noreferrer" className="block underline">
                    +55 (48) 99956-7337
                  </a>
                  <a href="https://wa.me/554899258544" target="_blank" rel="noopener noreferrer" className="block underline">
                    +55 (48) 9925-8544
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">contato@fantastichair.com</p>
              </div>
            </div>
          </div>
          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl" onSubmit={(event) => event.preventDefault()}>
            <label className="block mb-5">
              <span className="text-sm font-semibold text-slate-200">Nome</span>
              <input
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                placeholder="Seu nome"
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#9B4647]"
              />
            </label>
            <label className="block mb-5">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                placeholder="seu@email.com"
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#9B4647]"
              />
            </label>
            <label className="block mb-6">
              <span className="text-sm font-semibold text-slate-200">Mensagem</span>
              <textarea
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                placeholder="Conte-nos o que você quer pedir..."
                rows={5}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-[#9B4647]"
              />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#9B4647] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7A3536]">
              Salvar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
