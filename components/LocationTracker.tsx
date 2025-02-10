"use client"

import { useLocation } from "@/hooks/useLocation"

export default function LocationTracker() {
  const { location, locationString } = useLocation()

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Current Location</h2>
      {location ? (
        <>
          <p>
            Latitude: {location.latitude.toFixed(6)}, Longitude: {location.longitude.toFixed(6)}
          </p>
          <a
            href={locationString.split(": ")[1]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View on Google Maps
          </a>
        </>
      ) : (
        <p>Acquiring location...</p>
      )}
    </div>
  )
}

