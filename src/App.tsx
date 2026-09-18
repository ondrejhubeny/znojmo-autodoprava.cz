import Header from './sections/Header';
import Hero from './sections/Hero';
import StatsSection from './sections/StatsSection';
import ServicesSection from './sections/ServicesSection';
import FleetSection from './sections/FleetSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <FleetSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
