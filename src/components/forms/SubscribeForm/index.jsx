import { useState } from 'react';
import styles from './SubscribeForm.module.css'

export function SubscribeForm() {
    const [subscribing, setSubscribing] = useState(false);
    const [registered, setRegistered] = useState(false);

    const handlerSubscribeForm = (e) => {
        e.preventDefault();
        setSubscribing(true);
        setRegistered(true);
        setSubscribing(false);
    }

    if (subscribing) return <p className={styles.SubscribeFormInfoMessage}>You're subscribing to Desty...</p>

    if (registered) return <p className={styles.SubscribeFormOKMessage}>Thank you so much! you're registered!</p>

    return (
        <form className={styles.SubscribeForm} onSubmit={handlerSubscribeForm}>
            <div className={styles.SubscribeFormInputGroup}>
                <label htmlFor="email"
                    className={styles.SubscribeFormLabel}>Email</label>
                <input type="email"
                    name="email"
                    id="email"
                    className={styles.SubscribeFormInput}
                    placeholder="Enter your email here"
                />
            </div>
            <div className={styles.SubscribeFormActions}>
                <button type="submit"
                    className={styles.SubscribeFormButton}>Subscribe</button>
            </div>
        </form>
    )
}