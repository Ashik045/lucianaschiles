import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus, FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa';
import styles from './product.module.scss';

const Product = ({product, scale}) => {
  return (
    <div className={styles.productt}>
            <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                <Image
                    src={product.images[0]}
                    className={scale ? styles.productt_img : styles.product_imgg}
                    height={250}
                    width={270}
                    alt="chiles product"
                    objectFit="cover"
                />
            </Link>
            <p><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
            <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                <h3 className={styles.productt_title}>{product.title}</h3>
            </Link>
            
            <span>
                USD <b style={{ marginLeft: '4px' }}> {product.price}</b>
            </span>

            <div className={styles.product_icons}>
                <Link href="favourite" style={{textDecoration: 'none'}}>
                    <div className={styles.heart}><FaRegHeart /></div>
                </Link>

                {/* add to card funtionality should be added */}
                    <div className={styles.cart}><FaCartPlus /></div>
                <Link href={`/products/${product._id}`} style={{textDecoration: 'none'}}>
                    <div className={styles.eye}><FaRegEye /></div>
                </Link>
            </div>
        </div>
    );
}

export default Product