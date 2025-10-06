import React, { useState } from 'react';
import { FileText, Video, Download, Bookmark, ExternalLink, PlayCircle } from 'lucide-react';
type ResourceTab = 'fbos' | 'mentors' | 'youth' | 'partners';
type Resource = {
  id: number;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'guide' | 'toolkit';
  url: string;
  icon: React.ReactNode;
};
export function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<ResourceTab>('fbos');
  const resources: Record<ResourceTab, Resource[]> = {
    fbos: [{
      id: 1,
      title: 'FBO Partnership Guide',
      description: 'Step-by-step guide to establishing a Send Me Builders outpost in your community',
      type: 'pdf',
      url: '#',
      icon: <FileText size={24} />
    }, {
      id: 2,
      title: 'Outpost Setup Toolkit',
      description: 'Resources for acquiring, rehabilitating, and establishing a trailer outpost',
      type: 'toolkit',
      url: '#',
      icon: <Bookmark size={24} />
    }, {
      id: 3,
      title: 'Pastoral Mentorship Training',
      description: 'Training materials for pastors leading outpost ministries',
      type: 'video',
      url: '#',
      icon: <PlayCircle size={24} />
    }],
    mentors: [{
      id: 1,
      title: 'Mentor Handbook',
      description: 'Comprehensive guide to effective mentorship within the Send Me Builders model',
      type: 'pdf',
      url: '#',
      icon: <FileText size={24} />
    }, {
      id: 2,
      title: 'Skills Assessment Tools',
      description: 'Tools to evaluate and track youth progress in trade skills',
      type: 'toolkit',
      url: '#',
      icon: <Bookmark size={24} />
    }, {
      id: 3,
      title: 'Mentorship Best Practices',
      description: 'Video training series on effective mentorship techniques',
      type: 'video',
      url: '#',
      icon: <PlayCircle size={24} />
    }],
    youth: [{
      id: 1,
      title: 'Trade Skills Roadmap',
      description: 'Career pathway guide from beginner to certified tradesman',
      type: 'pdf',
      url: '#',
      icon: <FileText size={24} />
    }, {
      id: 2,
      title: 'Financial Literacy Guide',
      description: 'Basic financial management and planning for young tradesmen',
      type: 'guide',
      url: '#',
      icon: <Bookmark size={24} />
    }, {
      id: 3,
      title: 'Success Stories Video Series',
      description: 'Testimonials from program graduates now working in the trades',
      type: 'video',
      url: '#',
      icon: <PlayCircle size={24} />
    }],
    partners: [{
      id: 1,
      title: 'Partnership Opportunities',
      description: 'Ways corporations and foundations can support the mission',
      type: 'pdf',
      url: '#',
      icon: <FileText size={24} />
    }, {
      id: 2,
      title: 'Impact Measurement Framework',
      description: 'How we track and report program outcomes for partners',
      type: 'guide',
      url: '#',
      icon: <Bookmark size={24} />
    }, {
      id: 3,
      title: 'Corporate Volunteer Guide',
      description: 'Organizing effective volunteer events with your team',
      type: 'toolkit',
      url: '#',
      icon: <FileText size={24} />
    }]
  };
  return <section id="resources" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Resources</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Tools and materials to help you participate in the Send Me Builders
          movement
        </p>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-black/30 rounded-full p-1 flex flex-wrap justify-center">
            <button onClick={() => setActiveTab('fbos')} className={`px-6 py-3 rounded-full font-medium text-sm transition-colors ${activeTab === 'fbos' ? 'bg-crossGold text-black' : 'text-white hover:bg-white/10'}`}>
              For FBO
            </button>
            <button onClick={() => setActiveTab('mentors')} className={`px-6 py-3 rounded-full font-medium text-sm transition-colors ${activeTab === 'mentors' ? 'bg-crossGold text-black' : 'text-white hover:bg-white/10'}`}>
              For Mentors
            </button>
            <button onClick={() => setActiveTab('youth')} className={`px-6 py-3 rounded-full font-medium text-sm transition-colors ${activeTab === 'youth' ? 'bg-crossGold text-black' : 'text-white hover:bg-white/10'}`}>
              For Youth
            </button>
            <button onClick={() => setActiveTab('partners')} className={`px-6 py-3 rounded-full font-medium text-sm transition-colors ${activeTab === 'partners' ? 'bg-crossGold text-black' : 'text-white hover:bg-white/10'}`}>
              For Partners
            </button>
          </div>
        </div>
        {/* Resources grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources[activeTab].map(resource => <div key={resource.id} className="bg-black/40 rounded-lg shadow-lg overflow-hidden border border-white/10 hover:border-crossGold/50 transition-colors group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-charcoal/70 p-3 rounded-full text-crossGold mr-3 group-hover:bg-crossGold/20 transition-colors">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-crossGold transition-colors">
                      {resource.title}
                    </h3>
                    <span className="text-xs text-white/60 uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-sm">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <a href={resource.url} className="flex items-center text-crossGold hover:text-white transition-colors text-sm font-medium">
                    {resource.type === 'video' ? <>
                        Watch Now
                        <PlayCircle size={16} className="ml-1" />
                      </> : <>
                        Download
                        <Download size={16} className="ml-1" />
                      </>}
                  </a>
                  <a href={resource.url} className="text-white/50 hover:text-white transition-colors" aria-label="View resource">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Need custom resources or have questions about implementing Send Me
            Builders in your context?
          </p>
          <a href="#" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full inline-block transition-colors">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>;
}