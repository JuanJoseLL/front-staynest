'use server';
import * as z from 'zod';

import { LoginSchema } from '@/schemas';
import axios from 'axios';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedValues = LoginSchema.safeParse(values);

    if (!validatedValues.success) {
        return {  error: 'Invalid email or password' }
    }

    try{
        const response = await axios.post('https://staynest.icybeach-62331649.eastus.azurecontainerapps.io/auth/login', values);
        if (response.status === 200){
            return { success: "Login successful", token: response.data.token}
        } else{
            return { error: "Invalid email or password"}
        }
    }catch (error){
        return { error: "An error occurred while trying to login"}
    }

}