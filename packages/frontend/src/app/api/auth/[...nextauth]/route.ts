import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from 'db';
import NextAuth from 'next-auth';

// import GitHubProvider from 'next-auth/providers/github';s
import GoogleProvider from 'next-auth/providers/google';

const handlers = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || '',
      clientSecret: process.env.AUTH_GOOGLE_ID_SECRET || '',
    }),
    // GitHubProvider({
    //   clientId: process.env.AUTH_GITHUB_ID || '',
    //   clientSecret: process.env.AUTH_GITHUB_SECRET || '',
    // }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('signIn', user, account, profile);
      if (account?.provider === 'google') {
        // ここで追加の検証を行うことができます
      }
      return true;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
});

export { handlers as GET, handlers as POST };
