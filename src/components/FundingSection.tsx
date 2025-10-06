import React from 'react';
import { Building2, Wrench, Truck, Coffee, Cloud, GraduationCap } from 'lucide-react';
export function FundingSection() {
  return <section id="funding" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Funding Model</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <Building2 size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">FBO</h3>
            <p className="text-gray-300">
              Provide trailers and cover lot rent, establishing the physical
              foundation for community outposts.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <Wrench size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">SMB</h3>
            <p className="text-gray-300">
              Leads fundraising efforts for rehabilitation projects, technology
              platform development, and wellness initiatives.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <Truck size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Corporates</h3>
            <p className="text-gray-300">
              Sponsor tools, vehicles, building materials, food, and other
              essential resources for program operations.
            </p>
          </div>
          <div className="bg-black/40 p-8 rounded-lg shadow-lg text-center border border-white/10">
            <div className="bg-steelBlue p-4 rounded-full inline-block mb-4">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Foundations</h3>
            <p className="text-gray-300">
              Provide scholarships and grants to support education and career
              development for program participants.
            </p>
          </div>
        </div>
        <div className="bg-black/40 p-8 rounded-lg shadow-lg border border-white/10">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Corporate Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-steelBlue/20 rounded-full flex items-center justify-center border border-steelBlue/30">
                <span className="font-bold text-white">FORD</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-steelBlue/20 rounded-full flex items-center justify-center border border-steelBlue/30">
                <span className="font-bold text-white">DEWALT</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-steelBlue/20 rounded-full flex items-center justify-center border border-steelBlue/30">
                <span className="font-bold text-white">HOME DEPOT</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-steelBlue/20 rounded-full flex items-center justify-center border border-steelBlue/30">
                <span className="font-bold text-white">CHICK-FIL-A</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-steelBlue/20 rounded-full flex items-center justify-center border border-steelBlue/30">
                <span className="font-bold text-white">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}