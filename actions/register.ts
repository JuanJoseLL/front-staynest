'use server';
import * as z from 'zod';
import axios from 'axios';

import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
        return {  error: 'Invalid email or password' }
    }

    //ESTE VALOR ES DE PRUEBA PARA PROBAR CON LA API
    const valuesWithNewField = { ...validatedValues.data, role: 'USER' };

    try{
        const response = await axios.post('https://staynest.icybeach-62331649.eastus.azurecontainerapps.io/user/register', valuesWithNewField);
        if( response.status === 200){
            return { success: "Registration successful"}
        } else if ( response.status === 400) {

            return { error: "Email already is registered" }
            
        } else{
            return { error: "Registration failed" }
        }
        
    } catch (error){
        console.log(error)
        return { error: "An error occurred while trying to register" }
    }
   
}