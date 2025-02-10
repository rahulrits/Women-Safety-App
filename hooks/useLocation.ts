"use client"

import { useState, useEffect } from "react"

export function useLocation() {
  const [location, setLocation] = useState<GeolocationCoordinates | null>(null)
  const [locationString, setLocationString] = useState<string>("")

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setLocation(position.coords)
          updateLocationString(position.coords)
        },
        (error) => {
          console.error("Error getting location:", error)
        },
        { enableHighAccuracy: true },
      )

      return () => {
        navigator.geolocation.clearWatch(watchId)
      }
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }, [])

  const updateLocationString = (coords: GeolocationCoordinates) => {
    const { latitude, longitude } = coords
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`
    setLocationString(`Current location: ${googleMapsUrl}`)
  }

  return { location, locationString }
}

