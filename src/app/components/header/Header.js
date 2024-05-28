import styles from './Header.module.css'
export default function Header(){
    return(
        <header className={styles.header} >
            <nav>
                <a href='#' >Início</a>
                <a href='#servicos'>Serviços</a>
                <a href='#tecnologias'>Tecnologias</a>
                <a href='#contatos'>Contato</a>
            </nav>
        </header>
    )
}