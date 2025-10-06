import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };
  return <section className="py-16 px-4 bg-steelBlue text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-crossGold text-charcoal p-3 rounded-full mb-6">
            <Mail size={30} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-lg mb-8">
            Join our newsletter to receive updates on our impact, upcoming
            events, and ways you can help.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="flex-grow px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-crossGold" required />
            <button type="submit" className="bg-crossGold hover:bg-crossGold/90 text-charcoal font-bold px-6 py-3 rounded-full flex items-center justify-center transition-colors" disabled={submitted}>
              {submitted ? 'Thank You!' : <>
                  Subscribe
                  <ArrowRight size={18} className="ml-2" />
                </>}
            </button>
          </form>
          <p className="text-sm text-gray-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>;
}