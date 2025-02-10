"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

// Define a type for the SpeechRecognition object
type SpeechRecognitionType = typeof window.SpeechRecognition | typeof window.webkitSpeechRecognition

export default function VoiceActivation() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if SpeechRecognition is supported
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      setIsSupported(true)
    }
  }, [])

  useEffect(() => {
    let recognition: SpeechRecognitionType | null = null

    if (isListening && isSupported) {
      // Use the appropriate SpeechRecognition object
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognition = new SpeechRecognition()
      recognition.continuous = true
      recognition.interimResults = true

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("")

        if (transcript.toLowerCase().includes("sos") || transcript.toLowerCase().includes("help")) {
          alert("SOS voice command detected! Sending alert...")
          setIsListening(false)
        }
      }

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error)
        setIsListening(false)
      }

      recognition.start()
    }

    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [isListening, isSupported])

  if (!isSupported) {
    return <p className="mt-4 text-center text-red-500">Voice activation is not supported in this browser.</p>
  }

  return (
    <Button
      onClick={() => setIsListening(!isListening)}
      className="mt-4 w-full"
      variant={isListening ? "destructive" : "default"}
    >
      {isListening ? (
        <>
          <MicOff className="mr-2" />
          Stop Voice Activation
        </>
      ) : (
        <>
          <Mic className="mr-2" />
          Start Voice Activation
        </>
      )}
    </Button>
  )
}

