import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
type FAQ = {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'fbos' | 'mentors' | 'youth' | 'partners';
  isOpen: boolean;
};
export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [faqs, setFaqs] = useState<FAQ[]>([{
    id: 1,
    question: 'What is Send Me Builders?',
    answer: 'Send Me Builders is a faith-based organization that bridges the gap between housing needs, skilled trades, and spiritual truth. We work with faith-based organizations to establish community outposts in manufactured homes and apartments, where youth leaders live and mentor local youth through trades training, creating pathways to meaningful careers while nurturing spiritual growth.',
    category: 'general',
    isOpen: false
  }, {
    id: 2,
    question: 'How does the outpost model work?',
    answer: "Our model has four key steps: 1) A faith-based organization acquires a manufactured home in a high-need community; 2) Send Me Builders negotiates and mentors the rehabilitation process; 3) A youth leader moves into the rehabilitated home, establishing an 'Outpost'; 4) Youth and mentors work together on projects, learning trades skills while building relationships centered on faith and character development.",
    category: 'general',
    isOpen: false
  }, {
    id: 3,
    question: 'How can my faith-based organization become a partner?',
    answer: "Faith-based organizations can partner with Send Me Builders by committing to establish an outpost in their community. This involves acquiring a manufactured home, covering lot rent, and identifying a youth leader to live in the community. We provide the training, mentorship framework, and technology platform to support your outpost. Contact us through the 'Support Us' section to begin the partnership process.",
    category: 'fbos',
    isOpen: false
  }, {
    id: 4,
    question: 'What resources do you provide to FBO partners?',
    answer: 'We provide faith-based organizations with comprehensive resources including: outpost setup guides, mentor training materials, youth development curriculum, project management tools, access to our technology platform, and ongoing support from our team. We also help connect FBOs with corporate partners for tools, materials, and other resources needed for rehabilitation projects.',
    category: 'fbos',
    isOpen: false
  }, {
    id: 5,
    question: 'How can I become a mentor?',
    answer: "Tradesmen who want to become mentors can apply through our 'Support Us' section. We're looking for skilled professionals in electrical, plumbing, carpentry, HVAC, and other trades who have a heart for mentoring youth. Mentors commit to regular training sessions with youth, following our structured mentorship program. All mentors undergo background checks and training before being matched with youth participants.",
    category: 'mentors',
    isOpen: false
  }, {
    id: 6,
    question: 'What commitment is expected from mentors?',
    answer: 'Mentors typically commit to 4-8 hours per month for at least six months. This includes hands-on training sessions, check-ins with youth, and participation in community events. We work with your schedule to find a commitment level that works for you while providing consistent support to the youth in our program.',
    category: 'mentors',
    isOpen: false
  }, {
    id: 7,
    question: 'How can youth join the program?',
    answer: "Youth between 16-24 years old can join through one of our community outposts. Visit the 'Impact Map' section to find the nearest outpost location. Youth can also be referred by schools, community organizations, or faith-based organizations. There is no cost to participate, and no prior experience in trades is required—just a willingness to learn and grow.",
    category: 'youth',
    isOpen: false
  }, {
    id: 8,
    question: 'What skills will youth learn in the program?',
    answer: 'Youth in our program learn practical trade skills including basic electrical work, plumbing, carpentry, drywall installation, painting, and general construction. They also develop soft skills like punctuality, communication, teamwork, and problem-solving. Our holistic approach includes character development, financial literacy, and career planning.',
    category: 'youth',
    isOpen: false
  }, {
    id: 9,
    question: 'How can corporations and businesses partner with Send Me Builders?',
    answer: "Corporations can partner with us through financial sponsorship, in-kind donations of tools and materials, employee volunteer programs, and apprenticeship/employment opportunities for program graduates. We create custom partnership packages based on your company's goals and resources. Partners receive impact reports, recognition, and opportunities to engage directly with the communities we serve.",
    category: 'partners',
    isOpen: false
  }, {
    id: 10,
    question: 'What is the Send Me Pro technology platform?',
    answer: "Send Me Pro is our proprietary SaaS platform that helps manage mentorships, track skills development, coordinate projects, and measure impact. It connects youth, mentors, faith-based organizations, and partners in a collaborative ecosystem. The platform includes features for progress tracking, resource sharing, communication, and reporting. It's freely distributed to FBOs and nonprofits participating in our programs.",
    category: 'general',
    isOpen: false
  }]);
  const toggleFAQ = (id: number) => {
    setFaqs(prevFaqs => prevFaqs.map(faq => faq.id === id ? {
      ...faq,
      isOpen: !faq.isOpen
    } : faq));
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return <section id="faq" className="py-20 px-4 bg-charcoal text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Find answers to common questions about Send Me Builders
        </p>
        <div className="max-w-4xl mx-auto">
          {/* Search and filter */}
          <div className="mb-10 space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={20} className="text-white/50" />
              </div>
              <input type="text" placeholder="Search questions..." value={searchQuery} onChange={handleSearch} className="w-full bg-black/30 border border-white/20 rounded-lg pl-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-crossGold" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'all' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                All Questions
              </button>
              <button onClick={() => setActiveCategory('general')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'general' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                General
              </button>
              <button onClick={() => setActiveCategory('fbos')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'fbos' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                For FBOs
              </button>
              <button onClick={() => setActiveCategory('mentors')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'mentors' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                For Mentors
              </button>
              <button onClick={() => setActiveCategory('youth')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'youth' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                For Youth
              </button>
              <button onClick={() => setActiveCategory('partners')} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === 'partners' ? 'bg-crossGold text-black' : 'bg-black/30 text-white hover:bg-black/50'}`}>
                For Partners
              </button>
            </div>
          </div>
          {/* FAQ accordion */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? filteredFAQs.map(faq => <div key={faq.id} className="bg-black/40 rounded-lg border border-white/10 overflow-hidden transition-all duration-200">
                  <button onClick={() => toggleFAQ(faq.id)} className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none">
                    <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
                    {faq.isOpen ? <ChevronUp size={20} className="text-crossGold flex-shrink-0" /> : <ChevronDown size={20} className="text-crossGold flex-shrink-0" />}
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-200 ${faq.isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                    <div className="text-gray-300">{faq.answer}</div>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50 uppercase tracking-wider">
                        Category:{' '}
                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>) : <div className="text-center py-12 bg-black/30 rounded-lg border border-white/10">
                <p className="text-white/70">
                  No questions found matching your search.
                </p>
                <button onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }} className="mt-4 text-crossGold hover:underline">
                  Clear filters
                </button>
              </div>}
          </div>
          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-black/40 rounded-lg border border-white/10">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              If you couldn't find the answer you're looking for, please reach
              out to our team directly.
            </p>
            <a href="#" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-8 rounded-full inline-block transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
}