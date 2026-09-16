import React, { useState } from 'react';
import { 
  Plane, 
  Trophy, 
  Heart, 
  Map, 
  Briefcase, 
  Clock, 
  GlassWater, 
  Bus, 
  Package, 
  Info,
  X
} from 'lucide-react';
import { SERVICES } from '../constants';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    const props = { size: 24, className: "icon-gold" };
    switch (id) {
      case 'airport': return <Plane {...props} />;
      case 'sports': return <Trophy {...props} />;
      case 'weddings': return <Heart {...props} />;
      case 'excursions': return <Map {...props} />;
      case 'corporate': return <Briefcase {...props} />;
      case 'drink-drive': return <Clock {...props} />;
      case 'wine-cellars': return <GlassWater {...props} />;
      case 'shuttle': return <Bus {...props} />;
      case 'cargo-express': return <Package {...props} />;
      default: return <Info {...props} />;
    }
  };

  const handleCardClick = (id: string) => {
    setActiveServiceId(prev => prev === id ? null : id);
  };

  const activeService = SERVICES.find(s => s.id === activeServiceId);

  return (
    <section id="sluzby" className="services">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Prémiové řešení</span>
          <h2>Naše služby</h2>
        </div>
        
        <div className="services-grid">
          {SERVICES.map(service => {
            const isSelected = activeServiceId === service.id;
            return (
              <div 
                key={service.id} 
                className={`service-card-compact ${isSelected ? 'active-tap' : ''}`}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="service-icon-compact">
                  {getServiceIcon(service.id)}
                </div>
                <div className="service-content-compact">
                  <h3>{service.title}</h3>
                  <p className="desktop-desc">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Detail Banner when a card is tapped */}
        {activeService && (
          <div className="service-mobile-detail">
            <div className="detail-header">
              <span className="detail-icon">{getServiceIcon(activeService.id)}</span>
              <h4>{activeService.title}</h4>
              <button 
                className="close-detail-btn"
                onClick={() => setActiveServiceId(null)}
                aria-label="Zavřít detail"
              >
                <X size={18} />
              </button>
            </div>
            <p>{activeService.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
