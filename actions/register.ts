'use server';
import * as z from 'zod';
import axios from 'axios';
import {db} from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
        return {  error: 'Invalid email or password' }
    }

    const { email, password, name } = validatedValues.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({where: { email}});

    if (existingUser) {
        return { error: 'User with that email already exists' }
    }
    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });
    
    return { success: "User created!" }
   
}