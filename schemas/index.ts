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

export const PropertySchema = z.object({
  id: z.string().uuid(),
  type: z.string(),
  country: z.string(),
  city: z.string(),
  address: z.string(),
  latitude: z.number(),
  altitude: z.number(),
  rooms: z.number().positive(),
  bathrooms: z.number().positive(),
  area: z.number().positive(),
  cost_per_night: z.number().positive(),
  max_people: z.number().positive(),
  slug: z.string().optional(),
});

