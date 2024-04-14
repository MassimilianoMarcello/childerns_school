"use client";
// Import React, useState, Image, Link, and the CSS module
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";
import styles from './styles.module.css';


const NavBar2 = () => {
  // State per gestire il click sul menu
  const [click, setClick] = useState(false);

  // Funzione per gestire il click sul menu
  const handleClick = () => {
    setClick(!click);
  };

  // Funzione per chiudere il menu
  const handleCloseMenu = () => {
    setClick(false);
  };

  // Percorso dell'immagine del logo
  const logoPath = "/assets/c_logo3.png";

  // Array di oggetti per i link del menu
  const menuLinks = [
    { href: "/about_me", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blog_post", label: "Blog" },
    { href: "mailto:massi.marcello@icloud.com", label: "Contact" }
  ];

  return (
    <nav className={styles.nav_container}>
    <div className={styles.nav_fixed}>
      {/* Link al homepage */}
      <Link className={styles.logo_container} href="/">
        {/* <h1 className={styles.animated_text}>frenzu</h1> */}
        <div className={styles.animated_logo}>
          {/* Immagine del logo */}
          <Image src={logoPath} alt="children school logo" width={240} height={80} />
        </div>
      </Link>
        {/* Icona del menu */}
        <div className={styles.menu_icon} onClick={handleClick}>
          <Image
            src={click ? xmarkSolid : barsSolid}
            alt={click ? "Close Icon" : "Bars Icon"}
            width={40}
            height={40}
            className={styles.image}
          />
        </div>
      </div>
      {/* Menu */}
      <div className={`${styles.nav_menu} ${click ? styles.active : ""}`}>
        <ul className={styles.nav_list}>
          {/* Voci di menu */}
          {menuLinks.map((link, index) => (
            <li key={index} className={styles.nav_item} onClick={handleCloseMenu}>
              <Link href={link.href} passHref>
                <p className={styles.nav_link}>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar2;
