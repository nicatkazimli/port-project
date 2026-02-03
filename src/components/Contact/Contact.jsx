import React, { useEffect, useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";

const SocialCounter = ({ icon, label, count }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    const duration = 2000;
    const increment = end / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setNumber(Math.floor(start * 10) / 10);
    }, 50);

    return () => clearInterval(counter);
  }, [count]);

  return (
    <div className="social-card">
      {icon}
      <h4>{label}</h4>
      <p>{number}k</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-main">

        {/* LEFT */}
        <div className="contact-left">
          <h1>
            Get in <br /> <span>touch.</span>
          </h1>
          <div className="dots" />
          <h2>Start a conversation.</h2>
        </div>

        {/* MIDDLE - FORM */}
        <form
          className="contact-form"
          action="mailto:gnlmammad00@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <h3>Send me a message</h3>

          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required />

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="info">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>Baku<br />Khaqani Road, 26</p>
            </div>
          </div>

          <div className="info">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+9944102021</p>
            </div>
          </div>

          <div className="info">
            <FaEnvelope className="icon" />
            <div>
              <h4>Mail</h4>
              <p>gnlmammad00@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="social-wrapper">
        <SocialCounter icon={<FaInstagram />} label="Instagram" count={4.1} />
        <SocialCounter icon={<FaTiktok />} label="TikTok" count={3.5} />
        <SocialCounter icon={<FaFacebookF />} label="Facebook" count={1.7} />
      </div>
    </section>
  );
};

export default Contact;
