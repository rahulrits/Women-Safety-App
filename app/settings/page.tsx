"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useSafetyContext } from "@/context/SafetyContext"
import Link from "next/link"

export default function Settings() {
  const { emergencyContacts, sosMessage, updateEmergencyContacts, updateSOSMessage } = useSafetyContext()
  const [contacts, setContacts] = useState(emergencyContacts.join("\n"))
  const [message, setMessage] = useState(sosMessage)

  const handleSave = () => {
    updateEmergencyContacts(contacts.split("\n").filter((contact) => contact.trim() !== ""))
    updateSOSMessage(message)
    alert("Settings saved successfully!")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div>
          <label htmlFor="contacts" className="block text-sm font-medium text-gray-700 mb-1">
            Emergency Contacts (one per line)
          </label>
          <Textarea id="contacts" value={contacts} onChange={(e) => setContacts(e.target.value)} rows={5} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            SOS Message
          </label>
          <Input id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <Button onClick={handleSave} className="w-full">
          Save Settings
        </Button>
        <Link href="/" className="block text-center text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

