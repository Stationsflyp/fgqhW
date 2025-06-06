"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Shield, Server, Globe, Lock, Hash, Binary } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      user: "Oxcy 666",
      action: "deployed new security update",
      tool: "Security Suite",
      time: "2 minutes ago",
      icon: Shield,
      color: "text-red-400",
      bgColor: "bg-red-500/20",
    },
    {
      id: 2,
      user: "DevMaster",
      action: "used Byte/AOB Converter",
      tool: "Developer Tools",
      time: "5 minutes ago",
      icon: Binary,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      id: 3,
      user: "CyberNinja",
      action: "generated secure hash",
      tool: "Hash Generator",
      time: "12 minutes ago",
      icon: Hash,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      id: 4,
      user: "CodeWizard",
      action: "optimized server performance",
      tool: "System Monitor",
      time: "18 minutes ago",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      id: 5,
      user: "NetExplorer",
      action: "scanned network ports",
      tool: "Port Scanner",
      time: "25 minutes ago",
      icon: Globe,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      id: 6,
      user: "SecureBot",
      action: "validated JWT tokens",
      tool: "JWT Decoder",
      time: "32 minutes ago",
      icon: Lock,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
  ]

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center">
          <Activity className="w-5 h-5 mr-2 text-purple-400" />
          Live Activity Feed
        </CardTitle>
        <CardDescription className="text-gray-300">Real-time updates from the OxcyShop community</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`w-10 h-10 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                <activity.icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-white">{activity.user}</span>
                  <span className="text-gray-300">{activity.action}</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge
                    variant="outline"
                    className={`border-${activity.color.split("-")[1]}-500 ${activity.color} text-xs`}
                  >
                    {activity.tool}
                  </Badge>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
