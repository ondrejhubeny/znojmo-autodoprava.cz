import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Car, 
  Bus, 
  Users, 
  ChevronRight,
  ShieldCheck,
  Star,
  Plane,
  Trophy,
  Heart,
  Map,
  Briefcase,
  Bike,
  GlassWater,
  Package,
  Plus
} from 'lucide-react';
import { CONTACT_INFO, SERVICES, FLEET } from './constants';
import FleetCarousel from './components/FleetCarousel';
import './App.css';

function App() {
  const getServiceIcon = (id: string) => {
    const props = { size: 24, className: "icon-gold" };
    switch (id) {
      case 'airport': return <Plane {...props} />;
      case 'sports': return <Trophy {...props} />;
      case 'weddings': return <Heart {...props} />;
      case 'excursions': return <Map {...props} />;
      case 'corporate': return <Briefcase {...props} />;
      case 'drink-drive': return <Clock {...props} />;
      case 'cycle-bus': return <Bike {...props} />;
      case 'wine-cellars': return <GlassWater {...props} />;
      case 'shuttle': return <Bus {...props} />;
      case 'cargo-express': return <Package {...props} />;
      case 'small-cargo': return <Car {...props} />;
      case 'custom': return <Plus {...props} />;
      default: return <Plus {...props} />;
    }
  };

  return (
    <div className="app">
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

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-badge">
              <Star size={14} fill="currentColor" />
              <span>Prémiová přeprava od roku 1993</span>
            </div>
            <h1>Cestujte na úrovni s Mercedes-Benz</h1>
            <p>Profesionální osobní a nákladní doprava pro ty, kteří vyžadují spolehlivost, bezpečí a maximální komfort.</p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary">Rezervovat vůz</a>
              <a href="#vozovy-park" className="btn btn-outline">Vozový park</a>
            </div>
          </div>
        </section>

        <section id="sluzby" className="services">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Prémiové řešení</span>
              <h2>Naše služby</h2>
            </div>
            <div className="services-grid">
              {SERVICES.map(service => (
                <div key={service.id} className="service-card-compact">
                  <div className="service-icon-compact">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="service-content-compact">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vozovy-park" className="fleet bg-alt">
          <div className="container">
            <div className="section-header">
              <span className="subtitle">Exkluzivní flotila</span>
              <h2>Vozový park Mercedes-Benz</h2>
            </div>
            <FleetCarousel />
          </div>
        </section>

        <section id="o-nas" className="about">
          <div className="container about-grid">
            <div className="about-content">
              <span className="subtitle">Proč my</span>
              <h2>Tradice a profesionalita</h2>
              <p>Již více než 30 let poskytujeme služby v oblasti dopravy s důrazem na individuální přístup. Naši řidiči jsou profesionálové s miliony kilometrů bez nehod.</p>
              <div className="references">
                <span className="ref-title">Naši klienti:</span>
                <p>Laufen CZ, Vinařství LAHOFER, TJ Znojmo, Vodafone, MMR ČR</p>
              </div>
            </div>
          </div>
        </section>

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
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-main">Chochola</span>
            </div>
            <p>&copy; {new Date().getFullYear()} Petr Chochola - Premium Transport. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
