"use client"

import { useAuth } from "./auth-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LogOut, User, Shield, Crown } from "lucide-react"

export function UserProfile() {
  const { user, logout } = useAuth()

  if (!user) return null

  const memberSince = user.joinedAt ? new Date(user.joinedAt).toLocaleDateString() : "Unknown"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.username} />
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {user.username.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          {user.serverMember && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
              <Shield className="w-2 h-2 text-white" />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-card border-white/10 w-64" align="end">
        <DropdownMenuLabel className="text-white">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium">{user.username}</p>
              {user.serverMember && (
                <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-xs text-gray-400">#{user.discriminator}</p>
            <p className="text-xs text-gray-500">Member since: {memberSince}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />

        {user.roles && user.roles.length > 0 && (
          <>
            <div className="px-2 py-1">
              <p className="text-xs text-gray-400 mb-2">Server Roles:</p>
              <div className="flex flex-wrap gap-1">
                {user.roles.slice(0, 3).map((role, index) => (
                  <Badge key={index} variant="outline" className="text-xs border-purple-500 text-purple-400">
                    <Crown className="w-2 h-2 mr-1" />
                    Role
                  </Badge>
                ))}
                {user.roles.length > 3 && (
                  <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                    +{user.roles.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
            <DropdownMenuSeparator className="bg-white/10" />
          </>
        )}

        <DropdownMenuItem className="text-white hover:bg-white/10">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-400 hover:bg-red-500/10" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
