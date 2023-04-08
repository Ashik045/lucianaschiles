import Link from 'next/link';
import { AiOutlineCopyright } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterCol from '../FooterCol/FooterCol';
import styles from './footer.module.scss';

const FooterDetail1 = [
    {
        id: 1,
        link: '/about',
        text: 'About Us',
    },
    {
        id: 2,
        link: '/',
        text: 'Home',
    },
    {
        id: 3,
        link: '/contact',
        text: 'Contact',
    },
    {
        id: 4,
        link: '/blogs',
        text: 'Blogs',
    },
    {
        id: 5,
        link: '/media',
        text: 'Media',
    },
];

const FooterDetail2 = [
    {
        id: 1,
        link: '/products',
        text: 'Products',
    },
    {
        id: 2,
        link: '/about',
        text: 'About',
    },
    {
        id: 5,
        link: '/contact',
        text: 'Contact Us',
    },
];

function Footer() {
    return (
        <div className={styles.footer_sec}>
            <div className={styles.footer_sec_bg_img} />
            <div className={styles.footer_sec_main}>
                <div className={styles.first_col}>
                    <div className={styles.first_col_brand}>
                        {/* <Image src={brand} alt="footer-brand" height={35} width={35} /> */}
                        <h2>Lucianaschiles</h2>
                    </div>
                    <p>
                        Luciana&apos;s Chiles & Spices is dedicated to offering all-natural Mexican
                        dry chiles and exquisite botanicals, such as Flor de Jamaica, for an
                        authentic culinary experience. Immerse yourself in the vibrant flavors and
                        rich traditions of Mexico through our carefully curated selection of chiles,
                        spices, and unique botanicals.
                    </p>
                    <span>
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebook className={styles.body_iconss} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter className={styles.body_iconss} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <FaInstagram className={styles.body_iconss} />
                        </Link>
                    </span>
                </div>

                <FooterCol FooterDetail={FooterDetail2} title="Services" />
                <FooterCol FooterDetail={FooterDetail1} title="Basic Info" />

                <div className={styles.second_col}>
                    <h3>Contact</h3>
                    <p>Mexico, US</p>
                    <p>+880000000000</p>
                    <p className={styles.second_col_email}>Office@merchantquickfix.com</p>
                </div>
            </div>

            <div className={styles.footer_sec_btm}>
                <div className={styles.footer_sec_btm_line} />
                <p>
                    <AiOutlineCopyright style={{ marginRight: '3px' }} /> Copyrights Lucianaschiles
                    2023. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
