import Blog from '../Blog/Blog';
import styles from './blogs.module.scss';

const Blogs = ({blogs}) => {
  console.log(blogs);
  return (
    <div className={styles.blog_sec}>
      <div className={styles.blog_sec_main}>
        {blogs.map((blog) => {
          return <Blog key={blog._id} blog={blog} />
        })}
      </div>
    </div>
  )
}

export default Blogs