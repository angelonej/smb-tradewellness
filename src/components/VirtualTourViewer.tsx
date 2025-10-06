import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Info, Maximize, MinusCircle, PlusCircle } from 'lucide-react';
type TourHotspot = {
  id: number;
  x: number;
  y: number;
  title: string;
  description: string;
};
type TourScene = {
  id: number;
  title: string;
  description: string;
  image: string;
  hotspots: TourHotspot[];
  connections: {
    id: number;
    direction: 'left' | 'right' | 'forward' | 'backward';
    targetSceneId: number;
  }[];
};
export function VirtualTourViewer() {
  const [activeSceneId, setActiveSceneId] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<TourHotspot | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const tourScenes: TourScene[] = [{
    id: 1,
    title: 'Living Room (After Renovation)',
    description: 'Completely renovated living space with new flooring, paint, and fixtures.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    hotspots: [{
      id: 101,
      x: 25,
      y: 45,
      title: 'New Flooring',
      description: 'Durable vinyl plank flooring installed by youth participants under mentor guidance.'
    }, {
      id: 102,
      x: 75,
      y: 35,
      title: 'LED Lighting',
      description: 'Energy-efficient lighting installed as part of electrical training program.'
    }],
    connections: [{
      id: 201,
      direction: 'right',
      targetSceneId: 2
    }, {
      id: 202,
      direction: 'forward',
      targetSceneId: 3
    }]
  }, {
    id: 2,
    title: 'Kitchen (After Renovation)',
    description: 'Modernized kitchen with new appliances, countertops, and cabinetry.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    hotspots: [{
      id: 103,
      x: 35,
      y: 55,
      title: 'New Cabinets',
      description: 'Custom cabinetry built by youth in carpentry training program.'
    }, {
      id: 104,
      x: 65,
      y: 40,
      title: 'Plumbing Upgrades',
      description: 'Complete replacement of outdated plumbing with modern fixtures.'
    }],
    connections: [{
      id: 203,
      direction: 'left',
      targetSceneId: 1
    }, {
      id: 204,
      direction: 'right',
      targetSceneId: 4
    }]
  }, {
    id: 3,
    title: 'Bedroom (After Renovation)',
    description: 'Transformed bedroom with new windows, insulation, and electrical work.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    hotspots: [{
      id: 105,
      x: 40,
      y: 30,
      title: 'New Windows',
      description: 'Energy-efficient windows installed to improve comfort and reduce utility costs.'
    }, {
      id: 106,
      x: 70,
      y: 60,
      title: 'Wall Repairs',
      description: 'Drywall installation and finishing techniques taught to youth participants.'
    }],
    connections: [{
      id: 205,
      direction: 'backward',
      targetSceneId: 1
    }]
  }, {
    id: 4,
    title: 'Bathroom (After Renovation)',
    description: 'Completely remodeled bathroom with new fixtures and tile work.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    hotspots: [{
      id: 107,
      x: 30,
      y: 50,
      title: 'Tiling Work',
      description: 'Professional tiling skills taught to youth as part of the rehabilitation project.'
    }, {
      id: 108,
      x: 60,
      y: 40,
      title: 'Vanity Installation',
      description: 'Custom vanity built and installed by program participants.'
    }],
    connections: [{
      id: 206,
      direction: 'left',
      targetSceneId: 2
    }]
  }];
  const activeScene = tourScenes.find(scene => scene.id === activeSceneId) || tourScenes[0];
  const navigateToScene = (targetSceneId: number) => {
    setActiveHotspot(null);
    setActiveSceneId(targetSceneId);
  };
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  const increaseZoom = () => {
    if (zoomLevel < 1.5) {
      setZoomLevel(prev => prev + 0.1);
    }
  };
  const decreaseZoom = () => {
    if (zoomLevel > 0.8) {
      setZoomLevel(prev => prev - 0.1);
    }
  };
  return <section id="virtual-tour" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Virtual Tour</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Experience the transformation of a trailer outpost through this
          interactive virtual tour
        </p>
        <div className={`max-w-6xl mx-auto ${isFullscreen ? 'fixed inset-0 z-50 max-w-none p-4 bg-black' : ''}`}>
          <div className="bg-charcoal/70 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Tour header */}
            <div className="bg-black/60 p-4 flex justify-between items-center border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {activeScene.title}
                </h3>
                <p className="text-sm text-white/70">
                  {activeScene.description}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={decreaseZoom} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" aria-label="Zoom out">
                  <MinusCircle size={20} />
                </button>
                <button onClick={increaseZoom} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" aria-label="Zoom in">
                  <PlusCircle size={20} />
                </button>
                <button onClick={toggleFullscreen} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors" aria-label="Toggle fullscreen">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
            {/* Tour viewer */}
            <div className="relative h-[500px] overflow-hidden bg-black/50">
              <div className="w-full h-full transition-transform duration-300 ease-out" style={{
              transform: `scale(${zoomLevel})`,
              backgroundImage: `url(${activeScene.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
                {/* Hotspots */}
                {activeScene.hotspots.map(hotspot => <button key={hotspot.id} className="absolute w-8 h-8 bg-crossGold rounded-full flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform" style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`
              }} onClick={() => setActiveHotspot(hotspot)} aria-label={`Hotspot: ${hotspot.title}`}>
                    <Info size={16} className="text-black" />
                  </button>)}
                {/* Navigation arrows */}
                {activeScene.connections.map(connection => {
                let position = {};
                switch (connection.direction) {
                  case 'left':
                    position = {
                      left: '5%',
                      top: '50%'
                    };
                    break;
                  case 'right':
                    position = {
                      right: '5%',
                      top: '50%'
                    };
                    break;
                  case 'forward':
                    position = {
                      bottom: '5%',
                      left: '50%'
                    };
                    break;
                  case 'backward':
                    position = {
                      top: '5%',
                      left: '50%'
                    };
                    break;
                }
                return <button key={connection.id} className="absolute bg-black/60 p-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:bg-black/80 transition-colors" style={position as React.CSSProperties} onClick={() => navigateToScene(connection.targetSceneId)} aria-label={`Go ${connection.direction}`}>
                      {connection.direction === 'left' && <ArrowLeft size={24} className="text-white" />}
                      {connection.direction === 'right' && <ArrowRight size={24} className="text-white" />}
                      {connection.direction === 'forward' && <ArrowRight size={24} className="text-white rotate-90" />}
                      {connection.direction === 'backward' && <ArrowRight size={24} className="text-white -rotate-90" />}
                    </button>;
              })}
              </div>
              {/* Hotspot info panel */}
              {activeHotspot && <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-black/80 p-4 rounded-lg border border-white/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-crossGold">
                        {activeHotspot.title}
                      </h4>
                      <p className="text-white/90 text-sm">
                        {activeHotspot.description}
                      </p>
                    </div>
                    <button onClick={() => setActiveHotspot(null)} className="text-white/70 hover:text-white" aria-label="Close info">
                      ×
                    </button>
                  </div>
                </div>}
            </div>
            {/* Scene selector */}
            <div className="bg-black/60 p-4 border-t border-white/10">
              <div className="flex justify-center space-x-2">
                {tourScenes.map(scene => <button key={scene.id} onClick={() => navigateToScene(scene.id)} className={`px-4 py-2 rounded text-sm font-medium transition-colors ${scene.id === activeSceneId ? 'bg-crossGold text-black' : 'bg-black/50 text-white hover:bg-black/70'}`}>
                    {scene.title.split('(')[0].trim()}
                  </button>)}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            This virtual tour showcases a completed trailer renovation project.
            Each space was transformed by youth participants working alongside
            skilled mentors, learning valuable trade skills while creating a
            functional living space.
          </p>
          <div className="mt-8">
            <a href="#transformations" className="text-crossGold hover:text-crossGold/80 transition-colors">
              View more before and after transformations →
            </a>
          </div>
        </div>
      </div>
    </section>;
}