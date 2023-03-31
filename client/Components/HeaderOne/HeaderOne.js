import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import Link from 'next/link';
import { Navigation, Pagination, Parallax } from 'swiper';
import Offers from '../Offers/Offers';
import styles from './headerone.module.scss';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeaderOne() {
    return (
        <div className={styles.header}>
            <div className={styles.header_main}>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax
                    pagination={{
                        clickable: true,
                    }}
                    navigation
                    modules={[Parallax, Pagination, Navigation]}
                    className={styles.mySwiper}
                >
                    <div className={styles.parallax_bg_main} data-swiper-parallax="-23%">
                        <div
                            slot="container-start"
                            className={styles.parallax_bg}
                            style={{
                                'background-image':
                                    'url(https://res.cloudinary.com/drbvugloj/image/upload/v1680293567/headerbg_yixfjh.jpg)',
                                backgroundPosition: 'center',
                                OObjectFit: 'cover',
                            }}
                        />
                    </div>
                    <SwiperSlide className={styles.slide}>
                        <div data-swiper-parallax="-300" className={styles.slide_txt}>
                            <h1>Exquisite Spices & Seasonings</h1>

                            <p>
                                Luciana&apos;s Chiles & Spices is dedicated to offering all-natural
                                Mexican dry chiles and exquisite botanicals, such as Flor de
                                Jamaica, for an authentic culinary experience. Immerse yourself in
                                the vibrant flavors and rich traditions of Mexico through our
                                carefully curated selection of chiles, spices, and unique
                                botanicals.
                            </p>

                            <Link href="/products">
                                <button type="button">Purchase now</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div data-swiper-parallax="-300" className={styles.slide_txt}>
                            <h1>Awesome Taste & Real Spices</h1>

                            <p>
                                Luciana&apos;s Chiles & Spices is dedicated to offering all-natural
                                Mexican dry chiles and exquisite botanicals, such as Flor de
                                Jamaica, for an authentic culinary experience. Immerse yourself in
                                the vibrant flavors and rich traditions of Mexico through our
                                carefully curated selection of chiles, spices, and unique
                                botanicals.
                            </p>

                            <Link href="/products">
                                <button type="button">Purches now</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <div data-swiper-parallax="-300" className={styles.slide_txt}>
                            <h1>Premium Quality & Products</h1>

                            <p>
                                Luciana&apos;s Chiles & Spices is dedicated to offering all-natural
                                Mexican dry chiles and exquisite botanicals, such as Flor de
                                Jamaica, for an authentic culinary experience. Immerse yourself in
                                the vibrant flavors and rich traditions of Mexico through our
                                carefully curated selection of chiles, spices, and unique
                                botanicals.
                            </p>

                            <Link href="/products">
                                <button type="button">Purches now</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* <h4 className={styles.intro}>
                Luciana&apos;s Chiles & Spices is dedicated to offering all-natural Mexican dry
                chiles and exquisite botanicals, such as Flor de Jamaica, for an authentic culinary
                experience. Immerse yourself in the vibrant flavors and rich traditions of Mexico
                through our carefully curated selection of chiles, spices, and unique botanicals.
            </h4> */}

            <Offers />
        </div>
    );
}

export default HeaderOne;
