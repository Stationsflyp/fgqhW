"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ByteAobConverter } from "./byte-aob-converter"
import { Navigation } from "./navigation"
import { Home, Code2, Plus } from "lucide-react"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen cyber-grid">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glass-card border-0 mb-8">
            <TabsTrigger value="home" className="data-[state=active]:bg-purple-600">
              <Home className="w-4 h-4 mr-2" />
              Home
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600">
              <Code2 className="w-4 h-4 mr-2" />
              Tools
            </TabsTrigger>
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
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <ByteAobConverter />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
