"use client"
import { useSession, signIn } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      // redirect to login page
      signIn()
    }
  }, [status, router])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (session) {
    return <>{children}</>
  }

  return null
}
