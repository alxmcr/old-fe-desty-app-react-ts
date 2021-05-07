import styles from './HeroSection.module.css'

export function HeroSection() {
    return (
        <section>
            <h1 className={styles.HeroSectionTitle}>Desty</h1>
            <p className={styles.HeroSectionSlogan}>Explore the most fascinating places around the world where all of us live.</p>
            <a href="#places"
                className={styles.HeroSectionLinkCTA}
            >Explore</a>
            <a href="#subscription"
                className={styles.HeroSectionLink}
            >Subscribe! (+ stories)</a>
        </section>
    )
}