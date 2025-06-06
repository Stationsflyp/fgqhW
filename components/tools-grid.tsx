"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Binary,
  Hash,
  Braces,
  FileCode,
  Terminal,
  QrCode,
  Lock,
  Key,
  Fingerprint,
  Wifi,
  Globe,
  Server,
  Video,
  Music,
} from "lucide-react"

interface ToolsGridProps {
  setActiveTab: (tab: string) => void
}

export function ToolsGrid({ setActiveTab }: ToolsGridProps) {
  const toolCategories = [
    {
      title: "Code & Development",
      tools: [
        { name: "Byte/AOB Converter", icon: Binary, status: "active", color: "purple" },
        { name: "Hash Generator", icon: Hash, status: "soon", color: "cyan" },
        { name: "JSON Formatter", icon: Braces, status: "soon", color: "green" },
        { name: "Base64 Encoder", icon: FileCode, status: "soon", color: "yellow" },
        { name: "Regex Tester", icon: Terminal, status: "soon", color: "red" },
        { name: "QR Generator", icon: QrCode, status: "soon", color: "blue" },
      ],
    },
    {
      title: "Security & Encryption",
      tools: [
        { name: "Password Generator", icon: Lock, status: "soon", color: "red" },
        { name: "JWT Decoder", icon: Key, status: "soon", color: "yellow" },
        { name: "Hash Validator", icon: Fingerprint, status: "soon", color: "green" },
      ],
    },
    {
      title: "Network & Infrastructure",
      tools: [
        { name: "IP Lookup", icon: Wifi, status: "soon", color: "blue" },
        { name: "DNS Checker", icon: Globe, status: "soon", color: "cyan" },
        { name: "Port Scanner", icon: Server, status: "soon", color: "purple" },
      ],
    },
    {
      title: "Media & Design",
      tools: [
        { name: "Image Optimizer", icon: Image, status: "soon", color: "pink" },
        { name: "Video Converter", icon: Video, status: "soon", color: "red" },
        { name: "Audio Editor", icon: Music, status: "soon", color: "green" },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "border-purple-500 text-purple-400 hover:bg-purple-500",
      cyan: "border-cyan-500 text-cyan-400 hover:bg-cyan-500",
      green: "border-green-500 text-green-400 hover:bg-green-500",
      yellow: "border-yellow-500 text-yellow-400 hover:bg-yellow-500",
      red: "border-red-500 text-red-400 hover:bg-red-500",
      blue: "border-blue-500 text-blue-400 hover:bg-blue-500",
      pink: "border-pink-500 text-pink-400 hover:bg-pink-500",
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Developer Toolkit</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Comprehensive suite of professional tools designed for modern developers and security professionals.
        </p>
      </div>

      {toolCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
            {category.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.tools.map((tool, toolIndex) => (
              <Card
                key={toolIndex}
                className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-white group-hover:text-purple-400 transition-colors">
                    <div className="flex items-center">
                      <tool.icon className="w-5 h-5 mr-2" />
                      {tool.name}
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        tool.status === "active" ? "border-green-500 text-green-400" : "border-gray-500 text-gray-400"
                      }
                    >
                      {tool.status === "active" ? "Active" : "Soon"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className={`w-full ${getColorClasses(tool.color)} hover:text-white transition-colors`}
                    onClick={() => tool.status === "active" && setActiveTab("tools")}
                    disabled={tool.status !== "active"}
                  >
                    {tool.status === "active" ? "Launch Tool" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
