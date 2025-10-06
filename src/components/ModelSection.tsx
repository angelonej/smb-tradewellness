import React from 'react';
import { Home, Users, TrendingUp, Building } from 'lucide-react';
export function ModelSection() {
  return <section id="model" className="py-20 px-4 bg-black text-cream-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">The Model</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-10">
              <div className="flex items-start mb-4">
                <div className="bg-amber-500 p-3 rounded-full mr-4 mt-1">
                  <span className="font-bold text-black">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    FBO Acquires Manufactured Home
                  </h3>
                  <p className="text-cream-400">
                    Local faith-based organizations invest in acquiring
                    manufactured homes within high-need communities,
                    establishing a physical presence where it's needed most.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-start mb-4">
                <div className="bg-amber-500 p-3 rounded-full mr-4 mt-1">
                  <span className="font-bold text-black">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    SMB Negotiates & Mentors Rehab
                  </h3>
                  <p className="text-cream-400">
                    Send Me Builders negotiates the rehabilitation process and
                    provides mentorship throughout, teaching valuable trade
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-start mb-4">
                <div className="bg-amber-500 p-3 rounded-full mr-4 mt-1">
                  <span className="font-bold text-black">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Youth Leader Moves In
                  </h3>
                  <p className="text-cream-400">
                    A youth leader relocates to the rehabilitated home,
                    launching an "Outpost" within the community.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-4">
                <div className="bg-amber-500 p-3 rounded-full mr-4 mt-1">
                  <span className="font-bold text-black">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Youth + Mentors Ride Together
                  </h3>
                  <p className="text-cream-400">
                    Youth and mentors travel together, creating a pipeline that
                    connects trades skills with faith formation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-neutral-900 rounded-xl p-8 shadow-lg border border-cream-800/30">
              <div className="flex flex-col items-center">
                <div className="bg-amber-500 text-black p-5 rounded-full mb-6">
                  <Home size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Housing</h3>
                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center">
                    <div className="bg-amber-500/20 p-4 rounded-full mb-3">
                      <Users size={24} className="text-amber-500" />
                    </div>
                    <p className="text-center text-sm font-medium">Youth</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-amber-500/20 p-4 rounded-full mb-3">
                      <TrendingUp size={24} className="text-amber-500" />
                    </div>
                    <p className="text-center text-sm font-medium">Trades</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-amber-500/20 p-4 rounded-full mb-3">
                      <Building size={24} className="text-amber-500" />
                    </div>
                    <p className="text-center text-sm font-medium">Faith</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Connecting lines */}
            <svg className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 hidden md:block" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40H80M40 0V80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>;
}