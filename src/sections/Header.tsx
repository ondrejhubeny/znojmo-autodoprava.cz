import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo" aria-label="Chochola Premium Transport Domů">
          <span className="logo-main">Chochola</span>
          <span className="logo-sub">Premium Transport</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#sluzby">Služby</a>
          <a href="#vozovy-park">Vozový park</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        {/* Header Actions (Phone & Hamburger) */}
        <div className="header-actions">
          <a 
            href={`tel:${CONTACT_INFO.phones[0]}`} 
            className="btn-phone" 
            aria-label={`Volejte ${CONTACT_INFO.phones[0]}`}
            title={`Volejte ${CONTACT_INFO.phones[0]}`}
          >
            <Phone size={18} />
            <span className="btn-phone-text">{CONTACT_INFO.phones[0]}</span>
          </a>

          <button 
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#sluzby" onClick={handleLinkClick}>Služby</a>
          <a href="#vozovy-park" onClick={handleLinkClick}>Vozový park</a>
          <a href="#o-nas" onClick={handleLinkClick}>O nás</a>
          <a href="#kontakt" onClick={handleLinkClick}>Kontakt</a>
        </nav>
        <div className="mobile-drawer-footer">
          <a href={`tel:${CONTACT_INFO.phones[0]}`} className="btn btn-primary drawer-btn">
            <Phone size={18} /> {CONTACT_INFO.phones[0]}
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn-outline drawer-btn">
            <Mail size={18} /> {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
