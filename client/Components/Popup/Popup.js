/* eslint-disable jsx-a11y/no-static-element-interactions */
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import styles from './popup.module.scss';

function Popup({ handleClose, setIsOpen }) {
    const [email, setEmail] = useState('');
    const form = useRef();

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: '250px',
        padding: '.25rem',
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    //   send the email to owners emila
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            emailjs
                .sendForm('service_oa2im2q', 'template_l5cjev4', form.current, 'mqlVmI9Fm3eB-SSCf')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

            Toast.fire({
                icon: 'success',
                title: 'Subscribed Successfully.',
            });

            setIsOpen(false);

            setEmail('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup}>
                <span onClick={handleClose}>
                    <FaTimes />
                </span>
                <h2>JOIN US TODAY!</h2>
                <p>Get 15% off your purchase.</p>
                <form ref={form} className={styles.right_form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email.."
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input type="submit" value="Subscribe" />
                </form>

                <p className={styles.checkbox}>
                    <input type="checkbox" /> Notify me about related content and special offers.
                </p>

                <p>A once a week date in your inbox</p>
                <p>Sign up for recipes, natural remedies, inspiration and exclusive promotions.</p>
            </div>
        </div>
    );
}

export default Popup;
