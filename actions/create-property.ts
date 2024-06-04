import { useCurrentToken } from '@/hooks/use-current-token';
import axios from 'axios';

export const createProperty = async (property: any) => {
    const token = useCurrentToken()
    try {
        const response = await axios.post(`https://staynest.icybeach-62331649.eastus.azurecontainerapps.io/property`, property, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        
        }); 
        return response.data
      } catch (error) {
            console.error("Error creating property:", error);
        return error
      }
}