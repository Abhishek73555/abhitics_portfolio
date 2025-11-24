import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column footer-logo-heading">
            <div>
              <h2 className="footer-heading">Abhishek Tiwari</h2>
              <img src="/images/logo1.jpg" alt="Logo" className="footer-logo" />
            </div>
          </div>
          <div className="footer-column footer-quick-links">
            <h2 className="footer-heading">Quick Links</h2>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <h2 className="footer-heading" id="contact">
            Get in Touch
          </h2>
          <div className="footer-column footer-connect-form">
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                rows="4"
                required
              />
              <button type="submit">Connect Now</button>
            </form>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} abhitics. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
