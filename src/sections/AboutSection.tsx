import React from 'react';

import mmrImg from '../assets/references/MMR-CR.webp';
import egstonImg from '../assets/references/egston.svg';
import gpoaImg from '../assets/references/gpoa.png';
import gymplImg from '../assets/references/gympl.png';
import happyStarImg from '../assets/references/hotel-happy-star.png';
import lahoferHotelImg from '../assets/references/hotel-lahofer.webp';
import marielImg from '../assets/references/hotel-mariel.webp';
import lahoferRedImg from '../assets/references/lahofer_cervena.png';
import laufenImg from '../assets/references/laufen.png';
import savanahImg from '../assets/references/hotel-savanah.svg';
import msHnaniceImg from '../assets/references/ms-hnanice.webp';
import nevogaImg from '../assets/references/nevoga.png';
import saintGobainImg from '../assets/references/saint-gobain.png';
import smSatovImg from '../assets/references/sm-satov.webp';
import atletikaImg from '../assets/references/tj-atletika.webp';
import florbalImg from '../assets/references/tj-florbal.webp';
import viniceHnaniceImg from '../assets/references/vinice-hnanice.webp';
import yageoImg from '../assets/references/yageo-group.png';
import znojmoYellowImg from '../assets/references/znojmo-zluta.png';

const CLIENT_LOGOS = [
  { name: 'Laufen CZ', src: laufenImg },
  { name: 'Vinařství LAHOFER', src: lahoferRedImg },
  { name: 'Vinice Hnanice', src: viniceHnaniceImg },
  { name: 'Nevoga', src: nevogaImg },
  { name: 'Saint-Gobain', src: saintGobainImg },
  { name: 'MMR ČR', src: mmrImg },
  { name: 'Město Znojmo', src: znojmoYellowImg },
  { name: 'Hotel LAHOFER', src: lahoferHotelImg },
  { name: 'TJ Znojmo Florbal', src: florbalImg },
  { name: 'TJ Znojmo Atletika', src: atletikaImg },
  { name: 'TJ Slovan Šatov', src: smSatovImg },
  { name: 'Hotel Happy Star', src: happyStarImg },
  { name: 'Egston', src: egstonImg },
  { name: 'Yageo Group', src: yageoImg },
  { name: 'GPOA Znojmo', src: gpoaImg },
  { name: 'Gymnázium Znojmo', src: gymplImg },
  { name: 'MŠ Hnanice', src: msHnaniceImg },
  { name: 'Hotel Mariel', src: marielImg },
  { name: 'Hotel Savannah', src: savanahImg },
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
