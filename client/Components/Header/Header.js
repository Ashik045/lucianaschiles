// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import Image from 'next/image';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import header1 from '../../images/header1.jpg';
import header2 from '../../images/header2.jpg';
import header3 from '../../images/header3.jpg';
import header4 from '../../images/header4.jpg';
import Offers from '../Offers/Offers';
import styles from './header.module.scss';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_main}>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    effect="fade"
                    modules={[EffectFade, Pagination, Autoplay]}
                    loop
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.slidee}>
                        <Image
                            src={header1}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            layout="responsive"
                            width={1250}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slidee}>
                        <Image
                            src={header2}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slidee}>
                        <Image
                            src={header3}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slidee}>
                        <Image
                            src={header4}
                            alt="jewelry img"
                            className={styles.header_img}
                            height={600}
                            width={1250}
                            layout="responsive"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <Offers />
        </div>
    );
}

export default Header;
