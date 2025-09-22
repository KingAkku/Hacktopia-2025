import React from 'react';
import TrophyIcon from './icon/TrophyIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const prizeData = [
  { rank: '1st Place', amount: '₹2500', color: 'text-yellow-400', borderColor: 'border-yellow-400' },
  { rank: '2nd Place', amount: '₹1500', color: 'text-slate-400', borderColor: 'border-slate-400' },
  { rank: '3rd Place', amount: '₹1000', color: 'text-amber-600', borderColor: 'border-amber-600' },
];

const PrizeCard: React.FC<{ prize: typeof prizeData[0] }> = ({ prize }) => {
  return (
    <div className={`prize-card p-8 bg-white rounded-2xl shadow-lg border-t-4 ${prize.borderColor} text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_35px_rgba(34,197,94,0.35)]`}>
      <div className="flex justify-center mb-4">
        <TrophyIcon className={`w-16 h-16 ${prize.color}`} />
      </div>
      <h3 className="text-3xl font-bold text-gray-800">{prize.rank}</h3>
      <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 my-2">{prize.amount}</p>
    </div>
  );
};

const Prizes: React.FC = () => {
    const container = React.useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from('.prize-card', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out',
        });
    }, { scope: container });

  return (
    <section id="prizes" ref={container} className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4">
            <h2 className="text-5xl font-bold">
              Prizes & Recognition
            </h2>
          </div>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto">
            <p className="leading-relaxed">
              Compete for glory and a prize pool of ₹5000! All participants who submit a project will receive a certificate, plus exclusive swag and networking opportunities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prizeData.map((prize, index) => (
            <PrizeCard key={index} prize={prize} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;