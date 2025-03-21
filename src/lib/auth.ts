import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import prisma from './db'
import bcrypt from 'bcryptjs'

export const { auth, handlers, signIn, signOut } = NextAuth({
	pages: {
		signIn: '/login',
	},

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
	callbacks: {
		authorized: ({ auth, request }) => {
			const isUserLoggedIn = !!auth?.user
			const isTryingToAccessApp = request.nextUrl.pathname.includes('/app')

			// Check all the conditions to redirect the user
			if (!isUserLoggedIn && isTryingToAccessApp) {
				return false
			}

			if (isUserLoggedIn && isTryingToAccessApp) {
				return true
			}

			if (isUserLoggedIn && !isTryingToAccessApp) {
				return Response.redirect(new URL('/app/dashboard', request.nextUrl))
			}
			if (!isUserLoggedIn && !isTryingToAccessApp) {
				return true
			}

			return false
		},
		jwt: async ({ token, user }) => {
			if (user) {
				token.id = user.id
			}
			return token
		},
		session: ({ session, token }) => {
			if (token) {
				session.user.id = token.id as string
			}
			return session
		},
	},
})
