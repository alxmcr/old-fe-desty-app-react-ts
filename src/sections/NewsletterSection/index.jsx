import { SubscribeForm } from 'components/forms/SubscribeForm'
import styles from './NewsletterSection.modules.css'

export function NewsletterSection() {
    return (
        <section id="newsletter">
            <h2 className={styles.NewsletterSectionTitle}>Subscribe!</h2>
            <div>
                <p className="">Si te interesa leer las historias
                <span className="">más geniales e interesantes</span> de viajes, de la semana 👉.</p>
            </div>
            <SubscribeForm />
        </section>
    )
}