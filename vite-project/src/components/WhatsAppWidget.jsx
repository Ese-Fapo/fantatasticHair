import { useMemo, useState } from 'react'

const WHATSAPP_NUMBER = '5548999852544'

const WhatsAppWidget = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customRequest, setCustomRequest] = useState('')

  const messagePreview = useMemo(() => {
    const items = cartItems.length
      ? cartItems.map((item) => `${item.quantity}x ${item.name}`).join(', ')
      : ''
    const details = customRequest.trim() ? `\nDetalhes: ${customRequest.trim()}` : ''
    const name = customerName.trim() ? `\nNome: ${customerName.trim()}` : ''

    return `Olá! Gostaria de pedir informações sobre:${items ? `\n${items}` : ''}${details}${name}`.trim()
  }, [cartItems, customRequest, customerName])

  const handleSend = () => {
    if (!cartItems.length && !customRequest.trim()) {
      window.alert('Adicione um produto ou escreva o que deseja enviar pelo WhatsApp.')
      return
    }

    const text = encodeURIComponent(messagePreview)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      {isOpen && (
        <div className="w-[320px] rounded-3xl border border-slate-200/20 bg-white/95 p-4 shadow-2xl shadow-slate-900/20 backdrop-blur-xl ring-1 ring-slate-200/40">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">WhatsApp Pedido</p>
              <p className="text-xs text-slate-500">Envie sua seleção direto para atendimento</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-950 px-2.5 py-2 text-slate-100 transition hover:bg-slate-800"
              aria-label="Fechar widget"
            >
              ✕
            </button>
          </div>

          <label className="block mb-3 text-sm font-medium text-slate-700">
            Seu nome
            <input
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="Nome"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-500"
            />
          </label>

          <label className="block mb-3 text-sm font-medium text-slate-700">
            Mensagem
            <textarea
              value={customRequest}
              onChange={(event) => setCustomRequest(event.target.value)}
              placeholder="O que você quer pedir..."
              rows={4}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-fuchsia-500"
            />
          </label>

          <button
            type="button"
            onClick={handleSend}
            className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-300/30 transition hover:opacity-95"
          >
            Enviar pelo WhatsApp
          </button>

          <div className="mt-3 space-y-2 text-xs text-slate-500">
            <p>Número usado para pedidos: <a href="https://wa.me/5548999852544" target="_blank" rel="noopener noreferrer" className="font-semibold text-fuchsia-600">+55 48 99985-2544</a></p>
            <p>Outros contatos:</p>
            <ul className="space-y-1 pl-4">
              <li>
                <a href="https://wa.me/5548999852544" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 underline">
                  Florianópolis: +55 48 99985-2544
                </a>
              </li>
              <li>
                <a href="https://wa.me/5548999567337" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 underline">
                  Florianópolis: +55 48 99956-7337
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511985143116" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 underline">
                  São Paulo: +55 11 98514-3116
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-fuchsia-300/30 transition hover:shadow-fuchsia-400/40"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-fuchsia-600">W</span>
        WhatsApp pedido
      </button>
    </div>
  )
}

export default WhatsAppWidget;
