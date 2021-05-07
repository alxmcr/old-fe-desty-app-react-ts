import { HeroSection } from 'sections/HeroSection'
import { NewsletterSection } from 'sections/NewsletterSection'
import { PlacesSection } from 'sections/PlacesSection'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <div className={styles.HomePage}>
            <HeroSection />
            <PlacesSection />
            <NewsletterSection />
        </div>
    )
}