
import Contato from "./LandingpageComponents/Contato/Contato";
import Servicos from "./LandingpageComponents/Servicos/Servicos";
import Tecnologias from "./LandingpageComponents/Tecnologias/Tecnologias";
import Inicio from "./LandingpageComponents/inicio/Inicio";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Inicio />
        <Servicos />
        <Tecnologias />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
