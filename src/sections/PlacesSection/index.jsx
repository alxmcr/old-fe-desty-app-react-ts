import { PlacesGrid } from 'components/grids/PlacesGrid'
import styles from './PlacesSection.module.css'

export function PlacesSection() {
    return (
        <section id="places">
            <h2>Places</h2>
            <PlacesGrid />
        </section>
    )
}