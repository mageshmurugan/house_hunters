import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/page.module.css";
import bg from "../styles/header3.jpg";
import { contact } from "../components/Content";
import Homediv from "../components/Homediv";

export default function Contact() {
    const contactContent=(<div className={styles.center}>
        <h1>Contact Us</h1>
        <q>Get in Touch With Us</q>
      </div>)
  return (
    <>
    <Header content={contactContent} img={bg}/>
    <section className={styles.section_1}>
        {contact.map((content, key) => {
          return <Homediv key={key} content={content}  />;
        })}
      </section>
    <Footer/>
    </>
  )
}
