import React, { useState } from 'react';
import { CheckCircle, Home, User, Users, Building, Award, ChevronDown, ChevronUp } from 'lucide-react';
type TimelineEvent = {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievements?: string[];
  isExpanded?: boolean;
};
export function TimelineJourney() {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([{
    id: 1,
    year: '2025',
    title: 'Send Me Builders Founded',
    description: 'The organization was established with a vision to bridge the gap between housing needs, skilled trades, and spiritual truth.',
    icon: <Home size={24} className="text-white" />,
    achievements: ['Initial concept developed', 'Core team assembled', 'First faith-based organization partnerships established'],
    isExpanded: false
  }, {
    id: 2,
    year: '2026',
    title: 'First Manufactured Home Outpost',
    description: 'Acquired and rehabilitated the first manufactured home outpost in Jacksonville, FL, establishing a model for future locations.',
    icon: <Building size={24} className="text-white" />,
    achievements: ['First home renovation completed', 'Youth leader moved into the community', 'Initial mentorship program launched'],
    isExpanded: false
  }, {
    id: 3,
    year: '2026',
    title: 'Technology Platform Launch',
    description: 'Developed and launched the Send Me Pro platform to track mentorships, projects, and community impact.',
    icon: <User size={24} className="text-white" />,
    achievements: ['SaaS platform development', 'Integration with FBO partners', 'Digital skills tracking implemented'],
    isExpanded: false
  }, {
    id: 4,
    year: '2028',
    title: 'Nationwide Expansion',
    description: 'Expanded to multiple states with 12 active outposts and growing partnerships across America.',
    icon: <Users size={24} className="text-white" />,
    achievements: ['Expanded to 6 states', '12 active outposts established', '87 youth in active mentorship', '24 youth placed in trade careers'],
    isExpanded: false
  }, {
    id: 5,
    year: '2028',
    title: 'Vision for the Future',
    description: 'Strategic plan to establish 50 outposts across 15 states, with a goal of placing 500 youth in sustainable trade careers.',
    icon: <Award size={24} className="text-white" />,
    achievements: ['50 outposts across 15 states', '500 youth in sustainable careers', '25 faith-based organization partnerships', 'Technology platform expansion'],
    isExpanded: false
  }]);
  const toggleExpand = (id: number) => {
    setTimelineEvents(prevEvents => prevEvents.map(event => event.id === id ? {
      ...event,
      isExpanded: !event.isExpanded
    } : event));
  };
  return <section id="timeline" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Our Journey</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          From vision to nationwide movement: the story of Send Me Builders
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-crossGold/30"></div>
            {/* Timeline events */}
            {timelineEvents.map((event, index) => <div key={event.id} className="relative z-10 mb-12">
                {/* Year marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-16 h-16 rounded-full bg-crossGold flex items-center justify-center">
                  {event.icon}
                </div>
                {/* Content box */}
                <div className={`${index % 2 === 0 ? 'ml-auto pl-12 pr-0' : 'mr-auto pr-12 pl-0'} w-full md:w-1/2 pt-8`}>
                  <div className="bg-charcoal/70 rounded-lg p-6 border border-white/10 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-crossGold text-black text-sm font-bold rounded-full mb-2">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {event.title}
                        </h3>
                      </div>
                      {event.achievements && <button onClick={() => toggleExpand(event.id)} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label={event.isExpanded ? 'Collapse details' : 'Expand details'}>
                          {event.isExpanded ? <ChevronUp size={18} className="text-white/70" /> : <ChevronDown size={18} className="text-white/70" />}
                        </button>}
                    </div>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    {event.isExpanded && event.achievements && <div className="mt-4 pt-4 border-t border-white/10">
                        <h4 className="font-bold mb-3 text-white">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, i) => <li key={i} className="flex items-start">
                              <CheckCircle size={16} className="text-crossGold mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">
                                {achievement}
                              </span>
                            </li>)}
                        </ul>
                      </div>}
                    {!event.isExpanded && event.achievements && <button onClick={() => toggleExpand(event.id)} className="text-sm text-crossGold hover:text-crossGold/80 transition-colors mt-2">
                        Show achievements
                      </button>}
                  </div>
                </div>
              </div>)}
          </div>
          {/* Future marker */}
          <div className="text-center relative z-10">
            <div className="inline-block px-6 py-3 bg-crossGold text-black font-bold rounded-full">
              The Journey Continues
            </div>
          </div>
        </div>
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            Our mission is just beginning. With each new outpost, each youth
            mentored, and each community transformed, we move closer to our
            vision of bridging the gap between housing needs, skilled trades,
            and spiritual truth across America.
          </p>
          <div className="mt-8">
            <a href="#support" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full inline-block transition-colors">
              Be Part of Our Story
            </a>
          </div>
        </div>
      </div>
    </section>;
}