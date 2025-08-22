import Link from 'next/link'
import style from './Menu.module.css'

const Menu = () => (
    <nav className={style.menuContainer}>
        <div className={style.menuItem}><Link href={'/'}>Ininio</Link></div>
        <div className={style.menuItem}><Link href={'/characters'}>Personagens</Link></div>
        <div className={style.menuItem}><Link href={'#'}>Magias</Link></div>
        <div className={style.menuItem}><Link href={'#'}>Sobre</Link></div>
    </nav>
)

export default Menu
