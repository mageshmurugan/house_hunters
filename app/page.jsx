import styles from "./styles/page.module.css";
import Homediv from "./components/Homediv";
import { Content } from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import bg from "./styles/header4.jpg";
import Link from "next/link";


export default function Home() {

  const headerContent=(<div className={styles.center}>
    <h1>House Hunters</h1>
    <q>Find Your Dream Home Today</q>
    <button><Link href="/#start">Get Started</Link></button>
  </div>)

  return (
    <>
        <Header content={headerContent} img={bg} />
      <section className={styles.section_1} id="start">
        {Content.map((content, key) => {
          return <Homediv key={key} content={content}  />;
        })}
      </section>
      <Footer/>
    </>
  );
}
