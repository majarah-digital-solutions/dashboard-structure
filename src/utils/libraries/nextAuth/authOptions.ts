import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apolloClient } from "~/utils/libraries";
import authLogin from "~/graphql/mutaions/authLogin";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { phoneNumber, password } = credentials;

        try {
          const result = await apolloClient.mutate({
            mutation: authLogin,
            variables: { loginData: { phoneNumber, password } },
          });

          console.log("Mutation result:", result);
          return result.data.login;
        } catch (err: any) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};
