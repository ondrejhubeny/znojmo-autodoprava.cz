import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, ShieldCheck } from 'lucide-react';
import { FLEET } from '../constants';
import './FleetCarousel.css';

// We triple the fleet to ensure smooth infinite rotation without "flying car" effect
const EXTENDED_FLEET = [...FLEET, ...FLEET, ...FLEET];

const FleetCarousel: React.FC = () => {
  // Start at the middle set of the tripled fleet, specifically at E-Class (index 2 + 5 = 7)
  const [activeIndex, setActiveIndex] = useState(7);
  const [displayedVehicle, setDisplayedVehicle] = useState(EXTENDED_FLEET[7]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch Swipe State
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleRotate = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFadeOut(true); // Fade out details in place
    
    const newIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    setActiveIndex(newIndex);

    // At midpoint of car slide transition, update text and fade back in!
    setTimeout(() => {
      setDisplayedVehicle(EXTENDED_FLEET[newIndex]);
      setIsFadeOut(false);
    }, 350);

    setTimeout(() => {
      setIsAnimating(false);
      // Seamlessly jump back to the middle set if we go too far
      if (newIndex >= FLEET.length * 2) {
        setActiveIndex(newIndex - FLEET.length);
      } else if (newIndex < FLEET.length) {
        setActiveIndex(newIndex + FLEET.length);
      }
    }, 800); // Must match CSS transition time
  };

  // Touch Swipe Event Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Trigger swipe if horizontal motion is dominant and exceeds 35px threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35) {
      if (deltaX > 0) {
        handleRotate('next'); // Swiped left -> next vehicle
      } else {
        handleRotate('prev'); // Swiped right -> previous vehicle
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div 
      className="fleet-carousel-container" 
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-stage">
        {EXTENDED_FLEET.map((vehicle, index) => {
          const diff = index - activeIndex;
          const isCenter = diff === 0;
          
          // Only render items near the center for performance, but enough for smooth sliding
          if (Math.abs(diff) > 3) return null;

          return (
            <div 
              key={`${vehicle.id}-${index}`} 
              className={`carousel-item pos-${diff} ${isCenter ? 'active' : ''}`}
              style={{ 
                '--glow-color': vehicle.glowColor,
                transition: isAnimating ? 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              } as React.CSSProperties}
              onClick={() => {
                if (diff === -1) handleRotate('prev');
                if (diff === 1) handleRotate('next');
                if (diff === -2) { handleRotate('prev'); setTimeout(() => handleRotate('prev'), 100); }
                if (diff === 2) { handleRotate('next'); setTimeout(() => handleRotate('next'), 100); }
              }}
            >
              <div className="vehicle-podium">
                <div className="podium-glow"></div>
                <div className="podium-base"></div>
                <div className="car-image-container">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model} 
                    className="car-image"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stationary Details Container - Stays in place and Fades Out/In */}
      <div className="stationary-details-wrapper">
        <div className={`stationary-details ${isFadeOut ? 'fade-out' : 'fade-in'}`}>
          <h3>{displayedVehicle.model}</h3>
          <div className="v-meta">
            <Users size={16} /> <span>{displayedVehicle.capacity}</span>
          </div>
          <div className="v-features-fade visible">
            {displayedVehicle.features.map((f, i) => (
              <span key={i} className="f-tag">
                <ShieldCheck size={12} /> {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-nav-overlay">
        <button className="nav-btn prev" onClick={() => handleRotate('prev')} aria-label="Předchozí vůz">
          <ChevronLeft size={32} />
        </button>
        <button className="nav-btn next" onClick={() => handleRotate('next')} aria-label="Další vůz">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="carousel-pagination">
        {FLEET.map((_, i) => (
          <div 
            key={i} 
            className={`pagination-dot ${i === activeIndex % FLEET.length ? 'active' : ''}`}
            onClick={() => {
                const currentRel = activeIndex % FLEET.length;
                if (i > currentRel) handleRotate('next');
                if (i < currentRel) handleRotate('prev');
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FleetCarousel;
