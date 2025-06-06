import type { NextRequest } from "next/server"
import { cookies } from "next/headers"

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "1373548029008805950"
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "BPtWedPxjRprT4Vdq9EeHKAZ7gJk87X1"
const DISCORD_REDIRECT_URI = `${process.env.NEXTAUTH_URL || "https://oxcytools.vercel.app"}/api/auth/callback`

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    return Response.redirect(`${request.nextUrl.origin}?error=no_code`)
  }

  try {
    // Exchange code for token
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
    })

    const tokens = await tokenResponse.json()

    if (!tokenResponse.ok) {
      console.error("Token exchange failed:", tokens)
      throw new Error("Failed to exchange code for token")
    }

    // Get user info
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    })

    const user = await userResponse.json()

    if (!userResponse.ok) {
      console.error("User fetch failed:", user)
      throw new Error("Failed to get user info")
    }

    // Set session cookie
    const cookieStore = await cookies()
    cookieStore.set(
      "session",
      JSON.stringify({
        id: user.id,
        username: user.username,
        discriminator: user.discriminator || "0000",
        avatar: user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : null,
      }),
      {
        httpOnly: true,
        secure: true, // Always secure for production
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: "lax",
      },
    )

    return Response.redirect(request.nextUrl.origin)
  } catch (error) {
    console.error("Auth error:", error)
    return Response.redirect(`${request.nextUrl.origin}?error=auth_failed`)
  }
}
