import { useState, useMemo, Suspense, lazy } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Collection from './components/Collection.jsx'
import Footer from './components/Footer.jsx'
import MobileBottomBar from './components/MobileBottomBar.jsx'
import WhatsAppWidget from './components/wataspp.jsx'
import InstagramFloat from './components/InstagramFloat.jsx'
import CartPage from './components/CartPage.jsx'

// Lazy load components below the fold
const Gallery = lazy(() => import('./components/Gallery.jsx'))
const Testimony = lazy(() => import('./components/Testimony.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16 sm:py-20 flex items-center justify-center">
    <div className="animate-pulse space-y-4 w-full max-w-2xl px-4">
      <div className="h-12 bg-slate-200 rounded-lg"></div>
      <div className="h-6 bg-slate-100 rounded-lg"></div>
    </div>
  </div>
)

const App = () => {
  const [view, setView] = useState('home')
  const [cartItems, setCartItems] = useState([])
  const [favoriteIds, setFavoriteIds] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const favoriteCount = favoriteIds.length

  const toggleFavorite = (productId) => {
    setFavoriteIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    )
  }

  const handleNavigate = (target) => {
    if (target === 'cart') {
      setView('cart')
      return
    }

    setView('home')
    setTimeout(() => {
      const section = document.querySelector(target)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 120)
  }

  const addItem = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeItem = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId))
  }

  const clearCart = () => setCartItems([])

  return (
    <div className="min-h-screen bg-amber-50 text-slate-900">
      <Header cartCount={cartCount} favoriteCount={favoriteCount} onNavigate={handleNavigate} view={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <Collection
              cartItems={cartItems}
              addItem={addItem}
              favoriteIds={favoriteIds}
              toggleFavorite={toggleFavorite}
            />
            <Suspense fallback={<SectionLoader />}>
              <Gallery />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Testimony />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>
          </>
        ) : (
          <CartPage
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
            onBackHome={() => setView('home')}
          />
        )}
      </main>
      <Footer />
      <MobileBottomBar cartCount={cartCount} onNavigate={handleNavigate} />
      <WhatsAppWidget cartItems={cartItems} />
      <InstagramFloat />
    </div>
  )
}

export default App

