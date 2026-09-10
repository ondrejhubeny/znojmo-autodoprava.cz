import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-main">Chochola</span>
          <span className="logo-sub">Premium Transport</span>
        </div>
        <nav className="nav">
          <a href="#sluzby">Služby</a>
          <a href="#vozovy-park">Vozový park</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <div className="header-contact">
          <a href={`tel:${CONTACT_INFO.phones[0]}`} className="btn-phone">
            <Phone size={18} />
            <span>{CONTACT_INFO.phones[0]}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
