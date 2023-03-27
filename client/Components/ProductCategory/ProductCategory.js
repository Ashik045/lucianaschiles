/* eslint-disable react/no-array-index-key */
import styles from './productcategory.module.scss';

function ProductCategory({ categorBtn, filterItems }) {
    // console.log(filterItems);
    return (
        <div className={styles.btn_group}>
            {categorBtn.map((btns, index) => (
                <button
                    key={index}
                    className={styles.btn}
                    type="button"
                    onClick={() => filterItems(btns)}
                >
                    {btns}
                </button>
            ))}
        </div>
    );
}

export default ProductCategory;
