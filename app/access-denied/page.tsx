"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, AlertTriangle, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-orange-900/20" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <Card className="glass-card border-red-500/30">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            <CardTitle className="text-3xl font-bold text-red-400 mb-2">Access Denied</CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              You need to be a member of our Discord server to access OxcyShop
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Exclusive Access Required</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    OxcyShop is an exclusive platform for verified Discord server members only. To gain access, you
                    must:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Join our Discord server
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Complete server verification
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      Be an active community member
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white py-3">
                <Link href="https://discord.gg/YOUR_INVITE_LINK" target="_blank" rel="noopener noreferrer">
                  <Users className="w-4 h-4 mr-2" />
                  Join Discord Server
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 py-3">
                <Link href="/">
                  <Shield className="w-4 h-4 mr-2" />
                  Try Again
                </Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Already a member?{" "}
                <Link href="/" className="text-purple-400 hover:text-purple-300 underline">
                  Try logging in again
                </Link>
              </p>
            </div>

            {/* Developer Credit */}
            <div className="border-t border-gray-800 pt-6">
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-2">Platform developed by</p>
                <div className="inline-flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gradient font-bold">Oxcy 666</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
