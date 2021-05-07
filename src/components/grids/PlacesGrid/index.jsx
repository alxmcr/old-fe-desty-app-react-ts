import { PlaceCard } from 'components/cards/PlaceCard';
import { usePlaces } from 'hooks/usePlaces'
import styles from './PlacesGrid.module.css'

export function PlacesGrid() {
    const { loading, places } = usePlaces();
    if (loading) return <p>Loading places...</p>
    return (
        <div className={styles.PlacesGrid}>
            {
                places.map(place => <PlaceCard key={place.id} place={place} />)
            }
        </div>
    )
}