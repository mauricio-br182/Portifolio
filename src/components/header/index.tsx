import styles from './styles.module.scss'
import Link from 'next/link'
import {TiUser} from 'react-icons/ti'
import {ActiveLink} from '../ActiveLink'


export function Header(){
    return (
        <header className={styles.headerContainer}>    
                
                    <Link href='/' legacyBehavior >
                        <a className={styles.logo}>
                            <TiUser size={20} color={'#fff'}/>
                            <span>MauricioBrDev</span>
                        </a>
                    </Link>
                        
                <nav>
                    <ActiveLink href='/' legacyBehavior activeClassName={styles.active}>
                        <a >
                            Home
                        </a> 
                    </ActiveLink>
                    <ActiveLink href='/projetos' legacyBehavior activeClassName={styles.active}>
                        <a >
                            Projetos
                        </a>
                    </ActiveLink>
                    <ActiveLink  href='/sobre' legacyBehavior activeClassName={styles.active}>
                        <a >
                            Sobre mim?
                        </a>
                    </ActiveLink>
                </nav>
                <a className={styles.connectButton}type='button' href="">CONECTAR</a>
        </header>
    )
}