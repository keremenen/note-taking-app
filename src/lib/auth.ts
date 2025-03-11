import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import prisma from './db'
import bcrypt from 'bcryptjs'

export const { auth, handlers, signIn, signOut } = NextAuth({
	session: { strategy: 'jwt', maxAge: 30 * 24 * 60 * 60 },
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const { email, password } = credentials

				const user = await prisma.user.findUnique({
					where: { email: email as string },
				})

				if (!user) {
					console.log('User not found')
					return null
				}

				const isPasswordMatch = await bcrypt.compare(
					password as string,
					user.hashedPassword
				)

				if (!isPasswordMatch) {
					console.log('Password does not match')
					return null
				}

				return user
			},
		}),
	],
})
