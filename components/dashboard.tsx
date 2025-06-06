"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
<<<<<<< HEAD
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ByteAobConverter } from "./byte-aob-converter"
import { Navigation } from "./navigation"
import { StatsCards } from "./stats-cards"
import { ToolsGrid } from "./tools-grid"
import { ActivityFeed } from "./activity-feed"
import { QuickActions } from "./quick-actions"
import {
  Home,
  Code2,
  Terminal,
  Shield,
  Zap,
  Network,
  Lock,
  Key,
  Hash,
  Binary,
  Braces,
  FileCode,
  Server,
  ImageIcon as Image,
  Music,
  Video,
  Globe,
  Wifi,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  QrCode,
  Rocket,
  Sparkles,
  Crown,
  Brain,
  Fingerprint,
} from "lucide-react"
=======
import { ByteAobConverter } from "./byte-aob-converter"
import { Navigation } from "./navigation"
import { Home, Code2, Plus } from "lucide-react"
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen cyber-grid">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
<<<<<<< HEAD
          <TabsList className="glass-card border-0 mb-8 grid grid-cols-6 w-full max-w-3xl mx-auto">
=======
          <TabsList className="glass-card border-0 mb-8">
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
            <TabsTrigger value="home" className="data-[state=active]:bg-purple-600">
              <Home className="w-4 h-4 mr-2" />
              Home
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600">
              <Code2 className="w-4 h-4 mr-2" />
              Tools
            </TabsTrigger>
