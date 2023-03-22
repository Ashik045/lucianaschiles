import { Swiper, SwiperSlide } from "swiper/react";
import Blog from '../Blog/Blog';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './blogs.module.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css"

// import required modules
import { Autoplay, Pagination } from "swiper";

const Blogs = ({blogs}) => {
  console.log(blogs);
  return (
    <div className={styles.blog_sec}>
    <SectionHeader title="ALL BLOGS"/>
      <div className={styles.blog_sec_main}>
      <Swiper
            slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        >
        {blogs.map((blog) => {
          return <SwiperSlide className={styles.blog_sec_slide}>
              <Blog key={blog._id} blog={blog} /> 
            </SwiperSlide>
        })}
        </Swiper>
      </div>
    </div>
  )
}

export default Blogs