import React from 'react';
export function CTASection() {
  return <section className="py-20 px-4 bg-crossGold text-charcoal">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-12">
            Join us in bridging the gap between housing, trades, and faith.
            Together, we can create pathways for youth and transform
            communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#support" className="bg-steelBlue hover:bg-steelBlue/90 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
              Support Our Mission
            </a>
            <a href="#" className="bg-charcoal hover:bg-black text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>;
}