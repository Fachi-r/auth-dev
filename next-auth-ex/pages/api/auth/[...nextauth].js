import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../mongodb";

const options = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({

    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  // session: {
  //   jwt: {
  //     // A secret to use for key generation. Defaults to the top-level `secret`.
  //     secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
  //     // The maximum age of the NextAuth.js issued JWT in seconds.
  //     // Defaults to `session.maxAge`.
  //     maxAge: 60 * 60 * 24 * 30,
  //     // You can define your own encode/decode functions for signing and encryption
  //     // if you want to override the default behavior.
  //     async encode({ secret, token, maxAge }) {},
  //     async decode({ secret, token }) {},
  //   },
  // },
  pages: {
    // signIn: '/secret',
  },
  theme: "light",
  debug: false,
};

export default NextAuth(options);
