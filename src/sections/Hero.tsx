import React from 'react';
import { Star } from 'lucide-react';
import FleetCarousel from '../components/FleetCarousel';

export const Hero: React.FC = () => {
  return (
    <section id="vozovy-park" className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <Star size={14} fill="currentColor" />
          <span>Prémiová přeprava od roku 1993</span>
        </div>
        <h1>Cestujte na úrovni s Autodopravou CHOCHOLA</h1>
        <p>Profesionální osobní doprava pro ty, kteří vyžadují spolehlivost, bezpečí a maximální komfort.</p>
        
        {/* Fleet Carousel integrated directly into Hero */}
        <div className="hero-carousel-wrapper">
          <FleetCarousel />
        </div>

        <div className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">Rezervovat vůz</a>
          <a href="#sluzby" className="btn btn-outline">Naše služby</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
