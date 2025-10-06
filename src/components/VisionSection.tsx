import React from 'react';
import { Home, Truck, Building } from 'lucide-react';
export function VisionSection() {
  return <section id="vision" className="py-20 px-4 bg-black text-cream-500">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white">The Vision</h2>
          <p className="text-xl italic mb-8 text-crossGold">
            "Here am I, send me." — Isaiah 6:8
          </p>
          <p className="text-lg">
            Our vision is to mobilize 25 million tradesmen of faith to bridge
            the gap between housing needs, skilled trades, and spiritual truth,
            creating pathways for youth while restoring communities and
            revealing God.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-4">
          <div className="flex flex-col items-center">
            <div className="bg-crossGold p-6 rounded-full mb-4">
              <Home size={40} className="text-black" />
            </div>
            <span className="text-lg font-medium">Housing</span>
          </div>
          <div className="flex items-center justify-center">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z" fill="#FFD700" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-crossGold p-6 rounded-full mb-4">
              <Truck size={40} className="text-black" />
            </div>
            <span className="text-lg font-medium">Trades</span>
          </div>
          <div className="flex items-center justify-center">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M59.0607 13.0607C59.6464 12.4749 59.6464 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM0 13.5H58V10.5H0V13.5Z" fill="#FFD700" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-crossGold p-6 rounded-full mb-4">
              <Building size={40} className="text-black" />
            </div>
            <span className="text-lg font-medium">Truth</span>
          </div>
        </div>
      </div>
    </section>;
}