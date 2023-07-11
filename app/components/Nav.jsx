"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import styles from "../styles/page.module.css";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <>
        <HiMenu onClick={() => setOpen(true)} className={styles.navb} />
      </>
      {open && (
        <div className={styles.navc} onClick={() => setOpen(false)}>
            <div>
                <RxCross2 onClick={() => setOpen(false)} className={styles.navb} />
            </div>
          <div className={styles.navca}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
