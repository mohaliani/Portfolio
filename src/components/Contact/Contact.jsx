import React from "react";
import "./Contact.css";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="Contact">
      <h2>Get In Touch</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>alianimohamed91@gmail.com</h5>
            <a href="mailto:alianimohamed91@gmail.com">send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_icon" />
            <h4>whatsApp</h4>
            <h5>+212 700104370</h5>
            <a href=" https://wa.me/+212700104370" target="blank">
              send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_icon" />
            <h4>Linkedin</h4>
            <h5>Mohamed_aliani</h5>
            <a
              href="https://linkedin.com/in/mohamed-aliani-046283222"
              target="blank"
            >
              send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineTwitter className="contact_icon" />
            <h4>Twitter</h4>
            <h5>@Mohamed_aliani</h5>
            <a href="https://twitter.com/mohamed_aliani" target="blank">
              send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
