import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"
import AppleProvider from "next-auth/providers/apple"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import nextAuth from "next-auth";
import mongoose from "mongoose";
import User from "@/app/models/User"
import Payment from "@/app/models/Payment";
import Username from "@/app/[username]/page";
import connectDB from "../../../../../db/connectDb";

export const authOptions = nextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (account.provider == "github") {
        // connect to database
        await connectDB()
        // check if user is already exist in database
        const currentUser = await User.findOne({ email: email })
        if (!currentUser) {
          const newUser = new User({
            email: user.email ,
            username : user.email.split("@")[0],
          })
          await newUser.save()
          user.name = newUser.username
        }
  
        return true;
      }
    } ,
    async session({ session, user, token }) {
      const dbUser = await User.findOne({email : session.user.email})
      session.user.name = dbUser.username
      return session
    },
  }

})


export { authOptions as GET, authOptions as POST }