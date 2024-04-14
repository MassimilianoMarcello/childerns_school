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

  const logoPath = "/assets/c_logo5.png";

  const menuLinks = [
    { href: "/about", label: "About us" },
    { href: "/admissions", label: "Admissions" },
    { href: "/community_resources", label: "Community Resources" },
    { href: "mailto:sarapegno@icloud.com", label: "Contact" },
    { href: "/early_childhood", label: "Early Childhood" }
  ];

  // Array di sottomenu e relativi sottolink
  const subMenus = [
    {
      label: "About us",
      links: [
        { href: "/about", label: "About us" },
        { href: "/contact", label: "Contact" },
        { href: "/employment_opportunities", label: "Jobs" },
        { href: "/leadership", label: "Leadership" },
        { href: "/leadership", label: "Leadership" },
        { href: "/our_board", label: "Our Board" },
      ]
    },
    {
      label: "Admissions",
      links: [
        { href: "admissions_process", label: "Admissions" },
        { href: "/apply_today", label: "Apply today" }
      ]
    },
    {
      label: "Community Resources",
      links: [
        { href: "/camp", label: "Camp" },
        { href: "/gym", label: "Gym" }
      ]
    },
    {
      label: "Contact",
      links: [
        { href: "mailto:sarapegno@icloud.com", label: "Contact" }
      
      ]
    },
    {
      label: "In the classroom",
      links: [
        { href: "/early_childhood", label: "Early Childhood" }
      
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
                <ul className={`${styles.sub_menu} ${styles[`sub_menu_${index}`]}`}>
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
