import { faBars, faCode, faTimes } from '@fortawesome/free-solid-svg-icons'
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
                <i className="header__logo">
                    <FontAwesomeIcon icon={faCode} />
                </i>
                <span className="header__name">Confy</span>
            </NavLink>

            {!showMenu
                ? <button
                    className={styles.brandNavBtn}
                    onClick={handlerShowMenu}
                >
                    <i className={styles.brandNavBtnIcon}>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </button>
                : <button
                    className={styles.brandNavBtn}
                    onClick={handlerHiddenMenu}
                >
                    <i className={styles.brandNavBtnIcon}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                </button>
            }
        </div>
    )
}