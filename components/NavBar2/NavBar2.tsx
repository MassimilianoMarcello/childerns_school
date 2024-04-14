"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";
import styles from './styles.module.css';




const NavBar2 = () => {
  const [click, setClick] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState(null); // Stato per gestire l'apertura dei sottomenu

  const handleClick = () => {
    setClick(!click);
  };

  const handleCloseMenu = () => {
    setClick(false);
  };

  const handleSubMenuClick = (index:any) => {
    setSubMenuIndex(subMenuIndex === index ? null : index); // Apri o chiudi il sottomenu
  };

  const logoPath = "/assets/c_logo3.png";

  const menuLinks = [
    { href: "/about_me", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blog_post", label: "Blog" },
    { href: "mailto:massi.marcello@icloud.com", label: "Contact" }
  ];

  // Array di sottomenu e relativi sottolink
  const subMenus = [
    {
      label: "About Me",
      links: [
        { href: "/about_me/page1", label: "Page 1" },
        { href: "/about_me/page2", label: "Page 2" }
      ]
    },
    {
      label: "Projects",
      links: [
        { href: "/projects/project1", label: "Project 1" },
        { href: "/projects/project2", label: "Project 2" }
      ]
    },
    {
      label: "Kiss my ass",
      links: [
        { href: "/kiss_my_ass/page1", label: "Page 1" },
        { href: "/kiss_my_ass/page2", label: "Page 2" }
      ]
    },
    {
      label: "About Me",
      links: [
        { href: "/about_me/page1", label: "Page 1" },
        { href: "/about_me/page2", label: "Page 2" }
      ]
    },
    {
      label: "Projects",
      links: [
        { href: "/projects/project1", label: "Project 1" },
        { href: "/projects/project2", label: "Project 2" }
      ]
    },
    {
      label: "Kiss my ass",
      links: [
        { href: "/kiss_my_ass/page1", label: "Page 1" },
        { href: "/kiss_my_ass/page2", label: "Page 2" }
      ]
    },
    {
      label: "About Me",
      links: [
        { href: "/about_me/page1", label: "Page 1" },
        { href: "/about_me/page2", label: "Page 2" }
      ]
    },
    {
      label: "Projects",
      links: [
        { href: "/projects/project1", label: "Project 1" },
        { href: "/projects/project2", label: "Project 2" }
      ]
    },
    {
      label: "Kiss my ass",
      links: [
        { href: "/kiss_my_ass/page1", label: "Page 1" },
        { href: "/kiss_my_ass/page2", label: "Page 2" }
      ]
    },
  ];

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_fixed}>
        <Link className={styles.logo_container} href="/">
          <div className={styles.animated_logo}>
            <Image src={logoPath} alt="children school logo" width={240} height={80} />
          </div>
        </Link>
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
      <div className={`${styles.nav_menu} ${click ? styles.active : ""}`}>
        <ul className={styles.nav_list}>
          {menuLinks.map((link, index) => (
            <li key={index} className={styles.nav_item}>
              <span className={styles.nav_link} onClick={() => handleSubMenuClick(index)}>
                {link.label}
                {subMenuIndex === index && (
                  <ul className={styles.sub_menu}>
                    {subMenus[index].links.map((subLink, subIndex) => (
                      <li key={subIndex} className={styles.sub_menu_item}>
                        <Link href={subLink.href}>
                          <p className={styles.sub_menu_link}>{subLink.label}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className={styles.mobile_menu_container}>
        {subMenus.map((subMenu, subMenuIndex) => (
  <div key={subMenuIndex}>
    <p>{subMenu.label}</p>
    <ul>
      {subMenu.links.map((subLink, subLinkIndex) => (
        <li key={subLinkIndex}>
          <Link href={subLink.href}>{subLink.label}</Link>
        </li>
      ))}
    </ul>
  </div>
))}


        </div>
       

      </div>
    </nav>
  );
};

export default NavBar2;
