import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import styles from './popup.module.scss';

const Popup = ({ handleClose}) => {
    const [email, setEmail] = useState('')
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: "250px",
        padding: '.25rem',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    //   send the email to owners emila
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            Toast.fire({
                icon: 'success',
                title: 'Subscribed successfully!'
              })

              console.log(email);
        } catch (error) {
            console.log(error);
        }
        setEmail('')
    }

    return (
        <div className={styles.popup_background}>
            <div className={styles.popup} >
                <span onClick={handleClose}><FaTimes /></span>
                <h2>Join Our Newsletter Now</h2>
                    <form action="" className={styles.right_form} onSubmit={handleSubmit}>
                        <input type="email" placeholder='Enter your email..' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="submit" value="Subscribe"/>
                    </form>

                    <p className={styles.checkbox}><input type="checkbox"  /> Notify me about related content and special offers.</p>

                <p>If you opt in above we use this information send related content, discounts and other special offers.</p>
            </div>
        </div>
    );
};

export default Popup;