<<<<<<< HEAD
            <TabsTrigger value="security" className="data-[state=active]:bg-purple-600">
              <Shield className="w-4 h-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-purple-600">
              <Network className="w-4 h-4 mr-2" />
              Network
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-purple-600">
              <Image className="w-4 h-4 mr-2" />
              Media
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-purple-600">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 animate-float">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-6xl font-bold mb-4 text-gradient animate-pulse-slow">Welcome to OxcyShop</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                  The ultimate futuristic platform for developers. Access cutting-edge tools, utilities, and resources
                  designed for the elite Discord community.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="outline" className="border-purple-500 text-purple-400 px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Premium Access
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500 text-cyan-400 px-4 py-2">
                    <Crown className="w-4 h-4 mr-2" />
                    Elite Member
                  </Badge>
                  <Badge variant="outline" className="border-pink-500 text-pink-400 px-4 py-2">
                    <Zap className="w-4 h-4 mr-2" />
                    Unlimited Tools
                  </Badge>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <StatsCards />

            {/* Quick Actions */}
            <QuickActions setActiveTab={setActiveTab} />

            {/* Tools Overview */}
            <ToolsGrid setActiveTab={setActiveTab} />

            {/* Activity Feed */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ActivityFeed />
              </div>
              <div className="space-y-6">
                {/* System Status */}
                <Card className="glass-card neon-glow">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Activity className="w-5 h-5 mr-2 text-green-400" />
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">API Response</span>
                        <span className="text-green-400">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Server Load</span>
                        <span className="text-yellow-400">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Memory Usage</span>
                        <span className="text-blue-400">67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                {/* Developer Credit */}
                <Card className="glass-card border-gradient-to-r from-purple-500 to-pink-500">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-gradient">Developed by</CardTitle>
                    <CardDescription className="text-2xl font-bold text-white">Oxcy 666</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 text-sm mb-4">Master developer and architect of futuristic solutions</p>
                    <div className="flex justify-center space-x-2">
                      <Badge variant="outline" className="border-purple-500 text-purple-400">
                        <Brain className="w-3 h-3 mr-1" />
                        Genius
                      </Badge>
                      <Badge variant="outline" className="border-pink-500 text-pink-400">
                        <Rocket className="w-3 h-3 mr-1" />
                        Innovator
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
=======
          </TabsList>

          <TabsContent value="home" className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-gradient">Welcome to OxcyShop</h1>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Your exclusive access to advanced developer tools and utilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTab("tools")}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Code2 className="w-5 h-5 mr-2 text-purple-400" />
                    Byte/AOB Converter
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Convert between byte arrays and Array of Bytes format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  >
                    Open Tool
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-dashed border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-400">
                    <Plus className="w-5 h-5 mr-2" />
                    More Tools Coming
                  </CardTitle>
                  <CardDescription className="text-gray-500">Additional utilities will be added soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-dashed border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-400">
                    <Plus className="w-5 h-5 mr-2" />
                    Future Tool
                  </CardTitle>
                  <CardDescription className="text-gray-500">Suggest new tools in our Discord</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
<<<<<<< HEAD
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Developer Arsenal</h2>
              <p className="text-gray-300 text-lg">Professional tools for elite developers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Existing Byte/AOB Converter */}
              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-purple-400 transition-colors">
                    <Binary className="w-5 h-5 mr-2" />
                    Byte/AOB Converter
                  </CardTitle>
                  <CardDescription>Convert between byte arrays and AOB format</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>

              {/* New Tools */}
              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-cyan-400 transition-colors">
                    <Hash className="w-5 h-5 mr-2" />
                    Hash Generator
                  </CardTitle>
                  <CardDescription>Generate MD5, SHA1, SHA256 hashes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-green-400 transition-colors">
                    <Braces className="w-5 h-5 mr-2" />
                    JSON Formatter
                  </CardTitle>
                  <CardDescription>Format, validate and minify JSON</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-yellow-400 transition-colors">
                    <FileCode className="w-5 h-5 mr-2" />
                    Base64 Encoder
                  </CardTitle>
                  <CardDescription>Encode/decode Base64 strings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-red-400 transition-colors">
                    <Terminal className="w-5 h-5 mr-2" />
                    Regex Tester
                  </CardTitle>
                  <CardDescription>Test and debug regular expressions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center text-white group-hover:text-blue-400 transition-colors">
                    <QrCode className="w-5 h-5 mr-2" />
                    QR Generator
                  </CardTitle>
                  <CardDescription>Generate QR codes for any text</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Byte/AOB Converter Tool */}
            <div className="mt-12">
              <ByteAobConverter />
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Security Suite</h2>
              <p className="text-gray-300 text-lg">Advanced security tools and utilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Lock className="w-5 h-5 mr-2 text-red-400" />
                    Password Generator
                  </CardTitle>
                  <CardDescription>Generate secure passwords</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-red-500 text-red-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Key className="w-5 h-5 mr-2 text-yellow-400" />
                    JWT Decoder
                  </CardTitle>
                  <CardDescription>Decode and verify JWT tokens</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Fingerprint className="w-5 h-5 mr-2 text-green-400" />
                    Hash Validator
                  </CardTitle>
                  <CardDescription>Validate file integrity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-green-500 text-green-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Network Tools</h2>
              <p className="text-gray-300 text-lg">Network analysis and debugging utilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Wifi className="w-5 h-5 mr-2 text-blue-400" />
                    IP Lookup
                  </CardTitle>
                  <CardDescription>Get detailed IP information</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-blue-500 text-blue-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                    DNS Checker
                  </CardTitle>
                  <CardDescription>Check DNS records and propagation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Server className="w-5 h-5 mr-2 text-purple-400" />
                    Port Scanner
                  </CardTitle>
                  <CardDescription>Scan open ports on servers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-purple-500 text-purple-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Media Tools</h2>
              <p className="text-gray-300 text-lg">Image, video, and audio processing utilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Image className="w-5 h-5 mr-2 text-pink-400" />
                    Image Optimizer
                  </CardTitle>
                  <CardDescription>Compress and optimize images</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Video className="w-5 h-5 mr-2 text-red-400" />
                    Video Converter
                  </CardTitle>
                  <CardDescription>Convert video formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-red-500 text-red-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card hover:neon-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Music className="w-5 h-5 mr-2 text-green-400" />
                    Audio Editor
                  </CardTitle>
                  <CardDescription>Edit and process audio files</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-green-500 text-green-400">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gradient">Analytics Dashboard</h2>
              <p className="text-gray-300 text-lg">Real-time metrics and insights</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Users</p>
                      <p className="text-2xl font-bold text-white">12,847</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Tools Used</p>
                      <p className="text-2xl font-bold text-white">89,234</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Sessions</p>
                      <p className="text-2xl font-bold text-white">1,247</p>
                    </div>
                    <Activity className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Uptime</p>
                      <p className="text-2xl font-bold text-white">99.9%</p>
                    </div>
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <LineChart className="w-16 h-16 mr-4" />
                    <span>Interactive charts coming soon...</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <PieChart className="w-16 h-16 mr-4" />
                    <span>Real-time metrics coming soon...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
=======
            <ByteAobConverter />
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
