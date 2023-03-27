import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './discount.module.scss';
// Import Swiper styles

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';
import brand6 from '../../images/brand6.png';

function Discount() {
    return (
        <div className={styles.discount}>
            <div className={styles.discount_main}>
                <div className={styles.discount_main_txt}>
                    <p>Flat 10% Discount</p>
                    <h1>Weekend Exchange Offer.</h1>
                    <div className={styles.discount_line} />
                    <p>HURRY UP!</p>
                </div>
            </div>

            <div className={styles.discount_main_brand}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.slide}>
                        <Image src={brand1} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Image src={brand2} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Image src={brand3} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Image src={brand4} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <Image src={brand5} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slidee}>
                        <Image src={brand6} alt="lucianaschiles-brand" height={60} width={170} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Discount;
