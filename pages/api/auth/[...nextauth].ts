import NextAuth from 'next-auth';
import Discord from 'next-auth/providers/discord';

export default NextAuth({
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
});
