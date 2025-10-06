import React, { useEffect, useState } from 'react';
import { DollarSign, Home, Users } from 'lucide-react';
export function DonationCalculator() {
  const [donationAmount, setDonationAmount] = useState(100);
  const [impactData, setImpactData] = useState({
    youthSupported: 0,
    hoursOfTraining: 0,
    materialsProvided: 0
  });
  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  useEffect(() => {
    // Calculate impact based on donation amount
    setImpactData({
      youthSupported: Math.floor(donationAmount / 25),
      hoursOfTraining: Math.floor(donationAmount * 2.5),
      materialsProvided: Math.floor(donationAmount * 1.5)
    });
  }, [donationAmount]);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setDonationAmount(value);
    }
  };
  const handlePresetClick = (amount: number) => {
    setDonationAmount(amount);
  };
  return <section id="donation-calculator" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">See Your Impact</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Calculate how your donation directly impacts youth, communities, and
          the mission
        </p>
        <div className="max-w-4xl mx-auto bg-charcoal/70 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Donation input side */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Your Donation
                </h3>
                <div className="mb-8">
                  <label htmlFor="donation-amount" className="block text-white/70 mb-2">
                    Enter donation amount:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <DollarSign size={20} className="text-crossGold" />
                    </div>
                    <input type="number" id="donation-amount" value={donationAmount} onChange={handleAmountChange} className="bg-black/50 border border-white/20 text-white text-xl font-bold rounded-lg pl-12 pr-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-crossGold focus:border-transparent" aria-label="Donation amount" min="0" />
                  </div>
                </div>
                <div className="mb-8">
                  <p className="text-white/70 mb-3">Quick select:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {presetAmounts.map(amount => <button key={amount} onClick={() => handlePresetClick(amount)} className={`py-2 px-4 rounded-lg border ${donationAmount === amount ? 'bg-crossGold text-black border-crossGold' : 'bg-black/30 border-white/20 text-white hover:bg-black/50'} transition-colors`} aria-label={`Donate $${amount}`}>
                        ${amount}
                      </button>)}
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#support-section" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-4 px-6 rounded-lg inline-block transition-colors w-full text-center">
                    Donate Now
                  </a>
                </div>
              </div>
              {/* Impact visualization side */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-6 text-white text-center">
                  Your Impact
                </h3>
                <div className="space-y-6">
                  <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <Users size={20} className="text-crossGold mr-2" />
                      <h4 className="font-bold">Youth Supported</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-white mr-3">
                        {impactData.youthSupported}
                      </div>
                      <div className="text-sm text-white/70">
                        young men receiving mentorship and training
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-5 h-5 bg-crossGold rounded-full flex items-center justify-center text-black mr-2">
                        <span className="text-xs font-bold">T</span>
                      </div>
                      <h4 className="font-bold">Training Hours</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-white mr-3">
                        {impactData.hoursOfTraining}
                      </div>
                      <div className="text-sm text-white/70">
                        hours of hands-on trades training provided
                      </div>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2">
                      <Home size={20} className="text-crossGold mr-2" />
                      <h4 className="font-bold">Materials Provided</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-white mr-3">
                        ${impactData.materialsProvided}
                      </div>
                      <div className="text-sm text-white/70">
                        worth of building materials for rehabilitation projects
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-white/70 text-sm italic">
                    "Every dollar you give creates ripple effects across
                    communities, transforming lives through housing, trades, and
                    truth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}