"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, ArrowRightLeft, Zap } from "lucide-react"

export function ByteAobConverter() {
  const [byteInput, setByteInput] = useState("")
  const [aobInput, setAobInput] = useState("")
  const [byteOutput, setByteOutput] = useState("")
  const [aobOutput, setAobOutput] = useState("")

  const convertToAOB = () => {
    try {
      const bytes = byteInput.split(/[\s,]+/).filter((b) => b.trim() !== "")
      const aob = bytes
        .map((byte) => {
          const num = Number.parseInt(byte.trim(), 16)
          if (isNaN(num) || num < 0 || num > 255) {
            throw new Error(`Invalid byte: ${byte}`)
          }
          return num.toString(16).toUpperCase().padStart(2, "0")
        })
        .join(" ")
      setAobOutput(aob)
    } catch (error) {
      setAobOutput(`Error: ${error instanceof Error ? error.message : "Invalid input"}`)
    }
  }

  const convertToBytes = () => {
    try {
      const aobArray = aobInput.split(/[\s,]+/).filter((a) => a.trim() !== "")
      const bytes = aobArray
        .map((aob) => {
          const cleaned = aob.trim().replace(/^0x/i, "")
          const num = Number.parseInt(cleaned, 16)
          if (isNaN(num) || num < 0 || num > 255) {
            throw new Error(`Invalid AOB: ${aob}`)
          }
          return `0x${num.toString(16).toUpperCase().padStart(2, "0")}`
        })
        .join(", ")
      setByteOutput(bytes)
    } catch (error) {
      setByteOutput(`Error: ${error instanceof Error ? error.message : "Invalid input"}`)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Byte ↔ AOB Converter</h2>
        <p className="text-gray-300">Convert between byte arrays and Array of Bytes format</p>
      </div>

      <Tabs defaultValue="byte-to-aob" className="w-full">
        <TabsList className="glass-card border-0 grid w-full grid-cols-2">
          <TabsTrigger value="byte-to-aob" className="data-[state=active]:bg-purple-600">
            <ArrowRightLeft className="w-4 h-4 mr-2" />
            Byte → AOB
          </TabsTrigger>
          <TabsTrigger value="aob-to-byte" className="data-[state=active]:bg-purple-600">
            <ArrowRightLeft className="w-4 h-4 mr-2 rotate-180" />
            AOB → Byte
          </TabsTrigger>
        </TabsList>

        <TabsContent value="byte-to-aob">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  Byte Input
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Enter bytes (hex format, space or comma separated)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="byte-input" className="text-white">
                    Bytes
                  </Label>
                  <Textarea
                    id="byte-input"
                    placeholder="48 65 6C 6C 6F or 0x48, 0x65, 0x6C, 0x6C, 0x6F"
                    value={byteInput}
                    onChange={(e) => setByteInput(e.target.value)}
                    className="glass-card border-white/20 text-white placeholder:text-gray-400 mt-2"
                    rows={4}
                  />
                </div>
                <Button
                  onClick={convertToAOB}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Convert to AOB
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">AOB Output</CardTitle>
                <CardDescription className="text-gray-300">Array of Bytes format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="aob-output" className="text-white">
                    Result
                  </Label>
                  <Textarea
                    id="aob-output"
                    value={aobOutput}
                    readOnly
                    className="glass-card border-white/20 text-white mt-2"
                    rows={4}
                  />
                </div>
                <Button
                  onClick={() => copyToClipboard(aobOutput)}
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  disabled={!aobOutput}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Result
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="aob-to-byte">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  AOB Input
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Enter Array of Bytes (hex format, space or comma separated)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="aob-input" className="text-white">
                    AOB
                  </Label>
                  <Textarea
                    id="aob-input"
                    placeholder="48 65 6C 6C 6F or 0x48 0x65 0x6C 0x6C 0x6F"
                    value={aobInput}
                    onChange={(e) => setAobInput(e.target.value)}
                    className="glass-card border-white/20 text-white placeholder:text-gray-400 mt-2"
                    rows={4}
                  />
                </div>
                <Button
                  onClick={convertToBytes}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Convert to Bytes
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Byte Output</CardTitle>
                <CardDescription className="text-gray-300">Byte array format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="byte-output" className="text-white">
                    Result
                  </Label>
                  <Textarea
                    id="byte-output"
                    value={byteOutput}
                    readOnly
                    className="glass-card border-white/20 text-white mt-2"
                    rows={4}
                  />
                </div>
                <Button
                  onClick={() => copyToClipboard(byteOutput)}
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                  disabled={!byteOutput}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Result
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-white">Usage Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-purple-400 mb-2">Byte to AOB:</h4>
              <div className="space-y-1 text-gray-300">
                <p>
                  <code className="bg-black/30 px-2 py-1 rounded">48 65 6C 6C 6F</code>
                </p>
                <p>
                  <code className="bg-black/30 px-2 py-1 rounded">0x48, 0x65, 0x6C</code>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-400 mb-2">AOB to Byte:</h4>
              <div className="space-y-1 text-gray-300">
                <p>
                  <code className="bg-black/30 px-2 py-1 rounded">48 65 6C 6C 6F</code>
                </p>
                <p>
                  <code className="bg-black/30 px-2 py-1 rounded">0x48 0x65 0x6C</code>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
