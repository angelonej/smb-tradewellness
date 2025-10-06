import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Image_Logo_Small.png" alt="SMB Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold text-crossGold">SMB</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#campaign" className="hover:text-crossGold transition-colors">
            The Movement
          </a>
          <a href="#crisis" className="hover:text-crossGold transition-colors">
            The Crisis
          </a>
          <a href="#vision" className="hover:text-crossGold transition-colors">
            Vision
          </a>
          <a href="#model" className="hover:text-crossGold transition-colors">
            Model
          </a>
          <a href="#programs" className="hover:text-crossGold transition-colors">
            Programs
          </a>
          <a href="#impact" className="hover:text-crossGold transition-colors">
            Impact
          </a>
          <a href="#technology" className="hover:text-crossGold transition-colors">
            Technology
          </a>
          <a href="#funding" className="hover:text-crossGold transition-colors">
            Partners
          </a>
          <a href="#support" className="hover:text-crossGold transition-colors">
            Support Us
          </a>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-black border-t border-white/10">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#campaign" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              The Movement
            </a>
            <a href="#crisis" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              The Crisis
            </a>
            <a href="#vision" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Vision
            </a>
            <a href="#model" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Model
            </a>
            <a href="#programs" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Programs
            </a>
            <a href="#impact" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Impact
            </a>
            <a href="#technology" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Technology
            </a>
            <a href="#funding" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Partners
            </a>
            <a href="#support" className="py-2 hover:text-crossGold transition-colors" onClick={toggleMenu}>
              Support Us
            </a>
          </div>
        </div>}
    </header>;
}