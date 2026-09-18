import React from 'react';
import { Award, ShieldCheck, Car, Clock } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const STATS = [
    {
      icon: <Award size={26} className="stat-icon-gold" />,
      value: '30+',
      title: 'Let tradice',
      description: 'Spolehlivé přepravní služby již od roku 1993',
    },
    {
      icon: <ShieldCheck size={26} className="stat-icon-gold" />,
      value: '1 000 000+',
      title: 'Najetých km',
      description: 'Miliony kilometrů s profesionálními řidiči',
    },
    {
      icon: <Car size={26} className="stat-icon-gold" />,
      value: '100%',
      title: 'Mercedes-Benz',
      description: 'Výhradně luxusní a klimatizovaná flotila',
    },
    {
      icon: <Clock size={26} className="stat-icon-gold" />,
      value: '24/7',
      title: 'Dispečink & Služby',
      description: 'Pohotovost a individuální domluva',
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-body">
                <span className="stat-value">{stat.value}</span>
                <h4 className="stat-title">{stat.title}</h4>
                <p className="stat-desc">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
