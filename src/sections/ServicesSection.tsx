import React from 'react';
import { 
  Plane, 
  Trophy, 
  Heart, 
  Map, 
  Briefcase, 
  Clock, 
  Bike, 
  GlassWater, 
  Bus, 
  Package, 
  Car, 
  Plus 
} from 'lucide-react';
import { SERVICES } from '../constants';

export const ServicesSection: React.FC = () => {
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
  );
};

export default ServicesSection;
