import * as z from 'zod';


export const SettingsSchema = z.object({
    name: z.optional(z.string())
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string({
        message: 'Please enter a password'
    }),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(6,{
        message: 'Password must be at least 6 characters long'
    }),
    name: z.string().min(2,{
        message: 'Name is required'
    })
})