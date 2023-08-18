import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";

function Contact() {
  return (
    <section id="footer">
      <div class="container">
        <div class="header">
          <div class="heading">Contact Me</div>
          <div class="supportingText">
            Hire me to add value to your dream project.
          </div>
        </div>

        <div class="contentBox">
          <div class="box">
            <a
              className="color-white"
              href="https://wa.me/7017078186"
              target="_blank"
            >
            
              <FaWhatsapp size={40} />
            </a>
          </div>
          <div class="box">
            <a
              className="color-white"
              href="https://www.instagram.com/kulveer.travel/"
              target="_blank"
            >
            
              <FaInstagram size={40} />
            </a>
          </div>
          <div class="box">
            <a
              className="color-white"
              href="mailto:kulveer.uk@gmail.com"
              target="_blank"
            >
           
              <HiOutlineMail size={40} />
            </a>
          </div>
          <div class="box">
            <a
              className="color-white"
              href="https://www.linkedin.com/in/kulveercode/"
              target="_blank"
            >
              
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

export default Contact;
