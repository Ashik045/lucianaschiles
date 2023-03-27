import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './newsletter.module.scss';

function NewsLetter() {
    const [email, setEmail] = useState('');
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
            Toast.fire({
                icon: 'success',
                title: 'Subscribed successfully',
            });

            console.log(email);
        } catch (error) {
            console.log(error);
        }
        setEmail('');
    };
    return (
        <div className={styles.newsletter}>
            <div className={styles.newsletter_main}>
                <div className={styles.left}>
                    <h1>Subscribe for every updates and offers.</h1>
                </div>

                <div className={styles.right}>
                    <form action="" className={styles.right_form} onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email.."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;
