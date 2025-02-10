import SOSButton from "@/components/SOSButton"
import LocationTracker from "@/components/LocationTracker"
import VoiceActivation from "@/components/VoiceActivation"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Women's Safety App</h1>
      <div className="w-full max-w-md">
        <SOSButton />
        <LocationTracker />
        <VoiceActivation />
        <Link href="/settings" className="mt-4 text-blue-500 hover:underline">
          Settings
        </Link>
      </div>
    </main>
  )
}

