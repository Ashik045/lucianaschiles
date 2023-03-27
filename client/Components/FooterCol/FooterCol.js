/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import styles from './footercol.module.scss';

function FooterCol({ FooterDetail, title }) {
    return (
        <div className={styles.footer_col}>
            <h3>{title}</h3>
            {FooterDetail.map((items, i) => (
                <Link key={i} href={items.link} style={{ textDecoration: 'none' }}>
                    <p key={items.id}>{items.text}</p>
                </Link>
            ))}
        </div>
    );
}

export default FooterCol;
