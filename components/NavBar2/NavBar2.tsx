"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";
import styles from './styles.module.css';






const NavBar2 = () => {
  const [click, setClick] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  const handleClick = () => {
    setClick(!click);
  };

  const handleCloseMenu = () => {
    setClick(false);
  };

  const handleSubMenuClick = (index:any) => {
    setSubMenuIndex(subMenuIndex === index ? null : index);
    handleCloseMenu();
  };

  const logoPath = "/assets/Children.png";

  const menuLinks = [
    { href: "/early_childhood", label: "Early Childhood" },
    { href: "/about", label: "About us" },
    { href: "/admissions", label: "Admissions" },
    { href: "/community_resources", label: "Community Resources" },
    { href: "mailto:sarapegno@icloud.com", label: "Contact" },
  ];

  const subMenus = [
    {
      label: "In the classroom",
      links: [{ href: "/early_childhood", label: "Early Childhood" }]
    },
    {
      label: "About us",
      links: [
        { href: "/about", label: "About us" },
        { href: "/contact", label: "Contact" },
        { href: "/employment_opportunities", label: "Jobs" },
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
      links: [{ href: "mailto:sarapegno@icloud.com", label: "Contact" }]
    },
  ];

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_fixed}>
        <Link className={styles.logo_container} href="/">
          <div className={styles.animated_logo}>
            <Image src={logoPath} alt="children school logo" width={90} height={90} />
            <h1 className={styles.animated_text}> Children's  <br />School</h1>
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
              <Link href={link.href} onClick={handleCloseMenu}>
                <span className={styles.nav_link} onClick={() => handleSubMenuClick(index)}>
                  {link.label}
                  {subMenuIndex === index && (
                    <ul className={`${styles.sub_menu} ${styles[`sub_menu_${index}`]}`}>
                      {subMenus[index].links.map((subLink, subIndex) => (
                        <li key={subIndex} className={styles.sub_menu_item}>
                          <Link href={subLink.href} onClick={handleCloseMenu}>
                            <p className={styles.sub_menu_link}>{subLink.label}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobile_menu_container} >
          {subMenus.map((subMenu, subMenuIndex) => (
            <div key={subMenuIndex}>
              <p className={styles.mobile_menu_label}>{subMenu.label}</p>
              <ul className={styles.mobile_list_container}>
                {subMenu.links.map((subLink, subLinkIndex) => (
                  <li key={subLinkIndex}>
                    <Link className={styles.mobile_sub_menu_link} href={subLink.href} onClick={handleCloseMenu}>
                      {subLink.label}
                    </Link>
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
