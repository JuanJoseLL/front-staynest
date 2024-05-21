import Credentials from "next-auth/providers/credentials"
import {LoginSchema } from '@/schemas';
import type { NextAuthConfig } from "next-auth"
import {db} from '@/lib/db'
import bcrypt from 'bcryptjs';
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"






export default { 
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            clientId: process.env.GOOGLE__CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validatedValues = LoginSchema.safeParse(credentials);
                if (validatedValues.success) {
                   
                    const { email, password } = validatedValues.data;
                    const user = await db.user.findFirst({where :{email: email}})
                   
                    if (!user || !user.password) {
                        return null
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) {
                        return user
                    }
                }
                return null
                
            }
        }),
        
    ]
} satisfies NextAuthConfig