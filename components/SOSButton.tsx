"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLocation } from "@/hooks/useLocation"
import { useSafetyContext } from "@/context/SafetyContext"

export default function SOSButton() {
  const [isActivated, setIsActivated] = useState(false)
  const { locationString } = useLocation()
  const { emergencyContacts, sosMessage } = useSafetyContext()

  const handleSOS = async () => {
    setIsActivated(true)

    // Combine the SOS message with the location
    const fullMessage = `${sosMessage}\n\n${locationString}`

    // In a real application, you would send the alert to your backend
    // which would then use a service like Twilio to send SMS and emails
    console.log("Sending SOS alert...")
    console.log("Message:", fullMessage)
    console.log("Contacts:", emergencyContacts)

    // Simulate sending notifications
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert(`SOS alert sent to your emergency contacts with your current location!`)
    setIsActivated(false)
  }

  return (
    <Button
      onClick={handleSOS}
      disabled={isActivated}
      className="w-full h-24 text-2xl font-bold bg-red-600 hover:bg-red-700 text-white"
    >
      {isActivated ? "Sending SOS..." : "SOS"}
    </Button>
  )
}

