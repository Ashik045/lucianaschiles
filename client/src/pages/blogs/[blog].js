/* eslint-disable react/no-array-index-key */
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../../Components/Footer/Footer';
import Navbar from '../../../Components/Navbar/Navbar';
import styles from '../../styles/blogdetail.module.scss';

const blogDetails = ({ blog }) => (
    <div className={styles.blog_details}>
        <Head>
            <title>Lucianaschiles - Blog</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className={styles.blog_details_main}>
            <h1>{blog.title}</h1>
            <p className={styles.blog_date}>
                Date: <b>{new Date(blog.createdAt).toDateString()}</b>
            </p>

            <div className={styles.blog_details_imgs}>
                <Image
                    src={blog.image}
                    className={styles.blog_details_img}
                    height={600}
                    width={1200}
                    layout="responsive"
                />
            </div>

            <div className={styles.blog_details_text}>
                {blog.desc.map((des, i) => (
                    <p key={i}>{des}</p>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);

export default blogDetails;

export async function getStaticPaths() {
    const res = await fetch('https://lucianaschiles-backend.onrender.com/api/blogs/all');

    const data = await res.json();
    const blogs = data.message;

    const paths = blogs.map((items) => ({
        params: {
            blog: items._id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;

    const res = await fetch(`https://lucianaschiles-backend.onrender.com/api/blogs/${params.blog}`);

    const data = await res.json();

    const blog = data.message;
    return {
        props: {
            blog: blog || null,
        },
    };
}
