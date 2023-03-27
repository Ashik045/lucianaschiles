import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaAngleUp, FaShoppingCart, FaStream, FaTimes } from 'react-icons/fa';
import styles from './navbar.module.scss';

function Navbar() {
    const router = useRouter();
    const [toggler, setToggler] = useState(false);
    const [cartItem, setCartItem] = useState(0);
    const [toTop, setToTop] = useState(false);

    if (typeof window !== 'undefined') {
        window.onscroll = function () {
            if (document.body.scrollTop >= 450 || document.documentElement.scrollTop >= 450) {
                setToTop(true);
            } else {
                setToTop(false);
            }
        };
    }

    // Animation on the navbar and add go to the top button - when scrolling

    useEffect(() => {
        const items =
            typeof window !== 'undefined' && JSON.parse(localStorage.getItem('productlist'));
        setCartItem(items?.length);
        // console.log(cartItem);
    }, [cartItem]);

    const handleToggle = () => {
        setToggler(!toggler);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_main}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <div className={styles.brand}>
                        <h3>Lucianaschiles</h3>
                    </div>
                </Link>

                <div className={styles.menus}>
                    <div className={styles.menu_item}>
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <p className={router.pathname === '/' ? `${styles.active}` : ''}>
                                Home
                            </p>
                        </Link>
                        <Link href="/products" style={{ textDecoration: 'none' }}>
                            <p
                                className={
                                    router.pathname === '/products' ? `${styles.active}` : ''
                                }
                            >
                                Shop
                            </p>
                        </Link>
                        <Link href="/media" style={{ textDecoration: 'none' }}>
                            <p className={router.pathname === '/media' ? `${styles.active}` : ''}>
                                Media
                            </p>
                        </Link>
                        <Link href="/blogs" style={{ textDecoration: 'none' }}>
                            <p className={router.pathname === '/blogs' ? `${styles.active}` : ''}>
                                Blogs
                            </p>
                        </Link>
                        <Link href="/about" style={{ textDecoration: 'none' }}>
                            <p className={router.pathname === '/about' ? `${styles.active}` : ''}>
                                About Us
                            </p>
                        </Link>

                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <p className={router.pathname === '/contact' ? `${styles.active}` : ''}>
                                Contact
                            </p>
                        </Link>
                    </div>
                </div>

                <div className={styles.cart}>
                    <Link href="/cart" style={{ textDecoration: 'none' }}>
                        <FaShoppingCart className={styles.cart_icon} />
                        <span>{cartItem || 0}</span>
                    </Link>
                </div>

                {toggler ? (
                    <FaTimes onClick={handleToggle} className={styles.toggle_icon} size={22} />
                ) : (
                    <FaStream onClick={handleToggle} className={styles.toggle_icon} size={18} />
                )}
                {toggler && (
                    <div className={styles.res_menu}>
                        <div className={styles.res_menu_item}>
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <p className={router.pathname === '/' ? `${styles.active}` : ''}>
                                    Home
                                </p>
                            </Link>
                            <Link href="/products" style={{ textDecoration: 'none' }}>
                                <p
                                    className={
                                        router.pathname === '/products' ? `${styles.active}` : ''
                                    }
                                >
                                    Shop
                                </p>
                            </Link>
                            <Link href="/media" style={{ textDecoration: 'none' }}>
                                <p
                                    className={
                                        router.pathname === '/media' ? `${styles.active}` : ''
                                    }
                                >
                                    Media
                                </p>
                            </Link>

                            <Link href="/blogs" style={{ textDecoration: 'none' }}>
                                <p
                                    className={
                                        router.pathname === '/blogs' ? `${styles.active}` : ''
                                    }
                                >
                                    Blogs
                                </p>
                            </Link>
                            <Link href="/about" style={{ textDecoration: 'none' }}>
                                <p
                                    className={
                                        router.pathname === '/about' ? `${styles.active}` : ''
                                    }
                                >
                                    About
                                </p>
                            </Link>
                            <Link href="/contact" style={{ textDecoration: 'none' }}>
                                <p
                                    className={
                                        router.pathname === '/contact' ? `${styles.active}` : ''
                                    }
                                >
                                    Contact
                                </p>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {toTop && (
                <a href="#top">
                    <div className={styles.to_top}>
                        <FaAngleUp className={styles.to_top_icon} />
                    </div>
                </a>
            )}
        </div>
    );
}

export default Navbar;
