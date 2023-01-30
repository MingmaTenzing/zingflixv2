import { optionGroupUnstyledClasses } from "@mui/base"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,

      clientSecret: process.env.GITHUB_CLIENT_SECRET_ID
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,

      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,

      clientSecret: process.env.FACEBOOK_CLIENT_SECRET_ID
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)