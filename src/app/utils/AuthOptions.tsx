// import CredentialsProvider, { CredentialsConfig }  from "next-auth/providers/credentials";
// import NextAuth, { SessionStrategy } from 'next-auth';
// import { connectToDb } from "@/app/utils";
// // import prisma from "";
// import bcrypt from 'bcryptjs'
// import prisma from "../../../prisma";
// const credentialsProvider: any = {
//     name: "credentials",
//     credentials: {
//       email: { label: "email", type: "text"},
//       password: { label: "Password", type: "password" }
//     },
//     async authorize(credentials: Record<string, string> | undefined, req: any) {
//       if(credentials){
//         const user = await prisma.user.findFirst({
//           where:{
//             email: credentials.email
//           }
//         });    
        
//         const passwordMatches = await bcrypt.compare(credentials.password, user.password);
//         if (passwordMatches) {
//           return user
//         } else {
//           return null
//         }
//       } else {
//         return null
//       }
//     }
//   };
  
//  export const authOptions = {
//     providers: [
//       CredentialsProvider(credentialsProvider) as CredentialsConfig<Record<string, any>>
//     ],
//     session: {
//       strategy: "jwt"  as SessionStrategy,
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//       signIn: "/login"
//     },
//     callbacks: {
//       callbacks: {
//         async signIn({ profile }) {
//           await connectToDb();
//           const userExists = await prisma.user.findFirst({
//             where: {
//               email: profile.email
//             }
//           });
//           if (!userExists) {
//             await prisma.user.create({
//               data: {
//                 email: profile.email
//               }
//             });
//           }
//           return true;
//         },
//         async session({ session }) {
//           const user = await prisma.user.findFirst({
//             where: {
//               email: session.user.email
//             }
//           });
//           session.user.id = user.id.toString();
//           return session; // Return the modified session object
//         }
//       }    
//     },
  
//   };

//   // export default authOptions;