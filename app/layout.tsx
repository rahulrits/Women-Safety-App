import "./globals.css"
import { Inter } from "next/font/google"
import { SafetyProvider } from "@/context/SafetyContext"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Women's Safety App",
  description: "An application to enhance women's safety",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SafetyProvider>{children}</SafetyProvider>
      </body>
    </html>
  )
}

