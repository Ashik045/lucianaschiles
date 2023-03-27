import '@/styles/globals.css'
import { CartProvider } from '../../Context/CardContext'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider >
      <Component {...pageProps} />
  </CartProvider>
  )
}
