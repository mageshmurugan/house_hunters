import Image from "next/image"
import styles from './styles/page.module.css'
import bg from './styles/header2.jpg'
import logo from './styles/logo.png'

export default function Home() {
  return (
    <>
      <div className={styles.header}>
      <Image
        priority={true}
        loading="eager"
        src={bg}
        className={styles.bg}
        placeholder="blur"
        fill
        sizes="100%"
        alt="picture"
        style={{objectFit: 'cover', objectPosition: 'center '}}
        />
        <div className={styles.nav}>
        <Image
        priority={true}
        src={logo}
        className={styles.logo}
        alt="picture"

        />
        </div>
        <div>
          <h1>House Hunters</h1>
        </div>
        </div>
    </>
  )
}
