import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import styles from './Inicio.module.css'


export default function Inicio(){
    return(
        <section id="inicio" className={styles.sectionInicio}>
            <div className={styles.inicioText}>
                <h1> Kaio Franklin</h1>
                <p className={styles.inicioTextP}> desenvolvedor web full stack</p>
                <div className={styles.inicioTextItens}>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaio-franklin-dev" className={styles.socialLink}><FaLinkedin /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/KaioFranklinDev" className={styles.socialLink}><FaGithub /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=558699453112&text&type=phone_number&app_absent=0" className={styles.socialLink}><IoLogoWhatsapp /></a>
                </div>
                <div>
                    <p>Apaixonado por tecnologia e inovação. Tenho 26 anos e dedico minha carreira à criação de soluções web
                        eficientes e modernas. Minha experiência abrange diversas tecnologias, incluindo React, Node.js, JWT, CSS e
                        HTML, o que me permite desenvolver tanto o front-end quanto o back-end de aplicações web.
                    </p>
                </div>           
            </div>
            <div className={styles.inicioImage}>
                <Image 
                src="/assets/fotoProfissa.png"
                alt="imagem do profisonal de ti"
                width={300}
                height={250}
                />
            </div>
        </section>
    )
}