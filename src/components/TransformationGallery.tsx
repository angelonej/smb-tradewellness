import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
type BeforeAfterProject = {
  id: number;
  title: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};
export function TransformationGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeforeView, setIsBeforeView] = useState(true);
  const projects: BeforeAfterProject[] = [{
    id: 1,
    title: 'Florida Trailer Project #1 Renovation',
    location: 'Jacksonville, FL',
    description: 'Complete rehabilitation of a 2-bedroom manufactured home, including new plumbing, electrical work, and structural repairs.',
    beforeImage: "/20250927_114744.jpg",
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: 'This project taught me electrical skills I never thought I could learn. Now I have a career path and can support myself.',
      author: 'Marcus, 19',
      role: 'Program Participant'
    }
  }, {
    id: 2,
    title: 'Westside Apartments Unit 14',
    location: 'Jacksonville, FL',
    description: 'Rehabilitation of a water-damaged apartment unit, including new drywall, flooring, and kitchen renovation.',
    beforeImage: "/Screenshot_20250929_191614_Facebook.jpg",
    afterImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: 'Working alongside these young men changed my perspective on ministry. This is hands-on discipleship at its finest.',
      author: 'James',
      role: 'FBO Partner'
    }
  }, {
    id: 3,
    title: 'HPI Jesup Manufactured homes',
    location: 'Jesup, GA',
    description: 'Renovation of a deteriorated apartment building, transforming it into quality housing and creating an outpost for mentorship and training.',
    beforeImage: "/20250927_114951.jpg",
    afterImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: 'This space has become the heart of our community. Youth who were once on the streets now have a place to learn and grow.',
      author: 'Sarah',
      role: 'Community Leader'
    }
  }];
  const nextProject = () => {
    setActiveIndex(prev => prev === projects.length - 1 ? 0 : prev + 1);
    setIsBeforeView(true);
  };
  const prevProject = () => {
    setActiveIndex(prev => prev === 0 ? projects.length - 1 : prev - 1);
    setIsBeforeView(true);
  };
  const toggleView = () => {
    setIsBeforeView(!isBeforeView);
  };
  const activeProject = projects[activeIndex];
  return <section id="transformations" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Transformations</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          See the real impact of our work through these before and after
          transformations
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="bg-black/40 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Image container */}
            <div className="relative h-96 md:h-[500px] bg-black/50">
              <img src={isBeforeView ? activeProject.beforeImage : activeProject.afterImage} alt={`${activeProject.title} - ${isBeforeView ? 'Before' : 'After'}`} className="w-full h-full object-cover" />
              {/* Before/After label */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full font-bold">
                {isBeforeView ? 'BEFORE' : 'AFTER'}
              </div>
              {/* Toggle button */}
              <button onClick={toggleView} className="absolute bottom-4 right-4 bg-crossGold text-black font-bold px-6 py-3 rounded-full hover:bg-crossGold/90 transition-colors">
                View {isBeforeView ? 'After' : 'Before'}
              </button>
            </div>
            {/* Project info */}
            <div className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-crossGold">
                    {activeProject.title}
                  </h3>
                  <p className="text-white/70">{activeProject.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-steelBlue/20 text-steelBlue px-3 py-1 rounded-full text-sm border border-steelBlue/30">
                    Project #{activeProject.id}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-8">{activeProject.description}</p>
              {activeProject.testimonial && <div className="bg-black/30 p-6 rounded-lg border-l-4 border-crossGold mb-6">
                  <p className="italic text-white mb-4">
                    "{activeProject.testimonial.quote}"
                  </p>
                  <p className="font-bold text-crossGold">
                    {activeProject.testimonial.author}{' '}
                    <span className="font-normal text-white/70">
                      • {activeProject.testimonial.role}
                    </span>
                  </p>
                </div>}
              {/* Navigation controls */}
              <div className="flex justify-between items-center mt-8">
                <button onClick={prevProject} className="flex items-center text-white hover:text-crossGold transition-colors">
                  <ArrowLeft size={20} className="mr-2" />
                  Previous Project
                </button>
                <div className="flex space-x-2">
                  {projects.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-crossGold' : 'bg-white/30'}`} aria-label={`Go to project ${index + 1}`} />)}
                </div>
                <button onClick={nextProject} className="flex items-center text-white hover:text-crossGold transition-colors">
                  Next Project
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}