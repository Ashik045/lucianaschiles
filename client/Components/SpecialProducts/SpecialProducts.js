import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper';

// Import Swiper styles
import { useRouter } from 'next/router';
import { FaCarSide } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Product from '../Product/Product';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './specialproducts.module.scss';

function SpecialProducts({ products }) {
    const router = useRouter();
    const handlePurchase = () => {
        router.push('/cart');
    };
    return (
        <div className={styles.special_product}>
            <SectionHeader title="SPECIAL PRODUCTS" />

            <div className={styles.special_product__main}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    freeMode
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products?.map((product) => (
                        <SwiperSlide key={product._id} className={styles.slide}>
                            <Product product={product} scale />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.special_product_discount}>
                    <span>
                        <FaCarSide />
                    </span>
                    <h1>Flat Discount & Super First Delivery.</h1>
                    <button onClick={handlePurchase} type="button" className={styles.purches_btn}>
                        PURCHASE NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SpecialProducts;
