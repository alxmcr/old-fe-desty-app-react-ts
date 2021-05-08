import { faBars, faPlaneDeparture, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import styles from './BrandNavApp.module.css'

export function BrandNavApp({ showMenu, setShowMenu }) {
    const handlerShowMenu = () => setShowMenu(true)
    const handlerHiddenMenu = () => setShowMenu(false)

    return (
        <div className={styles.BrandNavApp}>
            <NavLink to="/"
                className={styles.BrandNavAppLink}>
                <i className={styles.BrandNavAppIcon}>
                    <FontAwesomeIcon icon={faPlaneDeparture} />
                </i>
                <span className={styles.BrandNavAppName}>Desty</span>
            </NavLink>

            {!showMenu
                ? <button
                    className={styles.brandNavButton}
                    onClick={handlerShowMenu}
                    aria-label="Hamburger Icon - Open Menu"
                >
                    <i className={styles.brandNavButtonIcon}>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </button>
                : <button
                    className={styles.brandNavButton}
                    onClick={handlerHiddenMenu}
                    aria-label="X Icon - Close Menu"
                >
                    <i className={styles.brandNavButtonIcon}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                </button>
            }
        </div>
    )
}