import { useState, useMemo } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Collection from './components/Collection.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppWidget from './components/WhatsAppWidget.jsx'
import CartPage from './components/CartPage.jsx'

const App = () => {
  const [view, setView] = useState('home')
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

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
      <Header cartCount={cartCount} onNavigate={handleNavigate} view={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <Collection cartItems={cartItems} addItem={addItem} />
            <Gallery />
            <About />
            <Contact />
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
      <WhatsAppWidget cartItems={cartItems} />
    </div>
  )
}

export default App

