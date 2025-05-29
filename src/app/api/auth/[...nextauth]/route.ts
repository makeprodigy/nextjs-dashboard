import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // You can add more NextAuth config here (callbacks, pages, etc.)
});

export { handler as GET, handler as POST };

// IMPORTANT:
// Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env.local file.
// You must create OAuth credentials in the Google Cloud Console and set the redirect URI to:
// http://localhost:3000/api/auth/callback/google (for local development) 