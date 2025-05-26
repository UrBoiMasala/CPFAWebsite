
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

interface OutreachLocation {
  lat: number;
  lng: number;
  name: string;
  country: string;
  description: string;
  size: number;
  color: string;
}

const InteractiveGlobe = () => {
  const globeEl = useRef<any>();
  const [selectedLocation, setSelectedLocation] = useState<OutreachLocation | null>(null);
  
  const outreachLocations: OutreachLocation[] = [
    // North America
    {
      lat: 37.7749,
      lng: -122.4194,
      name: "San Francisco Bay Area",
      country: "United States",
      description: "Multiple workshops on cybersecurity awareness for seniors and families",
      size: 0.8,
      color: "#60A5FA"
    },
    {
      lat: 40.7128,
      lng: -74.0060,
      name: "New York City",
      country: "United States", 
      description: "Community outreach programs for digital safety education",
      size: 0.6,
      color: "#3B82F6"
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      name: "Los Angeles",
      country: "United States",
      description: "Youth cybersecurity workshops and awareness campaigns",
      size: 0.5,
      color: "#1D4ED8"
    },
    {
      lat: 43.6532,
      lng: -79.3832,
      name: "Toronto",
      country: "Canada",
      description: "Cross-border cybersecurity education initiatives",
      size: 0.4,
      color: "#1E40AF"
    },
    // India
    {
      lat: 28.6139,
      lng: 77.2090,
      name: "New Delhi",
      country: "India",
      description: "International cybersecurity awareness partnerships",
      size: 0.7,
      color: "#A855F7"
    },
    {
      lat: 19.0760,
      lng: 72.8777,
      name: "Mumbai",
      country: "India",
      description: "Digital literacy and cybersecurity workshops",
      size: 0.6,
      color: "#9333EA"
    },
    {
      lat: 12.9716,
      lng: 77.5946,
      name: "Bangalore",
      country: "India",
      description: "Tech community cybersecurity education programs",
      size: 0.5,
      color: "#7C3AED"
    }
  ];

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const handleLocationClick = (location: OutreachLocation) => {
    setSelectedLocation(location);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: location.lat, lng: location.lng, altitude: 2.5 }, 1000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative w-full h-[600px] bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden"
    >
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Our Global Outreach</h3>
        <p className="text-blue-100 text-sm">Click on a location to learn more about our initiatives</p>
      </div>

      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        
        pointsData={outreachLocations}
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.8}
        pointResolution={20}
        
        pointLabel={(d: any) => `
          <div style="
            background: rgba(0,0,0,0.8); 
            color: white; 
            padding: 8px 12px; 
            border-radius: 8px; 
            font-family: sans-serif;
            max-width: 200px;
          ">
            <strong>${d.name}</strong><br/>
            <em>${d.country}</em><br/>
            <small>${d.description}</small>
          </div>
        `}
        
        onPointClick={handleLocationClick}
        
        atmosphereColor="#60A5FA"
        atmosphereAltitude={0.25}
        
        width={undefined}
        height={600}
      />

      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-xs z-10"
        >
          <button
            onClick={() => setSelectedLocation(null)}
            className="absolute top-2 right-2 text-white hover:text-blue-200 text-xl"
          >
            ×
          </button>
          <h4 className="text-white font-bold text-lg mb-1">{selectedLocation.name}</h4>
          <p className="text-blue-200 text-sm mb-2">{selectedLocation.country}</p>
          <p className="text-blue-100 text-sm">{selectedLocation.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InteractiveGlobe;
