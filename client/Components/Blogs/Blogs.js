import Blog from '../Blog/Blog';
import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './blogs.module.scss';

const Blogs = ({blogs}) => {
  console.log(blogs);
  return (
    <div className={styles.blog_sec}>
    <SectionHeader title="ALL BLOGS"/>
      <div className={styles.blog_sec_main}>
        {blogs.map((blog) => {
          return <Blog key={blog._id} blog={blog} />
        })}
      </div>
    </div>
  )
}

export default Blogs