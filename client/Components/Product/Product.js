/* eslint-disable jsx-a11y/no-static-element-interactions */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { CartContext } from '../../Context/CardContext';
import styles from './product.module.scss';

function Product({ product, scale }) {
    const [cartItem, setCartItem] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    const { state, dispatch } = useContext(CartContext);

    useEffect(() => {
        const items =
            typeof window !== 'undefined' && JSON.parse(localStorage.getItem('productlist'));
        setCartItem(items);
    }, []);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        width: '15rem',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    // product functionalities

    const isTrueFalse = cartItem.find((pr) => pr._id === product._id);

    const addToCart = () => {
        const date = new Date().getMilliseconds();
        const mainProduct = {
            ...product,
            id: `${product._id}-${date}`,
            quantity,
        };

        try {
            dispatch({ type: 'ADD_TO_LIST', payload: mainProduct });

            Toast.fire({
                icon: 'success',
                title: 'Added to Cart',
            });

            router.push('/cart');
        } catch (error) {
            console.log(error);
        }
    };
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
            <p>
                <FaStar className={styles.star_icon} /> <FaStar className={styles.star_icon} />{' '}
                <FaStar className={styles.star_icon} /> <FaStar className={styles.star_icon} />{' '}
                <FaStar className={styles.star_icon} />
            </p>
            <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                <h3 className={styles.productt_title}>{product.title}</h3>
            </Link>

            <span>
                USD <b style={{ marginLeft: '4px' }}> {product.price}</b>
            </span>

            <div className={styles.product_icons}>
                <Link href="favourite" style={{ textDecoration: 'none' }}>
                    <div className={styles.heart}>
                        <FaRegHeart />
                    </div>
                </Link>

                {/* add to card funtionality should be added */}
                <div
                    className={styles.cart}
                    onClick={addToCart}
                    disabled
                    style={{ cursor: isTrueFalse ? 'not-allowed' : 'pointer' }}
                >
                    <FaCartPlus />
                </div>
                <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                    <div className={styles.eye}>
                        <FaRegEye />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Product;
