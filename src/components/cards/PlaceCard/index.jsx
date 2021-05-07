import styles from './PlaceCard.module.css'

export function PlaceCard({ place }) {
    const { id, image, name, description } = place;
    return (
        <div id={id} className={styles.PlaceCard}>
            <img src={image} className={styles.PlaceImage} alt={description} />
            <div className={styles.PlaceCardBody}>
                <h3 className={styles.PlaceName}>{name}</h3>
                <div className={styles.PlaceCardBody}>
                    <p className={styles.PlaceDescription}>{description}</p>
                </div>
                <a href="#newsletter"
                    className={styles.PlaceLinkCTA}
                >More stories 🤩</a>
            </div>
        </div>
    )
}