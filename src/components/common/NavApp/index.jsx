import styles from './NavApp.module.css'

export function NavApp({ showMenu = true }) {
    const navAppStyles = showMenu ? styles.navAppShow : styles.navApp;
    return (
        <nav className={navAppStyles}>
            <ul className={styles.NavigationList}>
                <li className={styles.NavigationItem}>
                    <a href="/" className={styles.NavigationLink} >Home</a>
                </li>
                <li className={styles.NavigationItem}>
                    <a href="#places" className={styles.NavigationLink}>Places</a>
                </li>
                <li className={styles.NavigationItem}>
                    <a href="#new-city" className={styles.NavigationLink}>+Cities</a>
                </li>
                <li className={styles.NavigationItem}>
                    <a href="#newsletter" className={styles.NavigationLinkCTA}>Newsletter</a>
                </li>
            </ul>
        </nav>
    )
}