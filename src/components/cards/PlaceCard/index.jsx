import styles from './PlaceCard.module.css'

export function PlaceCard({ place }) {
    const { id, image, name, description } = place;
    return (
        <div id={id} className={styles.PlaceCard}>
            <img src={image} className={styles.PlaceImage} />
            <div>
                <h3 className={styles.PlaceName}>{name}</h3>
                <p className={styles.PlaceDescription}>{description}</p>
                <a href="#newsletter"
                    className={styles.PlaceLink}
                >More stories 🤩</a>
            </div>
        </div>
    )
}