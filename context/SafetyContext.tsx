"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface SafetyContextType {
  emergencyContacts: string[]
  sosMessage: string
  updateEmergencyContacts: (contacts: string[]) => void
  updateSOSMessage: (message: string) => void
}

const SafetyContext = createContext<SafetyContextType | undefined>(undefined)

export function SafetyProvider({ children }: { children: ReactNode }) {
  const [emergencyContacts, setEmergencyContacts] = useState<string[]>([])
  const [sosMessage, setSOSMessage] = useState("I need help! Please check on me.")

  const updateEmergencyContacts = (contacts: string[]) => {
    setEmergencyContacts(contacts)
  }

  const updateSOSMessage = (message: string) => {
    setSOSMessage(message)
  }

  return (
    <SafetyContext.Provider value={{ emergencyContacts, sosMessage, updateEmergencyContacts, updateSOSMessage }}>
      {children}
    </SafetyContext.Provider>
  )
}

export function useSafetyContext() {
  const context = useContext(SafetyContext)
  if (context === undefined) {
    throw new Error("useSafetyContext must be used within a SafetyProvider")
  }
  return context
}

