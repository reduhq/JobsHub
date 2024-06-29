import styles from './navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <h2 className={styles.navbar__title}>JobsHub</h2>
                <div className={styles.navbar__links}>
                    <a href="">Buscar empleos</a>
                    <a href="">Publicar oferta</a>
                    <a href="">Nosotros</a>
                    <a href="">Contacto</a>
                </div>
                <a className={styles.navbar__login_button} href="">Inicia sesión</a>
            </div>
        </nav>
    )
}
