import { SubscribeForm } from 'components/forms/SubscribeForm'
import styles from './NewsletterSection.module.css'

export function NewsletterSection() {
    return (
        <section id="newsletter" className={styles.NewsletterSection}>
            <h2 className={styles.NewsletterSectionTitle}>Subscribe!</h2>
            <p className={styles.NewsletterSectionDescription}>
                If you are interested in reading the coolest and most interesting travel stories of the week 👉.
            </p>
            <SubscribeForm />
        </section>
    )
}