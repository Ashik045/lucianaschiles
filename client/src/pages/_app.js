/* eslint-disable react/jsx-props-no-spreading */
import { CartProvider } from '../../Context/CardContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}
