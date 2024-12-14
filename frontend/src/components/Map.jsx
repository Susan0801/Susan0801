import React, { useState, useEffect } from 'react';

const Map = () => {
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const loadMap = () => {
      if (!window.google || !window.google.maps) {
        setMapError(true);
        return;
      }

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 15,
      });

      try {
        new window.google.maps.marker.AdvancedMarkerElement({
          position: { lat: 40.7128, lng: -74.0060 },
          map,
          title: 'New York City',
        });
      } catch (err) {
        setMapError(true);
        console.error('Error with AdvancedMarkerElement:', err);
      }
    };

    if (window.google) {
      loadMap();
    } else {
      if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDHjSYd1qPdRhvVCzPvpzTT92dHrhejyyM&callback=initMap&v=beta`;
        script.async = true;
        script.defer = true;
        script.onload = loadMap;
        script.onerror = () => {
          setMapError(true);
          console.error('Error loading Google Maps API');
        };
        document.body.appendChild(script);
        window.initMap = loadMap;
      }
    }
  }, []);

  if (mapError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600">
        <p>Sorry, the map could not be loaded.</p>
      </div>
    );
  }

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default Map;
