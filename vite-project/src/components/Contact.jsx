import { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" className="bg-slate-900 py-16 sm:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-200">
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
                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">WhatsApp</p>
                <p className="mt-3 text-lg font-semibold text-white">+55 (11) 91234-5678</p>
              </div>
              <div className="rounded-[1.75rem] bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-fuchsia-300">Email</p>
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
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
              />
            </label>
            <label className="block mb-5">
              <span className="text-sm font-semibold text-slate-200">Email</span>
              <input
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                placeholder="seu@email.com"
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
              />
            </label>
            <label className="block mb-6">
              <span className="text-sm font-semibold text-slate-200">Mensagem</span>
              <textarea
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                placeholder="Conte-nos o que você quer pedir..."
                rows={5}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-fuchsia-500"
              />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600">
              Salvar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
