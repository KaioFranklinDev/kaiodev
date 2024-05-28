import { FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiNextdotjs, SiCss3, SiJsonwebtokens } from 'react-icons/si';
import styles from './Tecnologias.module.css'
export default function Tecnologias(){
    return(
        <section id='tecnologias' className={styles.section_Tecnologias}>
            <div>
                <div>
                    <h3 className={styles.section_Tecnologias_Titulo_H3} >TECNOLOGIAS</h3>
                </div>
                <div>
                    <h2 className={styles.section_Tecnologias_Titulo_H2} >oque eu sei?</h2>
                </div>
                <div className={styles.section_Tecnologias_Div} />
            </div>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <FaNode size={50} color="#ffffff" />
                    <p>Node</p>
                </div>
                <div className={styles.card}>
                    <SiExpress size={50} color="#FFFFFF" />
                    <p>Express</p>
                </div>
                <div className={styles.card}>
                    <FaReact size={50} color="#ffffff" />
                    <p>React</p>
                </div>
                <div className={styles.card}>
                    <SiNextdotjs size={50} color="#FFFFFF" />
                    <p>Next.js</p>
                </div>
                <div className={styles.card}>
                    <SiCss3 size={50} color="#ffffff" />
                    <p>CSS</p>
                </div>
                <div className={styles.card}>
                    <SiJsonwebtokens size={50} color="#ffffff" />
                    <p>JWT</p>
                </div>
            </div>
        </section>
    )
}