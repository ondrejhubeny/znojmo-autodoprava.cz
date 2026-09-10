import React from 'react';
import FleetCarousel from '../components/FleetCarousel';

export const FleetSection: React.FC = () => {
  return (
    <section id="vozovy-park" className="fleet bg-alt">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Exkluzivní flotila</span>
          <h2>Vozový park Mercedes-Benz</h2>
        </div>
        <FleetCarousel />
      </div>
    </section>
  );
};

export default FleetSection;
