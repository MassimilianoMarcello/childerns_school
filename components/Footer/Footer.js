"use client"
import "./Footer.css";
import Form from "./Form";
import Infos from "./Infos";

const Footer = () => {
  return (
    <>
      <footer className="mr-container">
        <Infos />
        <Form />
      </footer>
    </>
  );
};

export default Footer;
