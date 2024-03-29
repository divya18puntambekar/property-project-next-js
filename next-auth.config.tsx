// import  { NextAuthConfig }  from 'next-auth'
// import { CredentialsProvider } from 'next-auth/providers/credentials'

// interface EmailCredentials {
//   email: ProviderEmail
//   password: ProviderPassword
// }

// interface ProviderEmail {
//   label: string
//   type: string
// }

// interface ProviderPassword {
//   label: string
//   type: string
// }

// const config: NextAuthConfig = {
//   providers: [
//     {
//       id: 'email',
//       name: 'Email',
//       type: 'credentials',
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       } as EmailCredentials, // Casting to EmailCredentials
//       authorize: async (credentials: EmailCredentials) => {
//         // Add your logic to authenticate user with credentials stored in the database
//         const user = { email: credentials.email }
//         if (user) {
//           return Promise.resolve(user)
//         } else {
//           return Promise.resolve(null)
//         }
//       }
//     } as CredentialsProvider<EmailCredentials> // Casting to CredentialsProvider with EmailCredentials
//   ],
// }

// export default config;
