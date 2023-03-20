// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import Image from 'next/image';
import { FaGift, FaHeadset, FaMoneyCheck, FaShippingFast } from 'react-icons/fa';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import header1 from '../../images/header1.jpg';
import header2 from '../../images/header2.jpg';
import header3 from '../../images/header3.jpg';
import header4 from '../../images/header4.jpg';
import styles from './header.module.scss';

const headerBottomDetails = [
    {
        id: 1,
        title: 'Fast & Free Shipping Worldwide',
        subTitle: 'Your Order Over $50',
        icon: <FaShippingFast />,
    },
    {
        id: 2,
        title: 'Order Return Within 7 Days',
        subTitle: 'Money Back Guarantee!',
        icon: <FaMoneyCheck />,
    },
    {
        id: 3,
        title: '24/7 Online Customer Support',
        subTitle: 'Anytime Need Help?',
        icon: <FaHeadset />,
    },
    {
        id: 4,
        title: 'Gift Voucher On Your First Order',
        subTitle: 'Collect Free Gift Voucher',
        icon: <FaGift />,
    },
];

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

            <div className={styles.header_bottom}>
                {headerBottomDetails.map((details) => (
                    <div
                        key={details.id}
                        className={
                            details.id === 4 ? styles.header_btm_itemm : styles.header_btm_item
                        }
                    >
                        <span>{details.icon}</span>
                        <h4>{details.title}</h4>
                        <p>{details.subTitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;
