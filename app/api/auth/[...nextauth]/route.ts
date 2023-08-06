import NextAuth, { NextAuthConfig } from "next-auth";
import Discord from 'next-auth/providers/discord';

export const runtime = 'edge';

const authOptions: NextAuthConfig = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!
    })
  ],
  callbacks: {
    session({ session, token }) {
      session.user.id = token.sub;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export const GET = handler.handlers.GET;
export const POST = handler.handlers.POST;
