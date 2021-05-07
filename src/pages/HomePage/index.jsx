import { HeroSection } from 'sections/HeroSection'
import { PlacesSection } from 'sections/PlacesSection'
import styles from './HomePage.module.css'

export function HomePage() {
    return (
        <div>
            <HeroSection />
            <PlacesSection />
        </div>
    )
}