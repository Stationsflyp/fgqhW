"use client"
import { UserProfile } from "./user-profile"
import { Shield } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">OxcyShop</span>
        </div>

        <UserProfile />
      </div>
    </nav>
  )
}
