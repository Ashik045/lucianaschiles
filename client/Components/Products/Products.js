import { useState } from 'react';
import Product from '../Product/Product';
import ProductCategory from '../ProductCategory/ProductCategory';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './products.module.scss';

function Products({products}) {
    const [items, setItems] = useState(products);
    const [ctBtn, setCtBtn] = useState("FEATURED");
    const categoryBtn = ['FEATURED', ...new Set(products.map((item) => item.category && item.category))];


    const filterItems = (categorys) => {
        if (categorys === 'FEATURED') {
            setItems(products);
            return;
        }
        setCtBtn(categorys)
        const newItems = products.filter((item) => item.category === categorys);
        setItems(newItems);
        // console.log(ctBtn);
    };

    return (
        <div className={styles.product_sec}>
            <SectionHeader title="TOP PRODUCTS" />

            <div className={styles.buttons}>
                <ProductCategory categorBtn={categoryBtn} filterItems={filterItems} ctBtn={ctBtn} />
            </div>
            <div className={styles.product_sec_main}>
                {items.map((product) => {
                    return <Product key={product.id} product={product} scale />
                })}
            </div>
        </div>
    );
}

export default Products;
