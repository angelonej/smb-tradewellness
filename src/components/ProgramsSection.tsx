import React from 'react';
import { Home, Server, Heart, Award, Music } from 'lucide-react';
export function ProgramsSection() {
  return <section id="programs" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
            <div className="bg-steelBlue p-6 flex justify-center">
              <Home size={48} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Send Me Builders</h3>
              <p className="text-gray-300">
                Our core program providing housing acquisition, rehabilitation,
                and ongoing mentorship to create sustainable community outposts.
              </p>
            </div>
          </div>
          <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
            <div className="bg-charcoal p-6 flex justify-center">
              <Server size={48} className="text-steelBlue" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Send Me Pro</h3>
              <p className="text-gray-300">
                First-to-market Field Service Management SaaS platform
                specifically designed for nonprofits, enhancing operational
                efficiency.
              </p>
            </div>
          </div>
          <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
            <div className="bg-forestGreen p-6 flex justify-center">
              <Heart size={48} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Send Me Wellness</h3>
              <p className="text-gray-300">
                Holistic wellness program providing meals, gym access, and
                Legacy AI for Scripture-based encouragement and guidance.
              </p>
            </div>
          </div>
          <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
            <div className="bg-crossGold p-6 flex justify-center">
              <Award size={48} className="text-charcoal" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Send Me Heroes</h3>
              <p className="text-gray-300">
                Recognition program celebrating the mentors who dedicate their
                time and expertise to guiding and supporting youth.
              </p>
            </div>
          </div>
          <div className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10">
            <div className="bg-brickRed p-6 flex justify-center">
              <Music size={48} className="text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Arts & Music</h3>
              <p className="text-gray-300">
                Creative expression programs featuring John's music ministry and
                Lawrence's art outreach initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}