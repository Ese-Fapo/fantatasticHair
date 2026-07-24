import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'


const Footer = () => {
  return (
    <footer className="bg-slate-950 py-14 text-slate-300 pb-28 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <p className="text-2xl font-bold text-white">Fantastic Hair</p>
            <p className="mt-3 max-w-xl text-slate-400 leading-7">
              Aqui você encontra perucas premium, coleções de beleza e atendimento express via WhatsApp. Continue a navegação ou fale conosco agora mesmo..
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-lg shadow-slate-950/10">
                <p className="text-sm uppercase tracking-[0.35em]" style={{ color: '#9B4647' }}>Endereço 1</p>
                <div className="mt-3 space-y-2 text-slate-300 leading-7">
                  <p>Florianópolis</p>
                  <p>Rua Felipe Schmitt, 303, Sala 416</p>
                  <p>Florianópolis - SC</p>
                  <p>CEP 88010-000</p>
                  <p className="font-semibold text-white">(48) 9925-8544</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rua+Felipe+Schmitt+303+Sala+416+Florian%C3%B3polis+SC+88010-000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900">
                      <FcGoogle className="text-xl" aria-hidden="true" />
                    </span>
                    <span>Ver no Google</span>
                  </a>
                </div>
              </div>


            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em]" style={{ color: '#9B4647' }}>Links rápidos</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
                <a href="#home" className="transition hover:text-white">Início</a>
                <a href="#services" className="transition hover:text-white">Serviços</a>
                <a href="#gallery" className="transition hover:text-white">Galeria</a>
                <a href="#collection" className="transition hover:text-white">Coleção</a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.35em]" style={{ color: '#9B4647' }}>Redes sociais</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition" style={{ '--hover-bg': 'rgba(155, 70, 71, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(155, 70, 71, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <FaFacebookF className="text-[16px]" style={{ color: '#1877F2' }} aria-hidden="true" />
                  </span>
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/fantastichairr/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition" style={{ '--hover-bg': 'rgba(155, 70, 71, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(155, 70, 71, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <FaInstagram className="text-[16px]" style={{ color: '#E1306C' }} aria-hidden="true" />
                  </span>
                  <span>Instagram</span>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white transition" style={{ '--hover-bg': 'rgba(155, 70, 71, 0.1)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(155, 70, 71, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <SiTiktok className="text-[16px]" style={{ color: '#010101' }} aria-hidden="true" />
                  </span>
                  <span>TikTok</span>
                </a>
               
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 text-center space-y-2">
          <p>© 2026 Fantastic Hair. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://sitesprofissionai.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#9B4647' }} onMouseEnter={(e) => e.target.style.color = '#BDBFC0'} onMouseLeave={(e) => e.target.style.color = '#9B4647'}>Sites Profissionais</a>
          </p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer;
