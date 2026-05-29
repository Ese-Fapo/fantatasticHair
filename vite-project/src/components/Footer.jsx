const Footer = () => {
  return (
    <footer className="bg-slate-950 py-14 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <p className="text-2xl font-bold text-white">Fantastic Hair</p>
            <p className="mt-3 max-w-xl text-slate-400 leading-7">
              Aqui você encontra perucas premium, coleções de beleza e atendimento express via WhatsApp. Continue a navegação ou fale conosco agora mesmo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Endereço 1</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Florianópolis 48<br />
                  Av. Hercílio Luz, 636<br />
                  Centro, Florianópolis - SC<br />
                  <span className="font-semibold text-white">(48) 3224-6085</span>
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Endereço 2</p>
                <p className="mt-3 text-slate-300 leading-7">
                  São Paulo<br />
                  Praça Carlos, 129<br />
                  Centro Liberdade - SP<br />
                  <span className="font-semibold text-white">(11) 3104-6568 / 3106-446</span>
                </p>
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 sm:col-span-2">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Endereço 3</p>
                <p className="mt-3 text-slate-300 leading-7">
                  São Paulo<br />
                  Rua Paula Souza, 215<br />
                  Centro Ita - SP<br />
                  <span className="font-semibold text-white">(11) 2429-5965 / 3413-0215</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Links rápidos</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
                <a href="#home" className="transition hover:text-white">Início</a>
                <a href="#services" className="transition hover:text-white">Serviços</a>
                <a href="#gallery" className="transition hover:text-white">Galeria</a>
                <a href="#collection" className="transition hover:text-white">Coleção</a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Redes sociais</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:bg-fuchsia-500/10">
                  <span className="text-lg">f</span>
                  Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:bg-fuchsia-500/10">
                  <span className="text-lg">i</span>
                  Instagram
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:bg-fuchsia-500/10">
                  <span className="text-lg">♪</span>
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 text-center">
          © 2026 Fantastic Hair. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
