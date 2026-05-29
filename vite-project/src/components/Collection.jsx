import { useMemo, useState } from 'react'

const collectionProducts = [
  {
    id: 'hair-001',
    name: 'Peruca Natural Clássica',
    price: 'R$ 399',
    rating: 4.8,
    discount: 12,
    description: 'Cabelo natural com corte reto e brilho realista para o uso diário.',
    image: '/hair.jpeg',
  },
  {
    id: 'hair-002',
    name: 'Peruca Bob Encaracolada',
    price: 'R$ 429',
    rating: 4.5,
    description: 'Corte médio com ondas leves e volume natural, perfeito para um look moderno.',
    image: '/hair2.jpeg',
  },
  {
    id: 'hair-003',
    name: 'Peruca Longa Chique',
    price: 'R$ 549',
    rating: 4.9,
    discount: 15,
    description: 'Comprimento longo com brilho intenso, ideal para eventos especiais.',
    image: '/hair3.jpeg',
  },
  {
    id: 'hair-004',
    name: 'Peruca Wave Deluxe',
    price: 'R$ 479',
    rating: 4.3,
    description: 'Ondas suaves e acabamento aveludado para um visual sofisticado.',
    image: '/hair4.jpeg',
  },
  {
    id: 'hair-005',
    name: 'Peruca Volume Gold',
    price: 'R$ 629',
    rating: 4.7,
    discount: 10,
    description: 'Textura cheia e acabamento premium com brilho acetinado.',
    image: '/Hair5.jpeg',
  },
  {
    id: 'hair-006',
    name: 'Peruca Brilho Natural',
    price: 'R$ 559',
    rating: 4.2,
    description: 'Tonalidade rica com movimento natural e sensação de cabelo vivo.',
    image: '/Hair6.jpeg',
  },
  {
    id: 'hair-007',
    name: 'Peruca Elegance Rosé',
    price: 'R$ 599',
    rating: 4.9,
    discount: 14,
    description: 'Estilo volumoso com nuances suaves e acabamento premium.',
    image: '/Hair7.jpeg',
  },
  {
    id: 'hair-008',
    name: 'Peruca Classic Shine',
    price: 'R$ 519',
    rating: 4.6,
    description: 'Fios lisos com brilho elegante e corte simétrico sofisticado.',
    image: '/Hair8.jpeg',
  },
  {
    id: 'hair-009',
    name: 'Peruca Soft Luxe',
    price: 'R$ 489',
    rating: 4.4,
    discount: 11,
    description: 'Fios sedosos e acabamento natural para um visual suave.',
    image: '/hair9.jpeg',
  },
  {
    id: 'hair-010',
    name: 'Peruca Ultra Brilho',
    price: 'R$ 669',
    rating: 4.8,
    description: 'Acabamento de alto brilho com corpo completo.',
    image: '/hair99.jpeg',
  },
  {
    id: 'wig-011',
    name: 'Peruca Fios Lisos',
    price: 'R$ 499',
    rating: 4.5,
    discount: 13,
    description: 'Acabamento natural, comprimento longo e brilho intenso para looks elegantes.',
    image: '/Wig1.jpeg',
  },
  {
    id: 'wig-012',
    name: 'Peruca Bob Moderna',
    price: 'R$ 349',
    rating: 4.1,
    description: 'Corte bob com volume leve, ideal para um visual sofisticado e confortável.',
    image: '/Wig2.jpeg',
  },
  {
    id: 'wig-013',
    name: 'Peruca Curly Glam',
    price: 'R$ 529',
    rating: 4.7,
    discount: 12,
    description: 'Ondas naturais com movimento completo para um charme impactante no dia a dia.',
    image: '/Wig3.jpeg',
  },
  {
    id: 'wig-014',
    name: 'Peruca Soft Wave',
    price: 'R$ 459',
    rating: 4.3,
    description: 'Textura suave e brilho premium, perfeita para eventos especiais ou rotina elegante.',
    image: '/Wig4.jpeg',
  },
  {
    id: 'wig-015',
    name: 'Peruca Longa Classic',
    price: 'R$ 579',
    rating: 4.8,
    description: 'Comprimento extra e toque sedoso para um acabamento com presença total.',
    image: '/Wig5.jpeg',
  },
  {
    id: 'wig-016',
    name: 'Peruca Sleek Black',
    price: 'R$ 489',
    rating: 4.6,
    discount: 10,
    description: 'Fios escuros e super lisos com caimento natural e acabamento de luxo.',
    image: '/Wig6.jpeg',
  },
  {
    id: 'wig-017',
    name: 'Peruca Volume Natural',
    price: 'R$ 529',
    rating: 4.2,
    description: 'Volume generoso e acabamento com movimento para looks poderosos.',
    image: '/Wig7.jpeg',
  },
  {
    id: 'wig-018',
    name: 'Peruca Wave Luxo',
    price: 'R$ 549',
    rating: 4.9,
    discount: 15,
    description: 'Ondas glamourosas com textura premium e caimento perfeito.',
    image: '/Wig8.jpeg',
  },
  {
    id: 'wig-019',
    name: 'Peruca Deep Shine',
    price: 'R$ 609',
    rating: 4.4,
    description: 'Brilho profundo e acabamento suave para um look elegante todo dia.',
    image: '/Wig10.jpeg',
  },
]

const Collection = ({ cartItems, addItem }) => {
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const visibleProducts = useMemo(
    () => collectionProducts.slice(0, visibleCount),
    [visibleCount]
  )

  const handleLoadMore = () => {
    if (visibleCount >= collectionProducts.length) return
    setIsLoading(true)
    window.setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, collectionProducts.length))
      setIsLoading(false)
    }, 650)
  }

  const getQuantity = (id) => cartItems.find((item) => item.id === id)?.quantity || 0

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <span className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={`full-${index}`} aria-hidden="true">★</span>
        ))}
        {halfStar && <span aria-hidden="true">☆</span>}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={`empty-${index}`} className="text-slate-300" aria-hidden="true">★</span>
        ))}
      </span>
    )
  }

  return (
    <section id="collection" className="bg-linear-to-b from-pink-50 via-white to-amber-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="inline-flex rounded-full bg-fuchsia-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-700">
            Coleção em destaque
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Nossos best-sellers para seu look
          </h2>
          <p className="max-w-2xl text-slate-600">
            Escolha peças com qualidade premium, design exclusivo e pronto para entrar em cena. Adicione ao pedido e envie direto no WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => {
            const quantity = getQuantity(product.id)
            return (
              <article
                key={product.id}
                className="relative group overflow-hidden rounded-4xl border border-pink-100 bg-white shadow-[0_30px_80px_rgba(236,72,153,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(236,72,153,0.18)]"
              >
                {product.discount && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-fuchsia-500/30">
                    -{product.discount}%
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-72 w-full object-cover brightness-95 transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                    <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-sm font-semibold text-fuchsia-700">
                      {product.price}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center justify-between gap-3 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      {renderStars(product.rating)}
                      <span className="text-slate-400">{product.rating.toFixed(1)}</span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Avaliação
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-7">{product.description}</p>
                  <button
                    type="button"
                    onClick={() => addItem(product)}
                    className="w-full rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-600"
                  >
                    {quantity > 0 ? `Adicionar mais (${quantity})` : 'Adicionar ao pedido'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          {visibleCount < collectionProducts.length ? (
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? 'Carregando mais...' : 'Carregar mais produtos'}
            </button>
          ) : (
            <span className="inline-flex items-center rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-600">
              Todos os produtos foram carregados
            </span>
          )}
        </div>
      </div>
    </section>
  )
}

export default Collection;
