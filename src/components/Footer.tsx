import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src="/SMB_Logo  .png" alt="SMB Logo" className="h-12 w-12 mr-3" />
              <h3 className="text-2xl font-bold">Send Me Builders</h3>
            </div>
            <p className="mb-6">Strong Hands • Strong Faith • Strong Futures</p>
            <p className="text-sm text-gray-400">
              "Here am I, send me." — Isaiah 6:8
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#campaign" className="hover:text-crossGold transition-colors">
                  The Movement
                </a>
              </li>
              <li>
                <a href="#crisis" className="hover:text-crossGold transition-colors">
                  The Crisis
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-crossGold transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-crossGold transition-colors">
                  Model
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-crossGold transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-crossGold transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#funding" className="hover:text-crossGold transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-crossGold transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-crossGold" />
                <span>info@sendmebuilders.org</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-crossGold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="mr-3 text-crossGold" />
                <span>Communities across America</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="bg-crossGold hover:bg-crossGold/90 text-black font-bold py-3 px-6 rounded-full transition-colors inline-block">
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Send Me Builders. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}