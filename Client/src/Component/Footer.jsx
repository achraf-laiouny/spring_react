import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer id='contact' className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="/" className="logo">
            Organ<span className="span">ica</span>
          </a>
          <p className="footer-text">
            Il a été popularisé dans les années 1960 
            avec la sortie de feuilles Letraset contenant 
            des passages du Lorem et plus récemment avec 
            des logiciels de PAO comme including.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Menu</p>
          </li>
          <li>
            <a href="/about" className="footer-link">
              A Propos
            </a>
          </li>
          <li>
            <a href="/shop" className="footer-link">
              Shop
            </a>
          </li>
          <li>
            <a href="/shop" className="footer-link">
              Produit
            </a>
          </li>
          <li>
            <a href="/contact" className="footer-link">
              Contactez Nous
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact</p>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="location-outline" />
            </div>
            <address className="contact-link">
              Fez, Morocco
            </address>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="call-outline" />
            </div>
            <a href="tel:+1800123456789" className="contact-link">
              +212 6 123 456 789
            </a>
          </li>
          <li className="footer-item">
            <div className="contact-icon">
              <ion-icon name="mail-outline" />
            </div>
            <a href="mailto:organica@help.com" className="contact-link">
              organica@help.com

            </a>
          </li>
        </ul>
        <div className="footer-list">
          <p className="footer-list-title">Newsletter</p>
          <p className="newsletter-text">
            Vous serez averti lorsque quelque chose de nouveau apparaîtra.
          </p>
          <form action="" className="footer-form">
            <input
              type="email"
              name="email"
              placeholder="Adresse Mail *"
              required=""
              className="footer-input"
            />
            <button
              type="submit"
              className="footer-form-btn"
              aria-label="Submit"
            >
              <ion-icon name="mail-outline" />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2025{" "}
          <a href="#" className="copyright-link">
            ENSA FES
          </a>
          . Tout Droit Reservé.
        </p>
        <ul className="footer-bottom-list">
          <li>
            <a href="#" className="footer-bottom-link">
              Terme & Service
            </a>
          </li>
          <li>
            <a href="#" className="footer-bottom-link">
              Politique de Confidentialité
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </>
  )
}
