import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/page.module.css";
import bg from "../styles/header1.jpg";
import { about } from "../components/Content";
import Homediv from "../components/Homediv";





export default function Contact() {
    const aboutContent=(<div className={styles.center}>
        <h1>About Us</h1>
        <q>Who we Are And What We Do</q>
      </div>)
  return (
    <>
    <Header content={aboutContent} img={bg} />
    <section className={styles.section_1}>
        {about.map((content, key) => {
          return <Homediv key={key} content={content}  />;
        })}
      </section>
    <Footer/>
    </>
  )
}
