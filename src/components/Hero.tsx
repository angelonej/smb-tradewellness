import React from 'react';
export function Hero() {
  return <section className="bg-black text-white min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 flex justify-center">
            <img src="/SMB_Logo.png" alt="Send Me Builders Logo" className="w-64 h-64" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            Send Me Builders
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-crossGold">
            Strong Hands • Strong Faith • Strong Futures
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#campaign" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full transition-colors">
              Join The Movement
            </a>
            <a href="#support" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors">
              Support Us
            </a>
          </div>
        </div>
      </div>
    </section>;
}