/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-underscore-dangle */
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Navbar/Navbar';
import { CartContext } from '../../../Context/CardContext';
import styles from '../../styles/cart.module.scss';

const index = () => {
    const [cartItem, setCartItem] = useState([]);
    const [shippingPrice, setShippingPrice] = useState(5);
    const [quantitty, setQuantitty] = useState(1);
    const [subTotal, setSubTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const location = useRouter();
    // const [quantitty, setQuantitty] = useState(item.quantity || 1);
    const { dispatch } = useContext(CartContext);

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        width: '18rem',
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    // get all the products from the localstorage
    useEffect(() => {
        const fetchData = async () => {
            const items =
                (await typeof window) !== 'undefined' &&
                JSON.parse(localStorage.getItem('productlist'));
            setCartItem(items);
        };
        fetchData();
    }, []);

    // filter the product price and and calculate the total price
    useEffect(() => {
        const stotal = cartItem?.map((item, i) =>
            // console.log(item[0]);
            (item.price * item.quantity).toFixed(2)
        );

        const subTotalVal = stotal.reduce(
            (prevValue, currValue) => (Number(prevValue) + Number(currValue)).toFixed(2),
            0
        );
        setSubTotal(subTotalVal);
        // console.log(subTotalVal);

        setTotalPrice(Number(subTotal) + Number(shippingPrice));
    });

    // the function checks the duplicates items. But no need ot use it for now. I have checked if the product already exists or not, on the product detail page.

    // const filteredProduct = cartItem.filter((value, index) => {
    //   return cartItem.indexOf(value) === index;
    // });

    // Something wrong with the quantity state(when updating the quantity its removed)
    const handleClick = (state, itemId) => {
        const newProduct = cartItem.map((product) => {
            let newItem;
            if (state === 'i' && product._id === itemId) {
                newItem = {
                    ...product,
                    quantity: Number(product.quantity) + 1,
                };
                location.reload();
                console.log(newItem);
                return newItem;
            }
            if (state === 'd' && product._id === itemId) {
                newItem = {
                    ...product,
                    quantity: Number(product.quantity) - 1,
                };
                location.reload();
                console.log(newItem);
                return newItem;
            }
            return { ...product };
        });
        dispatch({ type: 'UPDATE_QUANTITY', payload: newProduct });
    };

    // remove cart from localStorage when user click on remove button
    const removeFromCart = (id) => {
        try {
            dispatch({ type: 'REMOVE_FROM_LIST', payload: id });

            Toast.fire({
                icon: 'success',
                title: 'Delete From Cart',
            });
            location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const stripePromise = loadStripe('pk_live_vWuEWltsTn2in7fvcYUwvkfx');

    // Need to update
    const handleCheckout = async () => {
        try {
            setLoading(true);
            await fetch('https://lucianaschiles-backend.onrender.com/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: cartItem }),
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.url) {
                        window.location.assign(response.url); // after successful forwarding user to stripe
                    }
                });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className={styles.cart_page}>
            <Head>
                <title>Lucianaschiles - Cart</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.cart_page_main}>
                <div className={styles.cart_page_main_cart}>
                    {cartItem.length === 0 ? (
                        <div className={styles.cart_page_empty}>
                            <h3>Your cart is empty!!</h3>
                            <p>
                                Find Products{' '}
                                <Link href="/products" style={{ textDecoration: 'underline' }}>
                                    Here.
                                </Link>
                            </p>
                        </div>
                    ) : (
                        cartItem.map((item) => (
                            <div key={item._id}>
                                <div className={styles.carts_product}>
                                    <Link href={`/products/${item._id}`}>
                                        <Image
                                            src={item.images[0]}
                                            className={styles.carts_product_img}
                                            alt="cart img"
                                            height={170}
                                            width={190}
                                        />
                                    </Link>

                                    <div className={styles.carts_product_txt}>
                                        <Link
                                            href={`/products/${item._id}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <h3>{item.title}</h3>
                                        </Link>
                                        <p className={styles.price}>
                                            USD{' '}
                                            <b style={{ fontSize: '17px' }}>
                                                {(item.price * item.quantity).toFixed(2)}
                                            </b>
                                        </p>

                                        <div className={styles.carts_product_txt_btm}>
                                            <p>
                                                <FaMinus
                                                    className={styles.carts_quantity}
                                                    style={{
                                                        display:
                                                            item.quantity > 1 ? 'block' : 'none',
                                                    }}
                                                    onClick={() => handleClick('d', item._id)}
                                                />{' '}
                                                <span>{item.quantity}</span>{' '}
                                                <FaPlus
                                                    className={styles.carts_quantity}
                                                    style={{
                                                        display:
                                                            item.quantity < 20 ? 'block' : 'none',
                                                    }}
                                                    onClick={() => handleClick('i', item._id)}
                                                />{' '}
                                            </p>

                                            <button
                                                type="submit"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))
                    )}
                </div>

                {cartItem.length !== 0 && (
                    <div className={styles.cart_page_checkout}>
                        <h2>Order Info</h2>
                        <div className={styles.checkout_detail}>
                            <p>Total item </p>
                            <p>{cartItem.length}</p>
                        </div>
                        <div className={styles.checkout_detail}>
                            <p>Subtotal </p>
                            <p>USD {subTotal}</p>
                        </div>
                        <div className={styles.checkout_detail}>
                            <p>Shipping Price </p>
                            <p>USD {shippingPrice}</p>
                        </div>
                        <hr />
                        <div className={styles.checkout_detail}>
                            <p>Total Price </p>
                            <span>USD {totalPrice}</span>
                        </div>

                        <button
                            type="button"
                            onClick={handleCheckout}
                            style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                        >
                            {loading ? 'Loading..' : `Checkout USD ${totalPrice}`}{' '}
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default index;
