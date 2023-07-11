import React from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";

const Homediv = ({ content }) => {
  return (
    <div className={styles.body1}>
      <div className={styles.body1_text}>
        <h1>{content.heading}</h1>
        <p>{content.paragraph}</p>
      </div>
      <div className={styles.body1_image}>
        <Image
          src={content.img}
          placeholder="blur"
          fill
          // sizes="100%"
          alt="picture"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default Homediv;
