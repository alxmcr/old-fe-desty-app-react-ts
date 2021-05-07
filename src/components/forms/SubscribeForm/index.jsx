import styles from './SubscribeForm.module.css'

export function SubscribeForm() {
    return (
        <form className={styles.SubscribeForm}>
            <div className={styles.SubscribeFormInputGroup}>
                <label htmlFor="email"
                    className={styles.SubscribeFormLabel}>Email</label>
                <input type="email"
                    name="email"
                    id="email"
                    className={styles.SubscribeFormInput}
                />
            </div>
            <div>
                <button type="submit"
                    className={styles.SubscribeFormButton}>Subscribe</button>
            </div>
        </form>
    )
}