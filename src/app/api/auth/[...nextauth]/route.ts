import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "~/utils/libraries/nextAuth/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };