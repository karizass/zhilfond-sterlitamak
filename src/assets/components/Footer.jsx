import React from "react";
import { Link } from "react-router-dom";
import '../scss/style.scss';

import footerLogo from '../img/footer-logo-icon.webp';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p className="p-desc-footer">Профессиональные услуги риелторов по <br /> Республике Башкортостан и России</p>
        </div>
        <div className="footer-nav">
            <p className="p-28">Навигация</p>
            <Link to="/" className="footer-link"><p className="p-20">Главная</p></Link>
            <Link to="/team" className="footer-link"><p className="p-20">Наша команда</p></Link>
            <Link to="/services" className="footer-link"><p className="p-20">Услуги</p></Link>
            <Link to="/contacts" className="footer-link"><p className="p-20">Контакты</p></Link>
        </div>
        <div className="footer-contact">
            <p className="p-28">Контакты</p>
            <p className="p-20">г. Стерлитамак, ул. Артема, д. 53, 2 этаж, 211 кабинет</p>
            <a href="tel:+79050052882" className="contact-link"><p className="p-20">+7 (905) 005 28 82</p></a>
            <a href="mailto:gale_09@mail.ru" className="contact-link"><p className="p-20">gale_09@mail.ru</p></a>
        </div>
    </footer>
  );
}

export default Footer;
