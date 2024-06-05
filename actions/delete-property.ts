import axios from 'axios';
import { useCurrentToken } from '@/hooks/use-current-token';

export async function deleteProperty(id: any, token: any) {
    
    try {
        const response = await axios.delete(`http://localhost:3001/property/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            console.log('Property deleted successfully');
            // Aquí podrías agregar lógica para actualizar el estado y eliminar la fila de la tabla
        }
    } catch (error) {
        console.error('Error deleting property:', error);
    }
}