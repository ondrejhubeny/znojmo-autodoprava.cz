import React from 'react';

import mmrImg from '../assets/references/MMR-CR.webp';
import egstonImg from '../assets/references/egston.svg';
import gymplImg from '../assets/references/gympl.png';
import happyStarImg from '../assets/references/hotel-happy-star.png';
import lahoferHotelImg from '../assets/references/hotel-lahofer.webp';
import marielImg from '../assets/references/hotel-mariel.webp';
import lahoferBlackImg from '../assets/references/lahofer-cerna.png';
import laufenImg from '../assets/references/laufen.png';
import happyStarLogoImg from '../assets/references/logo-color.svg';
import tamuraImg from '../assets/references/tamura.png';
import atletikaImg from '../assets/references/tj-atletika.webp';
import florbalImg from '../assets/references/tj-florbal.webp';
import vodafoneImg from '../assets/references/vodafone.png';
import yageoImg from '../assets/references/yageo-group.png';
import znojmoYellowImg from '../assets/references/znojmo-zluta.png';

const CLIENT_LOGOS = [
  { name: 'Laufen CZ', src: laufenImg },
  { name: 'Vinařství LAHOFER', src: lahoferBlackImg },
  { name: 'Vodafone', src: vodafoneImg },
  { name: 'MMR ČR', src: mmrImg },
  { name: 'Město Znojmo', src: znojmoYellowImg },
  { name: 'Hotel LAHOFER', src: lahoferHotelImg },
  { name: 'TJ Znojmo Florbal', src: florbalImg },
  { name: 'TJ Znojmo Atletika', src: atletikaImg },
  { name: 'Hotel Happy Star', src: happyStarImg },
  { name: 'Egston', src: egstonImg },
  { name: 'Yageo Group', src: yageoImg },
  { name: 'Tamura', src: tamuraImg },
  { name: 'Gymnázium Znojmo', src: gymplImg },
  { name: 'Hotel Mariel', src: marielImg },
  { name: 'Savannah / Happy Star', src: happyStarLogoImg },
];

// Doubled logos for seamless infinite continuous scroll
const MARQUEE_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export const AboutSection: React.FC = () => {
  return (
    <section id="o-nas" className="about">
      <div className="container about-content">
        <span className="subtitle">Proč my</span>
        <h2>Tradice a profesionalita</h2>
        <p className="about-text">
          Již více než 30 let poskytujeme služby v oblasti dopravy s důrazem na individuální přístup. 
          Naši řidiči jsou profesionálové s miliony kilometrů bez nehod.
        </p>

        <div className="references-ticker-container">
          <span className="ref-title">Důvěřují nám významné firmy a instituce:</span>
          
          <div className="logo-marquee-wrapper">
            <div className="logo-marquee-track">
              {MARQUEE_LOGOS.map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="logo-marquee-item">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    title={logo.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
