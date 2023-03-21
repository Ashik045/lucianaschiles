import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './specialproducts.module.scss'

const SpecialProducts = () => {
  return (
     <div className={styles.special_product}>
        <SectionHeader title="SPECIAL PRODUCTS" />

        <div className={styles.special_product__main}>
            <h1>product slide</h1>
        </div>
    </div>
  )
}

export default SpecialProducts