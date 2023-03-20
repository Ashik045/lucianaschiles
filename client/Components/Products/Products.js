import Product from '../Product/Product';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './products.module.scss';

function Products({products}) {
    return (
        <div className={styles.product_sec}>
            <SectionHeader title="TOP PRODUCTS" />

            <div className={styles.buttons}>
                <h2>buttons</h2>
            </div>
            <div className={styles.product_sec_main}>
                {products.map((product) => {
                    return <Product key={product.id} product={product} scale />
                })}
            </div>
        </div>
    );
}

export default Products;
