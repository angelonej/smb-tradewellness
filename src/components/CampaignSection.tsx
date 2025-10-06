import React from 'react';
import { Truck, Wrench, Users, Home, Building, ArrowRight } from 'lucide-react';
export function CampaignSection() {
  return <section id="campaign" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-crossGold">CREATE A MOVEMENT</span>
          </h2>
          <p className="text-xl md:text-2xl text-center mb-16">
            Mobilizing 25 million tradesmen of faith to transform communities
            across America
          </p>
          {/* Main campaign narrative */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-charcoal/70 p-8 rounded-lg border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-crossGold">
                The Mission
              </h3>
              <p className="text-lg mb-6">
                Send Me Builders is creating a nationwide movement of tradesmen
                returning to their communities to repair manufactured homes and
                apartments alongside at-risk youth.
              </p>
              <p className="text-lg mb-6">
                We're building a bridge between skilled workers, local
                faith-based organizations, and young men seeking purpose,
                creating pathways to meaningful careers while revealing
                spiritual truth.
              </p>
              <div className="flex items-center text-lg text-crossGold font-bold">
                <span>25 Million Tradesmen</span>
                <ArrowRight className="mx-2" />
                <span>Communities Transformed</span>
              </div>
            </div>
            <div className="bg-charcoal/40 rounded-lg overflow-hidden relative h-80 border border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="bg-crossGold p-4 rounded-full mb-3">
                      <Home size={32} className="text-black" />
                    </div>
                    <p className="font-bold text-white">Housing</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-crossGold p-4 rounded-full mb-3">
                      <Wrench size={32} className="text-black" />
                    </div>
                    <p className="font-bold text-white">Trades</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-crossGold p-4 rounded-full mb-3">
                      <Building size={32} className="text-black" />
                    </div>
                    <p className="font-bold text-white">Truth</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-crossGold">
                    Our Model
                  </h3>
                  <p className="text-white">
                    Connecting housing needs with trade skills and spiritual
                    truth
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Campaign stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-charcoal/50 p-6 rounded-lg text-center border border-white/10">
              <div className="text-4xl font-bold text-crossGold mb-2">25M+</div>
              <p className="text-white">Tradesmen of faith across America</p>
            </div>
            <div className="bg-charcoal/50 p-6 rounded-lg text-center border border-white/10">
              <div className="text-4xl font-bold text-crossGold mb-2">8.7M</div>
              <p className="text-white">Youth without father figures</p>
            </div>
            <div className="bg-charcoal/50 p-6 rounded-lg text-center border border-white/10">
              <div className="text-4xl font-bold text-crossGold mb-2">
                350K+
              </div>
              <p className="text-white">
                Faith-based organizations ready to engage
              </p>
            </div>
            <div className="bg-charcoal/50 p-6 rounded-lg text-center border border-white/10">
              <div className="text-4xl font-bold text-crossGold mb-2">450K</div>
              <p className="text-white">Annual trade worker shortage</p>
            </div>
          </div>
          {/* Platform showcase */}
          <div className="bg-charcoal/70 rounded-lg overflow-hidden border border-white/10 shadow-xl mb-16">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-crossGold">
                The SaaS Platform Driving Our Movement
              </h3>
              <p className="text-lg text-center mb-8 text-white">
                A multi-million dollar technology platform freely distributed to
                faith-based organizations and nonprofits
              </p>
              <div className="bg-black rounded-lg p-6 border border-crossGold/30">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-charcoal p-5 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-crossGold p-2 rounded-full mr-3">
                        <Users size={20} className="text-black" />
                      </div>
                      <h4 className="font-bold text-white">
                        Mentorship Tracking
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Track mentor-mentee relationships, meeting frequency, and
                      growth milestones
                    </p>
                  </div>
                  <div className="bg-charcoal p-5 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-crossGold p-2 rounded-full mr-3">
                        <Truck size={20} className="text-black" />
                      </div>
                      <h4 className="font-bold text-white">
                        Project Management
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Organize rehabilitation projects, assign teams, and track
                      materials
                    </p>
                  </div>
                  <div className="bg-charcoal p-5 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-crossGold p-2 rounded-full mr-3">
                        <Wrench size={20} className="text-black" />
                      </div>
                      <h4 className="font-bold text-white">
                        Skills Development
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Document skill acquisition, certifications, and career
                      pathway progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Join The Movement Today
            </h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Whether you're a tradesman, youth leader, FBO leader, or someone
              passionate about transforming communities, there's a place for you
              in this movement.
            </p>
            <a href="#support" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-4 px-10 rounded-full inline-block transition-colors text-lg">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>;
}