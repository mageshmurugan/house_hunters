import Image from "next/image"
import styles from "../styles/page.module.css"
import Link from "next/link"
import footer from "../styles/footer.jpg";
import logo from "../styles/logo.png";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter,FiMail} from "react-icons/fi";
import {FaLinkedinIn,FaWhatsapp,FaPhone} from "react-icons/fa";

export default function Footer() {
  return (
    <section className={styles.footer}>
    <Image
      src={footer}
      className={styles.ftimg}
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

    <div className={styles.ftc}>
      <div className={styles.ftc1}>
        <h1>House Hunters</h1>
      </div>
      <div className={styles.ftc2}>
        <h2>Connect with Us</h2> 
        <div className={styles.ftsoc}>
          <Link href="https://www.instagram.com/magesh__m/" target="_blank"><BsInstagram/><span>Instagram</span></Link>
          <Link href="https://twitter.com/_Magesh_M" target="_blank"><FiTwitter/><span>Twitter</span></Link>
          <Link href="https://www.linkedin.com/in/magesh-murugan-415289212" target="_blank"><FaLinkedinIn/><span>LinkedIn</span></Link>
          <Link href="https://api.whatsapp.com/send?phone=+919345480054&text=Hi Magesh" target="_blank"><FaWhatsapp/><span>Whatsapp</span></Link>
          <Link href="mailto:mageshmurugant@gmail.com" target="_blank"><FiMail/><span>Email</span></Link>
          <Link href="tel:+919345480054" target="_blank"><FaPhone/><span>Phone</span></Link>
        </div>
      </div>
    </div>
    <div className={styles.ft}>
      <div className={styles.tag}>
        <Link href="/">Home</Link><span>|</span>
        <Link href="/about">About</Link><span>|</span>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  </section>
  )
}
