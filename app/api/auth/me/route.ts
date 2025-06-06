import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get("session")

    if (!session) {
      return new Response("Unauthorized", { status: 401 })
    }

    const user = JSON.parse(session.value)
<<<<<<< HEAD

    // Verificar que el usuario sea miembro del servidor
    if (!user.serverMember) {
      return new Response("Not a server member", { status: 403 })
    }

=======
>>>>>>> 6d6e8298a93faf08cd87f6138a067439d02b8b18
    return Response.json(user)
  } catch (error) {
    return new Response("Unauthorized", { status: 401 })
  }
}
