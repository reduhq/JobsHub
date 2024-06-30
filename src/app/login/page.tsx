import styles from './login.module.css'

export default function Page(){
    return (
        <div className='container'>
            <form className={`${styles.form}`} action="">
                <h1>Inicia sesión</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username'/>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}
