"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Code2, Zap, Shield, TrendingUp, Activity, Server, Globe } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Active Users",
      value: "12,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "Tools Available",
      value: "47",
      change: "+5",
      icon: Code2,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "API Calls",
      value: "2.4M",
      change: "+23%",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
    {
      title: "Security Score",
      value: "99.9%",
      change: "Perfect",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      title: "Performance",
      value: "98.7%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
    },
    {
      title: "Uptime",
      value: "99.99%",
      change: "Stable",
      icon: Activity,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
    },
    {
      title: "Servers",
      value: "24",
      change: "Global",
      icon: Server,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
    },
    {
      title: "Countries",
      value: "156",
      change: "Worldwide",
      icon: Globe,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="glass-card hover:neon-glow transition-all duration-300 group">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center space-y-2">
              <div
                className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.title}</p>
                <Badge variant="outline" className={`text-xs border-${stat.color.split("-")[1]}-500 ${stat.color}`}>
                  {stat.change}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
