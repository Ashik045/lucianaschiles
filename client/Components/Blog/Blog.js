import Image from "next/image"
import Link from "next/link"
import styles from './blog.module.scss'

const Blog = ({blog}) => {
  return (
    <div className={styles.blog_component}>
            <Link href={`/blogs/${blog._id}`}>
                <Image
                    src={blog.image}
                    className={styles.image}
                    alt="web blogs"
                    width={400}
                    height={300}
                    objectFit="cover"
                />
            </Link>
            <Link href={`/blogs/${blog._id}`}>
                <h2>{blog.title}</h2>
            </Link>
            <p>{blog.desc[0]}</p>
        </div>
  )
}

export default Blog