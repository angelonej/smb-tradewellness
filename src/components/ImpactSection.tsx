import React from 'react';
import { Home, Users, Briefcase, CheckCircle } from 'lucide-react';
export function ImpactSection() {
  return <section id="impact" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Impact</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          See how Send Me Builders is making a real difference in communities
          across America.
        </p>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="text-5xl font-bold mb-2 text-crossGold">12</div>
            <p className="text-gray-300">
              Manufactured home outposts established
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="text-5xl font-bold mb-2 text-crossGold">87</div>
            <p className="text-gray-300">Youth in mentorship programs</p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="text-5xl font-bold mb-2 text-crossGold">24</div>
            <p className="text-gray-300">Youth placed in trade careers</p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="text-5xl font-bold mb-2 text-crossGold">6</div>
            <p className="text-gray-300">FBO partnerships formed</p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
              <div className="h-48 bg-steelBlue/20 flex items-center justify-center">
                <Users size={48} className="text-steelBlue" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Jackson's Journey</h4>
                <p className="text-gray-300 mb-4">
                  "After joining the SMB program, I learned electrical skills
                  and found my purpose. Now I'm employed full-time and mentoring
                  other youth."
                </p>
                <p className="italic text-gray-400">
                  — Jackson, 22, Program Graduate
                </p>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
              <div className="h-48 bg-steelBlue/20 flex items-center justify-center">
                <Home size={48} className="text-steelBlue" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">
                  Transforming Jacksonville
                </h4>
                <p className="text-gray-300 mb-4">
                  "Our faith-based organization partnered with SMB to establish
                  an outpost in Jacksonville. In just one year, we've seen
                  remarkable community transformation."
                </p>
                <p className="italic text-gray-400">— Mike, FBO Partner</p>
              </div>
            </div>
            <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
              <div className="h-48 bg-steelBlue/20 flex items-center justify-center">
                <Briefcase size={48} className="text-steelBlue" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">Corporate Impact</h4>
                <p className="text-gray-300 mb-4">
                  "Partnering with SMB has been rewarding for our company. We've
                  seen firsthand how our resources are creating real pathways
                  for youth."
                </p>
                <p className="italic text-gray-400">
                  — Sarah, Corporate Partner
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/40 p-8 rounded-lg shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our 2028 Goals
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-crossGold p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">
                    50 Manufactured Home Outposts
                  </h4>
                  <p className="text-gray-300">
                    Establish 50 active manufactured home outposts across 15
                    states, creating a nationwide network.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-crossGold p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">
                    500 Youth in Trades
                  </h4>
                  <p className="text-gray-300">
                    Place 500 youth in sustainable trade careers with ongoing
                    mentorship support.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-6">
                <div className="bg-crossGold p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">
                    25 FBO Partnerships
                  </h4>
                  <p className="text-gray-300">
                    Form strategic partnerships with 25 faith-based
                    organizations to expand our community presence.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-crossGold p-2 rounded-full mr-4 mt-1">
                  <CheckCircle size={20} className="text-charcoal" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">
                    Technology Platform Growth
                  </h4>
                  <p className="text-gray-300">
                    Scale our SaaS platform to support 100+ nonprofit
                    organizations nationwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}