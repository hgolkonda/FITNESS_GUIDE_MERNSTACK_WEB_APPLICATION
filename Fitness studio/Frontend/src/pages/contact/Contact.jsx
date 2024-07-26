import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../Images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Navbar from "../../components/Navbar.jsx";

const Contact = () => {
  return (
    <>
    <Navbar/>
      <Header title="Git In Touch" image={HeaderImage}>
        Fitness Studio is the first fitness center that serves 24*7 !!!
      </Header>

      <section className="contact section">
        <div className="containerK contact__container">
          <div className="contact__wrapper">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+2387245629"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
