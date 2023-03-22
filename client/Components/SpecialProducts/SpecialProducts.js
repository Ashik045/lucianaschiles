import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './specialproducts.module.scss';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Product from '../Product/Product';

const SpecialProducts = ({products}) => {
  return (
     <div className={styles.special_product}>
        <SectionHeader title="SPECIAL PRODUCTS" />

        <div className={styles.special_product__main}>
          <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
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
                     modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {products?.map((product) => (
                        <SwiperSlide key={product._id} className={styles.slide}>
                            <Product product={product} scale />
                        </SwiperSlide>
                    ))}
            </Swiper>

            <div className={styles.special_product_discount}>

            </div>
        </div>
    </div>
  )
}

export default SpecialProducts