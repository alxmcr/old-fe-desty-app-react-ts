import styles from './HeroSection.module.css'

export function HeroSection() {
    return (
        <section className={styles.HeroSection}>
            <h1 className={styles.HeroSectionTitle}>Desty</h1>
            <p className={styles.HeroSectionSlogan}>Explore the most fascinating places around the world where all of us live.</p>
            <div className={styles.HeroSectionActions}>
                <a href="#places"
                    className={styles.HeroSectionLinkCTA}
                >Explore</a>
                <a href="#subscription"
                    className={styles.HeroSectionLink}
                >Subscribe! (+ stories)</a>
            </div>
        </section>
    )
}