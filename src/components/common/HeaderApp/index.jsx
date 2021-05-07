import { BrandNavApp } from '../BrandNavApp'
import { NavApp } from '../NavApp'
import styles from './HeaderApp.module.css'

export function HeaderApp() {
    return (
        <header>
            <BrandNavApp />
            <NavApp />
        </header>
    )
}