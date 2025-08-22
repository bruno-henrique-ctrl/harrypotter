import style from './Footer.module.css'

const Footer = () => (
    <footer className={style.footerContainer}>
        <div className={style.footerLinks}>
            <a href="#" className={style.footerLink}>Home</a>
            <a href="#" className={style.footerLink}>Filmes</a>
            <a href="#" className={style.footerLink}>Hogwarts</a>
            <a href="#" className={style.footerLink}>Sobre</a>
        </div>
        <div className={style.footerCopyright}>
            &copy; 2025 Mundo Bruxo. Todos os direitos reservados.
        </div>
    </footer>
)

export default Footer
