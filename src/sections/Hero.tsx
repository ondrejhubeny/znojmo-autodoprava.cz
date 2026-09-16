import React from 'react';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge">
          <Star size={14} fill="currentColor" />
          <span>Prémiová přeprava od roku 1993</span>
        </div>
        <h1>Cestujte na úrovni s Autodopravou CHOCHOLA</h1>
        <p>Profesionální osobní doprava pro ty, kteří vyžadují spolehlivost, bezpečí a maximální komfort.</p>
        <div className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">Rezervovat vůz</a>
          <a href="#vozovy-park" className="btn btn-outline">Vozový park</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
