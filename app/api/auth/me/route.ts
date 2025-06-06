import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("session")

    if (!session) {
      return new Response("Unauthorized", { status: 401 })
    }

    const user = JSON.parse(session.value)

    // Verificar que el usuario sea miembro del servidor
    if (!user.serverMember) {
      return new Response("Not a server member", { status: 403 })
    }

    return Response.json(user)
  } catch (error) {
    return new Response("Unauthorized", { status: 401 })
  }
}
