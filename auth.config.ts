import Credentials from "next-auth/providers/credentials"
import {LoginSchema } from '@/schemas';
import type { NextAuthConfig } from "next-auth"
import axios from 'axios';
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

                    try {
                        const response = await axios.post('http://localhost:3001/auth/login', {
                            email,
                            password
                        })
                        if (response.status === 200) {
                            
                            return { ...response.data.user, access_token: response.data.access_token };
                        }
                    }catch(error){
                        if (axios.isAxiosError(error)) {
                            console.error('Login error:', error.response?.data?.message || error.message);
                          } else {
                            console.error('Unexpected error during login:', error);
                          }
                          return null;
                    }
                    

                   
                    
                   
                }
                return null
                
            }
        }),
        
    ]
} satisfies NextAuthConfig