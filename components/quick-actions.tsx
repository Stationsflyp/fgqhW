"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Shield, Network, ImageIcon, BarChart3, Rocket } from "lucide-react"

interface QuickActionsProps {
  setActiveTab: (tab: string) => void
}

export function QuickActions({ setActiveTab }: QuickActionsProps) {
  const quickActions = [
    {
      title: "Launch Tools",
      description: "Access developer utilities",
      icon: Code2,
      action: () => setActiveTab("tools"),
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-700 to-pink-700",
    },
    {
      title: "Security Suite",
      description: "Encryption & security tools",
      icon: Shield,
      action: () => setActiveTab("security"),
      color: "from-red-600 to-orange-600",
      hoverColor: "from-red-700 to-orange-700",
    },
    {
      title: "Network Tools",
      description: "Network analysis utilities",
      icon: Network,
      action: () => setActiveTab("network"),
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-700 to-cyan-700",
    },
    {
      title: "Media Tools",
      description: "Image, video & audio processing",
      icon: ImageIcon,
      action: () => setActiveTab("media"),
      color: "from-green-600 to-teal-600",
      hoverColor: "from-green-700 to-teal-700",
    },
    {
      title: "Analytics",
      description: "Real-time metrics & insights",
      icon: BarChart3,
      action: () => setActiveTab("analytics"),
      color: "from-yellow-600 to-orange-600",
      hoverColor: "from-yellow-700 to-orange-700",
    },
  ]

  return (
    <Card className="glass-card neon-glow">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gradient flex items-center justify-center">
          <Rocket className="w-6 h-6 mr-2" />
          Quick Actions
        </CardTitle>
        <CardDescription className="text-gray-300">
          Jump straight into your favorite tools and utilities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              onClick={action.action}
              className={`h-24 flex flex-col items-center justify-center space-y-2 bg-gradient-to-r ${action.color} hover:${action.hoverColor} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <action.icon className="w-6 h-6" />
              <div className="text-center">
                <div className="font-semibold text-sm">{action.title}</div>
                <div className="text-xs opacity-80">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
