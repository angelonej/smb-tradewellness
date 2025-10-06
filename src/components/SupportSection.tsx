import React from 'react';
import { DollarSign, Clock, Share2, Heart } from 'lucide-react';
export function SupportSection() {
  return <section id="support" className="py-20 px-4 bg-crossGold text-charcoal">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Support Our Mission
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Join us in bridging the gap between housing needs, skilled trades, and
          spiritual truth. Your support creates pathways for youth while
          restoring communities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-white/10">
            <div className="bg-steelBlue text-white p-6 flex justify-center">
              <DollarSign size={40} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="text-gray-300 mb-4">
                Your financial contribution directly supports trailer
                rehabilitation, mentorship programs, and technology development.
              </p>
              <a href="#" className="bg-steelBlue text-white px-4 py-2 rounded-full inline-block hover:bg-steelBlue/80 transition-colors">
                Give Now
              </a>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-white/10">
            <div className="bg-steelBlue text-white p-6 flex justify-center">
              <Clock size={40} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="text-gray-300 mb-4">
                Share your time and skills. We need mentors, trade
                professionals, and administrative support.
              </p>
              <a href="#" className="bg-steelBlue text-white px-4 py-2 rounded-full inline-block hover:bg-steelBlue/80 transition-colors">
                Join Us
              </a>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-white/10">
            <div className="bg-steelBlue text-white p-6 flex justify-center">
              <Share2 size={40} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
              <p className="text-gray-300 mb-4">
                Follow us on social media and share our mission with your
                network to amplify our impact.
              </p>
              <div className="flex space-x-2">
                <a href="#" className="bg-steelBlue text-white p-2 rounded-full hover:bg-steelBlue/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-steelBlue text-white p-2 rounded-full hover:bg-steelBlue/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-steelBlue text-white p-2 rounded-full hover:bg-steelBlue/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-steelBlue text-white p-2 rounded-full hover:bg-steelBlue/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-white/10">
            <div className="bg-steelBlue text-white p-6 flex justify-center">
              <Heart size={40} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
              <p className="text-gray-300 mb-4">
                Churches, businesses, and organizations can partner with us to
                create greater impact together.
              </p>
              <a href="#" className="bg-steelBlue text-white px-4 py-2 rounded-full inline-block hover:bg-steelBlue/80 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-black text-white p-8 rounded-lg shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Monthly Giving Program
          </h3>
          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our "Builders Circle" monthly giving program and help us create
            sustainable change. Monthly donors receive exclusive updates,
            special event invitations, and recognition opportunities.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-charcoal p-4 rounded-lg text-center cursor-pointer hover:bg-steelBlue/20 transition-colors border border-white/10">
              <h4 className="font-bold text-xl mb-2">$25</h4>
              <p className="text-sm text-gray-400">Foundation Builder</p>
            </div>
            <div className="bg-charcoal p-4 rounded-lg text-center cursor-pointer hover:bg-steelBlue/20 transition-colors border border-white/10">
              <h4 className="font-bold text-xl mb-2">$50</h4>
              <p className="text-sm text-gray-400">Community Builder</p>
            </div>
            <div className="bg-charcoal p-4 rounded-lg text-center cursor-pointer hover:bg-steelBlue/20 transition-colors border border-white/10">
              <h4 className="font-bold text-xl mb-2">$100</h4>
              <p className="text-sm text-gray-400">Legacy Builder</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="bg-crossGold text-charcoal px-6 py-3 rounded-full inline-block hover:bg-crossGold/90 transition-colors font-bold">
              Become a Monthly Supporter
            </a>
          </div>
        </div>
      </div>
    </section>;
}