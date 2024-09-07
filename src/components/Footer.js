import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>1in1000</h5>
            <p>Adres Bilgileri</p>
            <p>info@1in1000.com</p>
            <p>Livechat</p>
          </div>
          <div className="col-md-3">
            <h5>Use Cases</h5>
            <ul className="footer-links">
              <li><a href="#">Get Anomaly Alerts</a></li>
              <li><a href="#">Get Actionable Insights</a></li>
              <li><a href="#">Get Analysis to Email</a></li>
              <li><a href="#">Automate Reports</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Resources</h5>
            <ul className="footer-links">
              <li><a href="#">Courses</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Join the community</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">X (Twitter)</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 1in1000. All rights reserved.</p>
          <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
