import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../scss/style.scss';

import headerLogo from '../img/header-logo-icon.webp';
import homeIcon from '../img/header-home-icon.webp';
import teamIcon from '../img/header-team-icon.webp';
import servicesIcon from '../img/header-services-icon.webp';
import contactIcon from '../img/header-contact-icon.webp';
import burgerIcon from '../img/burger-icon.webp';
import closeIcon from '../img/close-icon.webp';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Блокируем прокрутку фона при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = ({ isActive }) => 
    `header-nav-inner ${isActive ? 'active' : ''}`;

  return (
    <header className="header">
        <div className="header-logo">
            <img src={headerLogo} alt="header-logo" />
        </div>
        
        {/* Десктопное меню */}
        <nav className="header-nav header-nav-desktop">
            <NavLink to="/" className={getLinkClass}>
                <img src={homeIcon} alt="home-icon" />
                <span className="p-16">Главная</span>
            </NavLink>
            <NavLink to="/team" className={getLinkClass}>
                <img src={teamIcon} alt="team-icon" />
                <span className="p-16">Наша команда</span>
            </NavLink>
            <NavLink to="/services" className={getLinkClass}>
                <img src={servicesIcon} alt="services-icon" />
                <span className="p-16">Услуги</span>
            </NavLink>
            <NavLink to="/contacts" className={getLinkClass}>
                <img src={contactIcon} alt="contact-icon" />
                <span className="p-16">Контакты</span>
            </NavLink>
        </nav>

        {/* Кнопка бургера для мобильных */}
        <button 
          className="header-burger" 
          onClick={toggleMenu}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <img src={isMenuOpen ? closeIcon : burgerIcon} alt={isMenuOpen ? "Закрыть" : "Меню"} />
        </button>

        {/* Мобильное меню (оверлей) */}
        <div className={`header-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <nav className="header-nav header-nav-mobile">
                <NavLink to="/" className={getLinkClass} onClick={closeMenu}>
                    <img src={homeIcon} alt="home-icon" />
                    <span className="p-16">Главная</span>
                </NavLink>
                <NavLink to="/team" className={getLinkClass} onClick={closeMenu}>
                    <img src={teamIcon} alt="team-icon" />
                    <span className="p-16">Наша команда</span>
                </NavLink>
                <NavLink to="/services" className={getLinkClass} onClick={closeMenu}>
                    <img src={servicesIcon} alt="services-icon" />
                    <span className="p-16">Услуги</span>
                </NavLink>
                <NavLink to="/contacts" className={getLinkClass} onClick={closeMenu}>
                    <img src={contactIcon} alt="contact-icon" />
                    <span className="p-16">Контакты</span>
                </NavLink>
            </nav>
        </div>

        {/* Затемнение фона при открытом меню */}
        {isMenuOpen && (
          <div className="header-overlay" onClick={closeMenu}></div>
        )}
    </header>
  );
}

export default Header;