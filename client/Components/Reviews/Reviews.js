import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import man1 from '../../images/man1.jpg';
import man2 from '../../images/man2.jpg';
import woman1 from '../../images/woman1.jpg';
import woman2 from '../../images/woman2.jpg';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './reviews.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import "./styles.css"

// import required modules

// fake data - should be added from database
const reviewDetails = [
    {
        id: 1,
        title: 'Amazing selection of chiles! I was able to find everything I needed for my recipe and more. Lucianaschiles has the freshest and most flavorful chiles I have ever tasted. Their selection of chiles is second to none, and the quality is consistently top-notch.',
        image: man1,
        name: 'Brandon Thomas',
    },
    {
        id: 2,
        title: 'Lucianaschiles is the ultimate destination for any chile lover. Their selection is unmatched, with everything from mild to scorching hot varieties. I highly recommend this shop for anyone looking to add some heat and complexity to their dishes.',
        image: woman1,
        name: 'Joshua Lee',
    },
    {
        id: 3,
        title: 'I recently discovered Lucianaschiles, and I am so glad I did. The shop has a cozy, welcoming atmosphere. But what really sets them apart is the quality of their chiles. They are incredibly fresh and flavorful, and the selection is outstanding. Highly recommend this shop for any home cook.',
        image: woman2,
        name: 'Samantha Rodriguez',
    },
    {
        id: 4,
        title: 'Lucianaschiles is a must-visit for any foodie or home cook. Their selection of chiles is vast and varied, and the quality is superb. I particularly love their range of dried chiles, which are perfect for adding depth and complexity to dishes.',
        image: man2,
        name: 'Kevin Wong',
    },
];

function Reviews() {
    return (
        <div className={styles.review_sec}>
            <SectionHeader title="HAPPY CLIENT" />

            <div className={styles.review_sec_main}>
                <Swiper
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {reviewDetails.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className={styles.review} key={review.id}>
                                <span>
                                    <FaQuoteLeft size={24} />
                                </span>
                                <Image
                                    src={review.image}
                                    width={100}
                                    height={100}
                                    alt="product review"
                                    className={styles.review_image}
                                />
                                <p>{review.title}</p>
                                <h3>- {review.name}.</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Reviews;
