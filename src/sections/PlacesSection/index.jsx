import { PlacesGrid } from 'components/grids/PlacesGrid'
import styles from './PlacesSection.module.css'

export function PlacesSection() {
    return (
        <section id="places">
            <h2 className={styles.PlacesSectionTitle}>Places</h2>
            <PlacesGrid />
        </section>
    )
}