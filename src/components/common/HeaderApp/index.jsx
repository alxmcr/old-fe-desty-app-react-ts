import { useState } from 'react';
import { BrandNavApp } from '../BrandNavApp'
import { NavApp } from '../NavApp'
import styles from './HeaderApp.module.css'

export function HeaderApp() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className={styles.HeaderApp}>
            <BrandNavApp showMenu={showMenu} setShowMenu={setShowMenu} />
            <NavApp showMenu={showMenu} />
        </header>
    )
}