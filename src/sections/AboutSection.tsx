import React from 'react';

export const AboutSection: React.FC = () => {
  return (
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
  );
};

export default AboutSection;
