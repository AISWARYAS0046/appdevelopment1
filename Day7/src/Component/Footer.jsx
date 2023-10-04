import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <ul>
          <li><a href="./aboutus">About Us</a></li>
          <li><a href="contactus">Contact Us</a></li>
          <li>
            <a href="rightsreserved">All Rights Reserved.</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="cookies-policy">Cookies Policy</a>
            {' | '}
            <a href="privacy-policy">Privacy Policy</a>
          </li>
        </ul>
        
        {/* Social Media Links with Images */}
        <div className="social-media">
        <a href="https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=600">
        <i class="fa-brands fa-facebook x"></i>
        </a>
         
        <a href="https://www.instagram.com/aisu6211/">
        <i class="fa-brands fa-instagram y"></i>
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
