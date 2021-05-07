import styles from './PlaceCard.module.css'

export function PlaceCard({ place }) {
    const { id, image, name, description } = place;
    return (
        <div id={id}>
            <img src={image} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href="#newsletter">More stories 🤩</a>
            </div>
        </div>
    )
}