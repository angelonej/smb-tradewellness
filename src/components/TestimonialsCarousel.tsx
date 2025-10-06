import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  location?: string;
  image?: string;
  type: 'youth' | 'mentor' | 'fbo' | 'partner';
};
export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const testimonials: Testimonial[] = [{
    id: 1,
    quote: 'Send Me Builders gave me purpose and direction when I had none. Learning electrical work alongside men who care about me changed my life. I now have a career and can support myself.',
    author: 'Jackson',
    role: 'Program Graduate',
    location: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    type: 'youth'
  }, {
    id: 2,
    quote: "As a tradesman with 30 years of experience, I was looking for a way to give back. Send Me Builders connected me with young men eager to learn. Seeing them grow into skilled workers and men of character is the most rewarding thing I've ever done.",
    author: 'Mike',
    role: 'Mentor',
    location: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    type: 'mentor'
  }, {
    id: 3,
    quote: 'Our faith-based organization partnered with Send Me Builders to establish an outpost in our community. The transformation has been incredible - both in the physical spaces being rehabilitated and in the lives of the young men finding purpose through trades and faith.',
    author: 'Williams',
    role: 'FBO Partner',
    location: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    type: 'fbo'
  }, {
    id: 4,
    quote: "As a corporate partner, we've seen firsthand how Send Me Builders creates sustainable change. Their model addresses housing needs, workforce development, and youth mentorship all at once. It's a holistic approach that works.",
    author: 'Sarah Johnson',
    role: 'Corporate Partner',
    location: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    type: 'partner'
  }, {
    id: 5,
    quote: "I was headed down a dangerous path before I joined this program. Learning carpentry skills gave me confidence, and the mentors showed me what it means to be a person of integrity. Now I'm helping other guys like me.",
    author: 'Tyrone',
    role: 'Program Graduate & Mentor',
    location: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    type: 'youth'
  }];
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);
  const nextTestimonial = () => {
    setIsAutoplay(false);
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setIsAutoplay(false);
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'youth':
        return 'bg-steelBlue';
      case 'mentor':
        return 'bg-crossGold';
      case 'fbo':
        return 'bg-forestGreen';
      case 'partner':
        return 'bg-brickRed';
      default:
        return 'bg-gray-500';
    }
  };
  const activeTestimonial = testimonials[activeIndex];
  return <section id="testimonials" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Voices of Impact
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Hear from the people whose lives have been transformed by the Send Me
          Builders movement
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="bg-charcoal/40 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative">
            <div className="absolute top-10 left-10 text-crossGold opacity-30">
              <Quote size={120} />
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image column */}
              <div className="relative h-full min-h-[300px] bg-black/50">
                {activeTestimonial.image ? <img src={activeTestimonial.image} alt={activeTestimonial.author} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-charcoal flex items-center justify-center">
                      <span className="text-5xl text-white/50">
                        {activeTestimonial.author.charAt(0)}
                      </span>
                    </div>
                  </div>}
                <div className="absolute bottom-4 left-4">
                  <div className={`${getTypeColor(activeTestimonial.type)} px-3 py-1 rounded-full text-sm text-white font-medium capitalize`}>
                    {activeTestimonial.type}
                  </div>
                </div>
              </div>
              {/* Content column */}
              <div className="p-8 md:p-12 relative z-10">
                <div className="mb-8">
                  <p className="text-xl italic leading-relaxed text-white">
                    "{activeTestimonial.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl text-crossGold">
                    {activeTestimonial.author}
                  </p>
                  <p className="text-white/80">{activeTestimonial.role}</p>
                  {activeTestimonial.location && <p className="text-white/60 text-sm mt-1">
                      {activeTestimonial.location}
                    </p>}
                </div>
                {/* Navigation controls */}
                <div className="flex justify-between items-center mt-8">
                  <button onClick={prevTestimonial} className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors" aria-label="Previous testimonial">
                    <ArrowLeft size={20} className="text-white" />
                  </button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => <button key={index} onClick={() => {
                    setIsAutoplay(false);
                    setActiveIndex(index);
                  }} className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-crossGold' : 'bg-white/30'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
                  </div>
                  <button onClick={nextTestimonial} className="bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors" aria-label="Next testimonial">
                    <ArrowRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}