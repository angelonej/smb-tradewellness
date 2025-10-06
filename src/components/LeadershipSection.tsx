import React from 'react';
import { Linkedin } from 'lucide-react';
type LeaderInfo = {
  name: string;
  title: string;
  description: string;
  image: string;
  linkedinUrl?: string;
};
export function LeadershipSection() {
  const leadershipTeam: LeaderInfo[] = [{
    name: 'Peter',
    title: 'Planter & Network Builder',
    description: 'Leads the vision and strategic direction, building networks with churches, corporations, and communities.',
    image: "/image_peter.jpg",
    linkedinUrl: 'https://linkedin.com/in/peter-sendmebuilders'
  }, {
    name: 'CFO',
    title: 'Chief Fundraiser',
    description: 'Manages financial strategy and leads fundraising initiatives to support program growth and sustainability.',
    image: '',
    linkedinUrl: 'https://linkedin.com/in/cfo-sendmebuilders'
  }, {
    name: 'Lawrence',
    title: 'Youth Pastor & Arts Mission',
    description: 'Directs youth engagement and leads arts-focused outreach initiatives to foster creativity and expression.',
    image: "/Screenshot_lawrence.jpg",
    linkedinUrl: 'https://linkedin.com/in/lawrence-sendmebuilders'
  }, {
    name: 'John',
    title: 'Music & Technology',
    description: 'Oversees music ministry and technology development, ensuring innovative solutions support program delivery.',
    image: "/image_John.jpg",
    linkedinUrl: 'https://linkedin.com/in/john-sendmebuilders'
  }];
  return <section id="leadership" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((leader, index) => <div key={index} className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:shadow-xl hover:border-white/20">
              <div className="h-64 bg-steelBlue/20 flex items-center justify-center">
                {leader.image ? <img src={leader.image} alt={`${leader.name} - ${leader.title}`} className="w-full h-full object-cover" /> : <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-steelBlue">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-gray-400 mb-4">{leader.title}</p>
                  </div>
                  {leader.linkedinUrl && <a href={leader.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`Connect with ${leader.name} on LinkedIn`} className="bg-black/40 hover:bg-crossGold hover:text-black p-2 rounded-full transition-all duration-300 transform hover:scale-110">
                      <Linkedin size={18} />
                    </a>}
                </div>
                <p className="text-gray-300">{leader.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Board of Advisors</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our board consists of FBO leaders and corporate advisors who provide
            guidance, expertise, and oversight to ensure our mission stays true
            and effective.
          </p>
        </div>
      </div>
    </section>;
}