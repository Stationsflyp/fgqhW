<<<<<<< HEAD
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "1380363473623449750"
=======
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "1373548029008805950"
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
const DISCORD_REDIRECT_URI = `${process.env.NEXTAUTH_URL || "https://oxcytools.vercel.app"}/api/auth/callback`

export async function GET() {
  if (!DISCORD_CLIENT_ID) {
    return new Response("Discord client ID not configured", { status: 500 })
  }

  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: DISCORD_REDIRECT_URI,
    response_type: "code",
<<<<<<< HEAD
    scope: "identify email guilds guilds.members.read", // Agregamos permisos para leer membresía
=======
    scope: "identify email",
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
  })

  const authUrl = `https://discord.com/api/oauth2/authorize?${params.toString()}`

  return Response.redirect(authUrl)
}
