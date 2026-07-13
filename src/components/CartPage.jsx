import { useMemo } from 'react'

const buildWhatsAppMessage = (cartItems) => {
  const header = 'Olá! Quero finalizar meu pedido com Fantastic Hair:'
  const itemLines = cartItems.map((item) => `*${item.quantity}x* ${item.name}`)
  return encodeURIComponent([header, ...itemLines].join('\n'))
}

const CartPage = ({ cartItems, updateQuantity, removeItem, clearCart, onBackHome }) => {
  const totalItems = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  // prices removed — showing item count instead

  return (
    <section className="min-h-[calc(100vh-92px)] bg-amber-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#9B4647]">Sua sacola</p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Itens selecionados</h1>
          </div>
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Voltar para loja
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-[#9B4647]/20 bg-white/80 p-12 text-center shadow-lg shadow-[0_20px_60px_rgba(155,70,71,0.16)]">
            <p className="text-xl font-semibold text-slate-900">Seu carrinho está vazio</p>
            <p className="mt-3 text-slate-600">Adicione alguns produtos para ver tudo aqui.</p>
            <button
              type="button"
              onClick={onBackHome}
              className="mt-6 inline-flex rounded-full bg-[#9B4647] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7A3536]"
            >
              Ver coleção
            </button>
          </div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="rounded-[2rem] border border-[#9B4647]/20 bg-white p-6 shadow-sm">
                  <div className="grid gap-5 sm:grid-cols-[140px_1fr]">
                    <img src={item.image} alt={item.name} className="h-36 w-full rounded-3xl object-cover" />
                    <div className="flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">{item.name}</h2>
                        <p className="mt-2 text-sm text-slate-600 leading-7">{item.description}</p>
                      </div>
                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-9 w-9 rounded-full bg-white text-slate-700 transition hover:bg-slate-200"
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-9 w-9 rounded-full bg-white text-slate-700 transition hover:bg-slate-200"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-[#9B4647]/20 bg-white p-6 shadow-lg shadow-[0_20px_60px_rgba(155,70,71,0.16)] lg:sticky lg:top-20">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#9B4647]">Resumo do pedido</p>
                  <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
                </div>
                <div className="rounded-3xl bg-[#D4AF37]/10 p-5 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Informações</p>
                  <p className="mt-3 leading-7">
                    Ajuste a quantidade, remova itens ou envie sua seleção para o WhatsApp usando o botão abaixo. Todos os pedidos vão para <strong>+55 4899258544</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const whatsappNumber = '554899258544'
                    const text = buildWhatsAppMessage(cartItems)
                    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
                  }}
                  className="w-full rounded-full bg-[#9B4647] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A3536]"
                >
                  Enviar para WhatsApp e finalizar pedido
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Limpar carrinho
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}

export default CartPage;
