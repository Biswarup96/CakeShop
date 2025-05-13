import React from 'react';
import "../Copyrights/Copyright.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Copyrights = () => {
  return (
    <div className='footer-copyrights'>
      <div className="container copyrights-container">
        <p>Monginis © 2024. All Rights Reserved.</p>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="social-icon"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="social-icon"/>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="social-icon"/>
        </a>
      </div>
      
    </div>
  );
};

export default Copyrights;
