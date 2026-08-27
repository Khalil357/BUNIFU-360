export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <span className="footer__logo-mark">◆</span>
            Xcelliance
          </a>
          <p>
            Pede mus ac auctor facilisis sem aliquam. Sem auctor fames enim
            scelerisque himenaeos in velit.
          </p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h6>Company</h6>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
          </div>
          <div className="footer__col">
            <h6>Support</h6>
            <a href="#">Contact</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Xcelliance. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
