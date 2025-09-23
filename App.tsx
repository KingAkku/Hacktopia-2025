import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Sponsors from './Sponsors';
import Guidelines from './Guidelines';
import MoreInfo from './MoreInfo';
import Schedule from './Schedule';
import PrizePool from './PrizePool';
import Benefits from './Benefits';
import Coordinators from './Judges';
import Location from './Location';
import FAQ from './FAQ';
import Footer from './Footer';
import BubbleBackground from './BubbleBackground';

const App: React.FC = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      header: '[data-scroll-header]',
      offset: 60,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-slate-700 relative overflow-x-hidden">
      <BubbleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Sponsors />
          <Guidelines />
          <Schedule />
          <PrizePool />
          <Benefits />
          <Coordinators />
          <MoreInfo />
          <Location />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;