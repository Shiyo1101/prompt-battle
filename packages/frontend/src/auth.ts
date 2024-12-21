import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from 'db';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
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
});
