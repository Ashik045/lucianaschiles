import { FaGift, FaHeadset, FaMoneyCheck, FaShippingFast } from 'react-icons/fa';
import styles from './offers.module.scss';

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

function Offers() {
    return (
        <div className={styles.header_bottom}>
            {headerBottomDetails.map((details) => (
                <div
                    key={details.id}
                    className={details.id === 4 ? styles.header_btm_itemm : styles.header_btm_item}
                >
                    <span>{details.icon}</span>
                    <h4>{details.title}</h4>
                    <p>{details.subTitle}</p>
                </div>
            ))}
        </div>
    );
}

export default Offers;
