"use client"

import { useAuth } from "./auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Code2, Users } from "lucide-react"

export function LoginPage() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center p-4 cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 animate-float">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-gradient animate-pulse-slow">OxcyShop</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A futuristic dark platform with powerful tools exclusively for verified Discord members. Join our elite
            community of developers and tech enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center space-x-4 glass-card p-4 hover:neon-glow transition-all duration-300">
                <Code2 className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white">Advanced Tools</h3>
                  <p className="text-gray-400 text-sm">Byte/AOB converters and more</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 glass-card p-4 hover:neon-glow transition-all duration-300">
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white">Exclusive Community</h3>
                  <p className="text-gray-400 text-sm">Discord-verified members only</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 glass-card p-4 hover:neon-glow transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-semibold text-white">Lightning Fast</h3>
                  <p className="text-gray-400 text-sm">Optimized for performance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="glass-card neon-glow w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gradient">Access Required</CardTitle>
                <CardDescription className="text-gray-300">Sign in with Discord to access the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={login}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  Continue with Discord
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  By signing in, you agree to our terms and acknowledge our privacy policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
