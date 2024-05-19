'use server';
import * as z from 'zod';

import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
        return {  error: 'Invalid email or password' }
    }

    return { success: "Registration successful"}
}