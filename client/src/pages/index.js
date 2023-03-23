import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Blogs from '../../Components/Blogs/Blogs';
import Discount from '../../Components/Discount/Discount';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Popup from '../../Components/Popup/Popup';
import Products from '../../Components/Products/Products';
import Reviews from '../../Components/Reviews/Reviews';
import SpecialProducts from '../../Components/SpecialProducts/SpecialProducts';

const inter = Inter({ subsets: ['latin'] });

export default function Home({products, blogs}) {
    const [open, setOpen] = useState(true);
    const closeModal = () => setOpen(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);

      const handleClose = () => {
        setIsOpen(false);
      };

    return (
        <>
            <Head>
                <title>Lucianaschiles</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

                <Navbar />
                {isOpen && <Popup handleClose={handleClose} />} 
                <Header />
                <Products products={products} />
                {/* <Offers /> */}
                <Reviews />
                <Discount />
                <SpecialProducts products={products} />
                <Blogs blogs={blogs} />
                <NewsLetter />
                <Footer />
            </main>
        </>
    );
}

// fetch all the necessary items
export async function getStaticProps() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/products/all')
    const res2 = await fetch('https://lucianaschiles-backend.onrender.com/api/blogs/all')

    const data = await res.json();
    const data2 = await res2.json();

    const products = data.message;
    const blogs = data2.message;
    return {
      props: {
        products: products.slice(0, 8) || null,
        blogs: blogs.slice(0, 6) || null,
      },
    }
};