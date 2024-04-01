import CredentialsProvider, { CredentialsConfig }  from "next-auth/providers/credentials";
import NextAuth, { SessionStrategy } from 'next-auth';
import { connectToDb } from "@/app/utils";
import prisma from "../../../../../prisma";

const credentialsProvider: any = {
  name: "credentials",
  credentials: {},
  async authorize(credentials: Record<string, string> | undefined, req: any) {
    const user = { id: 38 };
    // const user = prisma.user.findFirst{ where:{
    //     id: user. id
    // }};
    return user;
  }
};

const authOptions = {
  providers: [
    CredentialsProvider(credentialsProvider) as CredentialsConfig<Record<string, any>>
  ],
  session: {
    strategy: "jwt"  as SessionStrategy,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  },
  callbacks: {
    callbacks: {
      async signIn({ profile }) {
        await connectToDb();
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile.email
          }
        });
        if (!userExists) {
          await prisma.user.create({
            data: {
              email: profile.email
            }
          });
        }
        return true;
      },
      async session({ session }) {
        const user = await prisma.user.findFirst({
          where: {
            email: session.user.email
          }
        });
        session.user.id = user.id.toString();
        return session; // Return the modified session object
      }
    }    
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
