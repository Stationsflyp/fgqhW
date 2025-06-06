import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OxcyShop - Futuristic Tools Platform",
  description: "A futuristic dark platform with useful tools exclusively for verified Discord members.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">{children}</div>
        </AuthProvider>
      </body>
    </html>
  )
}
