import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const ContactSection: React.FC = () => {
  return (
    <section id="kontakt" className="contact bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Rezervace</span>
          <h2>Kontaktujte nás</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-item">
              <MapPin className="icon-gold" />
              <div>
                <h4>Adresa</h4>
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="icon-gold" />
              <div>
                <h4>E-mail</h4>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="icon-gold" />
              <div>
                <h4>Telefon</h4>
                {CONTACT_INFO.phones.map(phone => (
                  <p key={phone}><a href={`tel:${phone}`}>{phone}</a></p>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Jméno a příjmení</label>
              <input type="text" id="name" placeholder="Vaše jméno" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="vas@email.cz" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Zpráva / Poptávka</label>
              <textarea id="message" rows={4} placeholder="Jak vám můžeme pomoci?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Odeslat poptávku
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
