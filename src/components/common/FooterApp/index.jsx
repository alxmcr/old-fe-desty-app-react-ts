import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './FooterApp.module.css'

export function FooterApp() {
    return (
        <footer className={styles.FooterApp}>
            <ul className={styles.FooterAppList}>
                <li className={styles.FooterAppItem}>
                    <a href="https://github.com/alxmcr/desty-app"
                        className={styles.FooterAppLink}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className={styles.FooterAppItem}>
                    <a href="https://instagram.com/desty-app"
                        className={styles.FooterAppLink}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className={styles.FooterAppItem}>
                    <a href="https://facebook.com/desty-app"
                        className={styles.FooterAppLink}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li className={styles.FooterAppItem}>
                    <a href="https://twitter.com/desty-app"
                        className={styles.FooterAppLink}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li className={styles.FooterAppItem}>
                    <a href="https://linkedin.com/desty-app"
                        className={styles.FooterAppLink}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <div className="footer-copyright">
                Desty with <FontAwesomeIcon icon={faHeart} /> to everyone!
            </div>
        </footer>
    )
}