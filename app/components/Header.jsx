import Image from "next/image";
import styles from "../styles/page.module.css";
import logo from "../styles/logo.png";
import Nav from "../components/Nav";


export default function Header({content,img}) {
  return (
    <section className={styles.header} >
        <Image
          priority={true}
          loading="eager"
          src={img}
          className={styles.bg}
          placeholder="blur"
          fill
          sizes="100%"
          alt="picture"
          style={{ objectFit: "cover", objectPosition: "center " }}
        />
          <Image
            priority={true}
            src={logo}
            className={styles.logo}
            alt="picture"
          />
          <Nav/>
          {content}
      </section>
  )
}
