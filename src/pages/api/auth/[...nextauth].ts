import GithubProvider from 'next-auth/providers/github'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            profile(profile) {
                return {
                    id: String(profile.id),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
                name: user.name,
            },
        }),
    },
}
export default NextAuth(authOptions)
