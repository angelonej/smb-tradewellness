import React, { useState } from 'react';
import { MapPin, Info } from 'lucide-react';
type Location = {
  id: number;
  name: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  type: 'outpost' | 'project' | 'partner';
  stats?: {
    youth: number;
    mentors: number;
    projects: number;
  };
};
export function ImpactMap() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const locations: Location[] = [{
    id: 1,
    name: 'Jacksonville Outpost',
    city: 'Jacksonville',
    state: 'FL',
    lat: 33.4,
    lng: -112.1,
    type: 'outpost',
    stats: {
      youth: 24,
      mentors: 8,
      projects: 12
    }
  }, {
    id: 2,
    name: 'Westside Community',
    city: 'Jacksonville',
    state: 'FL',
    lat: 33.7,
    lng: -84.4,
    type: 'outpost',
    stats: {
      youth: 18,
      mentors: 6,
      projects: 9
    }
  }, {
    id: 3,
    name: 'Highland Center',
    city: 'Jessup',
    state: 'GA',
    lat: 32.8,
    lng: -96.8,
    type: 'outpost',
    stats: {
      youth: 32,
      mentors: 12,
      projects: 15
    }
  }, {
    id: 4,
    name: 'Riverside Project',
    city: 'Jacksonville',
    state: 'FL',
    lat: 36.2,
    lng: -86.8,
    type: 'project'
  }, {
    id: 5,
    name: 'Grace FBO Partnership',
    city: 'Jacksonville',
    state: 'FL',
    lat: 39.1,
    lng: -94.6,
    type: 'partner'
  }, {
    id: 6,
    name: 'Meadowbrook Outpost',
    city: 'Jacksonville',
    state: 'FL',
    lat: 42.3,
    lng: -83.0,
    type: 'outpost',
    stats: {
      youth: 15,
      mentors: 5,
      projects: 7
    }
  }];
  const getLocationColor = (type: string) => {
    switch (type) {
      case 'outpost':
        return 'bg-crossGold';
      case 'project':
        return 'bg-steelBlue';
      case 'partner':
        return 'bg-forestGreen';
      default:
        return 'bg-gray-500';
    }
  };
  const getLocationSize = (location: Location) => {
    if (location.type === 'outpost' && location.stats) {
      return location.stats.youth > 20 ? 'w-6 h-6' : 'w-4 h-4';
    }
    return 'w-3 h-3';
  };
  return <section id="impact-map" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Our National Impact
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          See where Send Me Builders is making a difference across America
        </p>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-charcoal/70 p-8 rounded-lg border border-white/10 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-4 h-4 rounded-full bg-crossGold mr-2`}></div>
              <span className="font-bold">Active Outposts</span>
            </div>
            <p className="text-gray-300 mb-4">
              Our established community outposts where youth leaders live and
              mentor local youth through trades training.
            </p>
            <div className="text-4xl font-bold text-crossGold">12</div>
          </div>
          <div className="bg-charcoal/70 p-8 rounded-lg border border-white/10 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-4 h-4 rounded-full bg-steelBlue mr-2`}></div>
              <span className="font-bold">Current Projects</span>
            </div>
            <p className="text-gray-300 mb-4">
              Rehabilitation projects currently in progress, providing hands-on
              training for youth participants.
            </p>
            <div className="text-4xl font-bold text-steelBlue">8</div>
          </div>
          <div className="bg-charcoal/70 p-8 rounded-lg border border-white/10 shadow-xl">
            <div className="flex items-center mb-6">
              <div className={`w-4 h-4 rounded-full bg-forestGreen mr-2`}></div>
              <span className="font-bold">FBO Partners</span>
            </div>
            <p className="text-gray-300 mb-4">
              Faith-based organizations actively partnering with Send Me
              Builders to establish new outposts and support existing ones.
            </p>
            <div className="text-4xl font-bold text-forestGreen">6</div>
          </div>
        </div>
        <div className="bg-charcoal/70 p-8 rounded-xl border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Impact Map</h3>
            <div className="flex items-center">
              <Info size={18} className="text-white/70 mr-2" />
              <span className="text-white/70 text-sm">
                Click on a location to see details
              </span>
            </div>
          </div>
          {/* Map container with US outline */}
          <div className="relative h-[500px] bg-black/50 rounded-lg border border-white/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Simplified US map outline */}
              <svg viewBox="0 0 959 593" className="w-full h-full opacity-30">
                <path d="M848,339l3.9,2.5l2.7,0.8l0.4,1.4l-4.8,5.1l0.3,2.3l-1.9,1.1l-0.4,1.7l-2.8,2.1l-1,2l-2.6,0.3l-1.7,1.5h-4.9l-3.1,2.5 l-4.9,1.9l-0.9,1.2l-3.9,1.4l-1.3,1.3l-2.3-0.3l-0.8-1.6l-1.1-0.5l-2.7,1.8l-3.1-0.4l-0.8,1.9l-1.9,0.3l-2.2-1.1l-1.3,0.3 l-1.1-0.3l-0.2-1.2l-1.3-0.9l-0.1-2l-2.2-1.1l-2.3,0.8l-1.1-0.8l0.5-1.7l-1.5-0.9l-3.9,0.3l-2.5-1.6l-1.9-0.2l-2.4,0.8l-5.3-1.3 l-0.8-0.9l-1.6,0.5l-1.1-0.1l-1.8-1.5l-2.5,1.6l-3-0.1l-1.2-0.7l-0.4-1.5l-1.4-1.1l-3.9-0.3l-2.1,0.6l-2.3-1.1l-2.5,1.3l-0.8,1.3 l-4.7,1.4l-1.2,1.8l-1.3,0.8l-4.8-0.5l-3.5-1.4l-1.2-1.8l-0.1-1.4l-0.9-0.9l-1.3,0.7l-0.9-0.3l-0.1-0.6l-2.7-1.1l-1.6-1.7l-3.3-1.1 l-1.8-1.9h-1.9l-2.1-1.9l-3-1.2l-2.1,0.8l-0.3-0.9l-1.6-1.7l-2.9-0.1l-1.2-1.2l-2.2-0.2l-3,1.8l-1.8-0.8l-1.2,0.4l-2.2-0.3 l-0.8,1.1l-1.4,0.1l-2.2-1.1l-2.7,0.6l-1.7-1.1l-1.4,1.2l-0.3,1.3l-1.5,0.3l-0.9,0.9l-1.4-0.8l-2.7-0.2l-1.9,0.7l-2.1-0.7 l-2.9,1.7l-1.8,2.2l-0.6,1.8l-2.3,0.1l-1.2,1.1l-0.5,1.7l-2.3,2.1l-0.9,4.2l-1.4,1.4l-0.3,2l-2.5,1.3l-3,3.7l-2.2,0.9l-0.4,0.9 l-1.8,0.9l-0.9,1.5l-2,1.1l-0.7,1.6l-1.7,1.4l-2.1-0.1l-2,0.8l-2.5-1.4l-1.2,0.2l-1.3,0.9l-2.8-1.3l-2.8,0.4l-0.4-1l-1-0.2 l-1.8,1.1l-2.3,0.1l-0.5,0.7l-2.3,0.5l-1.2-0.8l-1,0.2l-0.7,1.1h-1.7l-0.8,1.2l-1.7,0.2l-1.9-0.9l-1.2,0.8l-1.2-0.2l-0.7-1.2 l-1.7-0.9l-0.6,0.7l-2-0.4l-2.5,1.6l-0.7-0.7l-0.1-1.3l-1.2-0.7l-1.2,0.9l-1.5-0.2l-0.9-0.9l-2,0.2l-0.9-1.2l-0.9,0.4l-2.1-0.5 l-2.1,0.8l-1.7-0.9l-1.4,1.2l-0.9-0.4l-1.6,0.3l-3.9-1.2l-1.2-0.9l-1.4,0.3l-1.3-0.8l-0.9,0.3l-1.8-1.2l-1.9,0.5l-0.7,1.3l-1.5-0.4 l-2.2-1.6l-1.8-0.4l-2,0.5l-0.8-0.6l-2.9-0.2l-0.8-0.7l-2.1,0.9l-1-0.4l-1.7,0.5l-0.5,0.9l-1.9,0.1l-2.5,1.2l-1.9-0.2l-1.4-1 l-1.3,0.2l-2.9-0.7l-1.4,0.1l-1.4-0.4l-2.2,1.1l-1.3-0.3l-2.1,0.8l-3.2-1.4l-1-1.2l-2.2,0.1l-1.3-1.7l-1.5,0.7l-0.7-0.7l-2.2-0.5 l-0.9-1.1l-1.2-0.4l-2.5,0.3l-2.2-0.7l-1.9,0.9l-1.4-2.3l-2.2-1.3l-3.5-0.3l-1-1.1l-3.1,0.9l-1.9-0.3l-2.2-1.2l-1.8,0.9l-3.4-2.4 l-3.4-0.3l-1.7,0.4l-1.4-0.8l-2.9,1.3l-2.8-1.5l-1.3,0.8l-1.5-0.4l-0.4-0.7l-2.5-0.2l-2.1-1.3l-1.8,0.8l-2.2-0.4l-1.6-1.5l-2.5-0.6 l-2.5-0.9l-2.7-0.1l-2,0.6l-1.9-1l-0.9,1.3l-1.2,0.2l-1.7-0.8l-1.8,0.5l-1.3-0.3l-1.5,0.6l-3.7-0.3l-2.2,0.5l-3.7-1.8l-2.7,0.8 l-2.2-0.5l-3.5,0.4l-2.2,0.8l-1.4,1.3l-0.3,1.4l-1.5,0.2l-1.9-1.5l-1.8-0.1l-1.9-1l-3.1,0.9l-1.2-0.3l-0.3-1.7l-1.1-0.5l-1.4,0.2 l-0.4,0.9l-1.8,0.2l-2.4,1.1l-1.1-0.3l-2.7,2.2l-3.1,1.5l-0.7-0.8l-4.2,0.8l-2.1,1.5l-2.3-0.1l-2.2,0.4l-1.7,1.3l-1.9,0.9l-0.6,2.5 l-2.5,1.3l-1.1,1.2l-1.3-1l-2.5,0.6l-0.3,1.4l-1.2,0.6l-0.6,2.5l-2.6,2.6l-0.8-0.4l-1.3,0.5l-0.5,1.1l-2.5-0.9l-1.2-1.5l-0.6-2.1 l-2.4,0.4l-0.8,1.1l-1.6,0.6l-0.1,1.8l-1.2,0.7l-1.2-0.5l-2.2,1.4l-0.7-0.9l-1.7,0.1l-0.7,0.5l-0.2,1.3l-1.6-0.1l-1,0.7l-1.2-0.5 l-1.8,1.1l-0.7-0.4l-0.2-1.8l-1.8-0.5l-1,0.9l-1.1-1l-1.9,0.1l-2.5,1.8l-1.4-1.3l-1.5,0.2l-2-1.3l-1.2,0.2l-1.4-0.3l-2.5-2.2 l-2.9-0.5l-1.7,0.3l-1.3-1.5l-1.8,0.3l-1-0.6l-3.1,0.7l-2.1-1.3l-2.4,0.2l-1.1,0.6l-1.7-0.4l-1.6,0.4l-2.4-0.7l-1.1,1.3l-1-0.9 l-1.9,0.3l-2.3-0.1l-1,0.8l-1.7-0.1l-1.6-0.9l-1.2,0.8l-1.5-1.6l-1.2-0.1l-1.9,0.9l-1-0.3l-0.9-1.2l-1.5-0.5l-1.1,0.4l-0.6-0.9 l-3.5-0.3l-1.8-1.2l-1.1,0.4l-2.4-0.7l-1.1-1.2l-2.8-0.9l-0.8-1.3l-1.6-0.3l-0.9-1.9l-1.8-0.9l-1.3,0.3l-0.9-0.9l-1.8,0.2l-1.1-1.1 l-2.8-0.1l-2.4-1l-2.5,1.1l-1.3-0.3l-0.6-1.1l-2.2-0.8l-0.9-1.3l-2.1-0.3l-3.2,0.6l-1.6-0.2l-1.3-1.1l-2.6-0.1l-2-0.7l-1.6,1 l-3.7,0.2l-1.9,0.7l-3.7-0.7l-3.2,0.2l-2.4,1.4l-1.1,1.5l-1,0.2l-1.8-1.4l-1.9-0.2l-1.2,0.4l-1.6-0.7l-2.7,0.8l-1.2-0.8l-1.8,0.7 l-1.6-0.6l-1.1,0.5l-2.3-1l-2.2,0.4l-0.9-0.8l-1.5-0.2l-2.7,1.8l-0.9-0.4l-1.5,0.1l-2.4-1.3l-2.2-2l-2.3-0.2l-2.4-1.2l-3.2-0.2 l-2.8-1.1l-3-0.1l-1.5-0.9l-0.8-2.1l-1.9-1.2l-2.5-0.1l-2.2-1.6l-2.5-0.3l-2.9-1.4l-2.2,0.1l-2.3-1.3l-1.2,0.7l-1.4-0.3l-2.5-2 l-2.9-0.1l-2.4-1.5l-2.4-0.3l-1.1-0.9l-3.7-0.3l-1.4-0.6l-2.2,1l-2.1-0.3l-2.2-2.1l-2.4-0.5l-2.5-0.1l-2.2-1l-1.2,0.3l-1.9-0.9 l-1.8,0.1l-2.9-0.4l-2.2,0.4l-1.5-0.8l-1.1,0.3l-1.5-0.9l-1.2,0.3l-1.3-0.7l-2.9,0.1l-1.8-0.6l-1.7,0.5l-0.3,1.2l-2.8,0.1l-1.3-0.7 l-0.7-1.1l-1.2-0.4l-2.4,0.4l-2.2-1.1l-1.3,0.1l-1.3-0.9l-1,0.2l-1.9-1.5l-2.2-0.2l-1.4-0.7l-1.2,0.2l-1.4-1.1l-2.4,0.4l-1.1-0.6 l-2.3-0.1l-1.7-0.7l-1.6,0.3l-1.3-0.6l-1.9,0.2l-1.1-0.9l-1.8,0.1l-1.9-0.8l-1.2,0.4l-2.6-0.1l-1.3,0.6l-1.3-0.2l-2,0.6l-1.2-0.7 l-1.9-0.1l-0.7-0.7l-2-0.2l-0.9-0.7l-1.9,0.3l-1.2-1.1l-1.3-0.1l-1.7,0.7l-1.3-0.8l-2.2,0.6l-0.8-0.7l-1.4,0.2l-0.9-1.3l-1.5-0.3 l-0.8-0.7l-1.7,0.4l-1.1-0.7l-1.9,0.9l-0.9-0.4l-0.4-1.3l-3.3,0.2l-1.1-0.6l-1.2,0.2l-0.5,0.7l-2.2-0.7l-1.5,0.3l-0.6-1.9l-1.4-0.3 l-0.5-1.1l-1.7-0.3l-0.4-1.4l-1.3-0.3l-0.2-1.2l-1.1-0.6l-1.3,0.5l-1.1-0.8l-1.2,0.4l-0.9-0.8l-1.9,0.2l-0.4-1.1l-1.5-0.4l-0.7-2.2 l-1.3-0.8l-0.3-1l-1.8-1.1l-0.7-1.6l-1.5,0.2l-2-1.4l-0.5-1.5l-1.4-0.5l-0.6-1.5l-2.1-0.9l-1.2-1.3l-1.2-0.2l-0.7-1.1l-1.6-0.9 l-0.3-1.8l-1.1-1.4l-1.1-0.1l-0.8-1.9l-1.2-0.6l-0.6-1.7l-1.9-1.1l0.1-1.3l-1.3-0.5l-0.3-1.3l-0.8-0.6l-0.7-2.1l-1.2-0.6l-0.3-2.1 l-0.8-0.5l-0.6-2.1l-1.8-0.1l-0.9-1.8l-0.9-0.3l-0.1-1.2l-1.3-0.4l-0.4-1.4l-1.5-0.3l-0.2-1.2l-0.9-0.5l-0.5-1.9l-1.2-0.6l-0.6-2.9 l-1.1-1l-1.2-3.1l-0.2-2.2l-1-1.1l0.1-2l-0.5-1.3l-1.9-1.6l-0.3-1.1l-1.2-0.7l-0.6-1.5l-1.4-0.5l-0.6-1.1l-2.3-0.3l-0.7-1.1 l-2.4-0.5l-0.7-0.8l-1.4,0.3l-0.7-2.3l-1.9-1.6l-1.5-0.3l-0.6-1l-2.7-1.1l-1.4-2.2l-1.8-0.7l-0.4-1.2l-1.5-0.5l-0.3-1.1l-1.7-0.7 l-0.7-1.5l-1.1-0.2l-0.9-1.9l-2.4-1l-1.3-1.5l-1.3-0.3l-1-1.2l-1.2-0.2l-0.5-0.8l-2.3-0.3l-1.1-1.2l-0.7,0.6l-1.2-1.3l-0.1-1.9 l-1-1l-0.1-2.1l-0.6-0.9l0.3-1.6l-0.7-0.8l0.5-1.4l-0.3-1.4l-1.1-1.2l-1.4-0.5l-0.3-1.8l-2-1.9l-0.8-2.1l-1.2-1.3l0.4-0.7l-0.5-2.4 l0.7-0.8l-0.3-1.7l1.1-0.9l0.2-1l0.8-0.5l-0.1-1.5l0.9-1l0.9-3l1.2-0.6l0.4-1.2l1.7-1.4l0.6-1.5l1.9-0.9l0.5-1.8l1.1-1.2l0.2-1.3 l1.8-0.5l1.5-1.2l2.2-0.3l1.8-1.2l1.7-0.1l1.7-0.9l2.2-0.3l2.5-1.6l1.9-0.3l2.1-1.1l2.4,0.1l1.9-0.9l1.5,0.1l1.4-0.3l2.7,0.5l2-0.9 l1.9,0.3l3,0.9l2,0.1l1.4,0.7l2.1,0.3l1.5,0.7l1.3-0.3l1.3,0.9l2.2,0.1l0.9,0.8l1.7,0.1l1.1,0.9l1.2-0.1l1.3,0.9l1.5-0.3l1.7,0.7 l1.5-0.5l1.8,0.3l1.3-0.4l1.5,0.7l2.4-0.3l1.4,0.5l1.3-0.5l1.9,0.3l1.2-0.5l1.9,0.1l1.2-0.5l1.3,0.5l2.4-0.3l1.6,0.3l1.3-0.3l1.2,0.8 l1.6,0.1l1.3,0.7l2.1-0.3l1.3,0.7l1.5-0.1l1.2,0.6l1.5-0.3l1.3,0.5l1.5-0.1l1.2,0.6l1.7-0.3l1.9,1.3l1.9-0.1l1.8,0.7l0.7,1.1l1.8,0.8 l0.7,1.3l2.1,0.8l0.7,1.5l1.8,0.5l0.5,0.9l1.8,0.5l0.9,1.2l1.3,0.3l0.7,1.3l1.7,0.6l1.2,1.5l2.3,0.6l0.5,0.9l2.2,0.1l0.9,0.9l1.8,0.1 l0.7,0.8l2.1,0.1l0.9,0.9l2.4,0.3l0.5,1.6l1.7,0.3l0.4,0.9l2.1,0.2l0.4,1l2.2,0.4l0.8,1.3l1.7,0.2l0.4,1.1l1.7,0.5l0.8,1.1l1.6,0.3 l0.7,1.3l1.1,0.2l0.5,0.8l1.1,0.2l0.7,1.1l1.2,0.3l0.7,1.2l1.4,0.3l0.4,1.2l1.4,0.3l0.6,1.1l1.1,0.2l0.5,1.6l1.5,0.2l0.6,1.1l1.5,0.7 l0.3,1.1l1.4,0.3l0.4,1.4l1.5,0.7l0.3,1.5l1.3,0.3l0.5,1.9l1.4,0.5l0.6,1.5l1.4,0.3l0.3,1.1l1.5,0.7l0.5,1.2l1.2,0.3l0.2,1.1l1.1,0.3 l0.5,1.8l1.6,0.5l0.5,2.1l1.3,0.3l0.3,1.5l1.2,0.5l0.2,1.4l1.1,0.3l0.5,1.9l1.3,0.6l0.3,1.4l1.2,0.3l0.3,1.2l1.2,0.3l0.5,1.6l1.3,0.5 l0.3,1.3l1.2,0.5l0.3,1.1l1.3,0.5l0.3,1.5l1.2,0.3l0.3,1.2l1.3,0.3l0.3,1.4l1.3,0.3l0.3,1.3l1.1,0.5l0.3,1.3l1.3,0.5l0.3,1.4l1.2,0.5 l0.3,1.5l1.3,0.3l0.3,1.2l1.1,0.5l0.3,1.3l1.3,0.5l0.5,1.5l1.1,0.4l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.2,1.3l1.3,0.3l0.3,1.4l1.3,0.3 l0.3,1.5l1.2,0.3l0.3,1.1l1.3,0.5l0.3,1.3l1.1,0.5l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.3l0.3,1.3l1.3,0.5l0.5,1.5l1.1,0.5l0.3,1.3l1.2,0.3 l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.3l1.3,0.3l0.3,1.5l1.1,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3 l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.3,1.5l1.3,0.3l0.3,1.3l1.2,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.5 l0.3,1.3l1.3,0.3l0.3,1.3l1.2,0.5l0.3,1.3l1.3,0.3l0.3,1.5l1.1,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.2,0.5 l0.3,1.3l1.3,0.3l0.3,1.3l1.1,0.5l0.3,1.3l1.3,0.3l0.3,1.5l1.2,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5 l0.3,1.5l1.3,0.3l0.3,1.3l1.1,0.3l0.3,1.3l1.3,0.5l0.3,1.3l1.2,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5l0.3,1.5l1.3,0.3l0.3,1.3l1.1,0.3 l0.3,1.3l1.3,0.5l0.3,1.3l1.2,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3 l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5l0.3,1.3l1.3,0.5l0.3,1.3l1.2,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5 l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5 l0.3,1.3l1.3,0.5l0.3,1.3l1.2,0.3l0.3,1.5l1.3,0.3l0.3,1.1l1.1,0.5l0.3,1.5l1.3,0.3l0.3,1.1l1.2,0.5l0.3,1.3l1.3,0.5l0.3,1.3l1.1,0.3 L848,339z" fill="currentColor" />
              </svg>
              {/* Location pins */}
              {locations.map(location => <div key={location.id} className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2" style={{
              left: `${(location.lng + 125) * 1.5}px`,
              top: `${(location.lat - 25) * 8}px`
            }} onClick={() => setActiveLocation(location)}>
                  <div className={`${getLocationColor(location.type)} ${getLocationSize(location)} rounded-full relative pulse-animation`}>
                    <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></div>
                  </div>
                </div>)}
            </div>
          </div>
          {/* Location details panel */}
          {activeLocation && <div className="bg-black/70 p-6 rounded-lg mt-6 border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {activeLocation.name}
                  </h4>
                  <p className="text-white/70">
                    {activeLocation.city}, {activeLocation.state}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${getLocationColor(activeLocation.type)} mr-2`}></div>
                  <span className="capitalize text-sm font-medium">
                    {activeLocation.type}
                  </span>
                </div>
              </div>
              {activeLocation.stats && <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="bg-charcoal/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">
                      {activeLocation.stats.youth}
                    </div>
                    <p className="text-white/70 text-sm">Youth</p>
                  </div>
                  <div className="bg-charcoal/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">
                      {activeLocation.stats.mentors}
                    </div>
                    <p className="text-white/70 text-sm">Mentors</p>
                  </div>
                  <div className="bg-charcoal/50 p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold text-white">
                      {activeLocation.stats.projects}
                    </div>
                    <p className="text-white/70 text-sm">Projects</p>
                  </div>
                </div>}
              <div className="flex justify-end mt-4">
                <button className="text-crossGold hover:underline text-sm flex items-center" onClick={() => setActiveLocation(null)}>
                  Close Details
                  <span className="ml-2">×</span>
                </button>
              </div>
            </div>}
        </div>
      </div>
    </section>;
}