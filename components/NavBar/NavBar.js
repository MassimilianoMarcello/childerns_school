"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import "./NavBar.css";
import Dropdown from "./Dropdown";
import dropdownItems from "./DropItems";
import Button from "./Button";
import barsSolid from '../../public/assets/bars-solid.svg'; 
import xmarkSolid from '../../public/assets/xmark-solid.svg'; 

const NavBar = () => {
  const [click, setClick] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = () => {
    setClick(!click);
    setOpenDropdown(null); 
  };


  const handleDropdownEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };


  return (
    <>
      {/* =============================NAVBAR MOBILE======================================= */}

      <nav className="nav-mobile">
        <ul className="nav-fixed">
          <li className="nav-logo-mobile">
            <Link href="/">
              <img
                src="/assets/MDS Color Logo.svg"
                alt="mds logo"
                // onClick={handleClick}
              />
            </Link>
          </li>
        </ul>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links"   >
            
            <h1 >ABOUT MDS</h1> 
              <Dropdown items={dropdownItems.about} />
          
          </li>
          <li className="nav-links">
            
            <h1 className="title-mobile-menu">     ADMISSIONS</h1>
              <Dropdown items={dropdownItems.admissions} />
          
          </li>
          <li className="nav-links">
            
            <h1 className="title-mobile-menu">  IN THE CLASSROOM</h1>
              <Dropdown items={dropdownItems.inTheClassroom} />
          
          </li>
          <li className="nav-links" >
            
            <h1 className="title-mobile-menu"> PARENT RESOURCES</h1>
              <Dropdown items={dropdownItems.parentResources} />
            
          </li>
          <li className="nav-links" >
           
            <h1 className="title-mobile-menu">  COMMUNITY RESOURCES</h1>
              <Dropdown items={dropdownItems.communityResources} />
           
          </li>
          <li className="nav-links" >
            {" "}
            
           <h1 className="title-mobile-menu">   SUPPORTING MDS</h1>
              <Dropdown items={dropdownItems.supportingMDS} />
          
          </li>
          <li className="menu-icon" onClick={handleClick}>
            {/* Usa l'elemento Image di Next.js */}
            {click ? (
              <Image src={barsSolid} alt="Bars Icon" width={40} height={32} />
            ) : (
              <Image src={xmarkSolid} alt="Xmark Icon" width={40} height={30} />
            )}
          </li>
          <Button />
        </ul>
      </nav>
      {/* =============================NAVBAR DESKTOP======================================= */}
      <nav className="nav-desktop">
        <ul className="nav-menu">
          <li className="nav-logo-desktop">
            <Link href="/">
              <img
                src="/assets/MDS Color Logo.svg"
                alt="mds logo"
                // onClick={handleClick}
              />
            </Link>
          </li>
          <li
          className={`nav-links ${openDropdown === "about" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("about")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">ABOUT MDS</Link>
          {openDropdown === "about" && <Dropdown items={dropdownItems.about} />}
        </li>
        <li
          className={`nav-links ${openDropdown === "admissions" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("admissions")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">ADMISSIONS</Link>
          {openDropdown === "admissions" && <Dropdown items={dropdownItems.admissions} />}
        </li>

        <li
          className={`nav-links ${openDropdown === "inTheClassroom" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("inTheClassroom")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">IN THE CLASSROOM</Link>
          {openDropdown === "inTheClassroom" && <Dropdown items={dropdownItems.inTheClassroom} />}
        </li>
        <li
          className={`nav-links ${openDropdown === "parentResources" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("parentResources")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">PARENT RESOURCES</Link>
          {openDropdown === "parentResources" && <Dropdown items={dropdownItems.parentResources} />}
        </li>
        <li
          className={`nav-links ${openDropdown === "communityResources" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("communityResources")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">COMMUNITY RESOURCES</Link>
          {openDropdown === "communityResources" && <Dropdown items={dropdownItems.communityResources} />}
        </li>
        <li
          className={`nav-links ${openDropdown === "supportingMDS" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("supportingMDS")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">SUPPORTING MDS</Link>
          {openDropdown === "supportingMDS" && <Dropdown items={dropdownItems.supportingMDS} />}
        </li>
        <li className="menu-icon" onClick={handleClick}>
  {click ? (
    <img src={barsSolid} alt="Bars Icon" />
  ) : (
    <img src={xmarkSolid} alt="Xmark Icon" />
  )}
</li>
          <Button />
        </ul>
      </nav>
    </>
  );
};

export default NavBar;