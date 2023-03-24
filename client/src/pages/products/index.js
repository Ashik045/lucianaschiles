import Head from "next/head";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from '../../styles/products.module.scss';

const index = ({poroducts}) => {
    console.log(poroducts);
  return (
    <div className={styles.product_page}>
        <Head>
            <title>Products</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className={styles.product_page_main}>
            <h1>products</h1>
        </div>
        <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/products/all')

    const data =    await res.json();
    const poroducts = data.message;

    return {
        props: {
            poroducts,
        }
    }
}