import Image from "next/image"
import Link from "next/link"
import styles from './blog.module.scss'

const Blog = ({blog}) => {
  return (
    <div className={styles.blog}>
            <Link href={`/blogs/${blog._id}`}>
                <Image
                    src={blog.image}
                    className={styles.blog_image}
                    alt="web blogs"
                    width={280}
                    height={190}
                    objectFit="cover"
                    layout="responsive"
                />
            </Link>
            <div className={styles.blog_info}>
              <p className={styles.blog_date}><b>{new Date(blog.createdAt).toDateString()}</b></p>
              <Link href={`/blogs/${blog._id}`} style={{textDecoration: 'none'}}>
                  <h2>{blog.title}</h2>
              </Link>
              <p>{blog.desc[0]}</p>

              <Link href={`/blogs/${blog._id}`} style={{textDecoration: 'none'}}>
                <p className={styles.read_btn}>Read More..</p>
              </Link>
            </div>
        </div>
  )
}

export default Blog