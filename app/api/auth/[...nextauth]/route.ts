import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        // For demo purposes, using a hardcoded user
        const user = {
          id: "1",
          email: "shoaibahmed@gmail.com",
          password: "123456"
        };

        if (credentials.email === user.email && credentials.password === user.password) {
          return { id: user.id, email: user.email };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 