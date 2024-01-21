import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_links">
          <h2>Company</h2>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className="footer_links">
          <h2>Support</h2>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Help Desk</p>
        </div>
        <div className="footer_links">
          <h2>Community</h2>
          <p>Blog</p>
          <p>Events</p>
          <p>Forum</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© 2023- All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
