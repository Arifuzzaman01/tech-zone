import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/dbConnect"
import bcrypt from "bcryptjs"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const usersCollection = (await clientPromise)
          .db(process.env.DB_NAME)
          .collection("users")

        const user = await usersCollection.findOne({ email: credentials.email })
        if (!user) throw new Error("No user found")
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) throw new Error("Invalid password")
        return { id: user._id, name: user.name, email: user.email }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

// 🔹 App Router requires exporting GET and POST
export { handler as GET, handler as POST }
