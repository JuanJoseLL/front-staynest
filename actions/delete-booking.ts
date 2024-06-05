import axios from 'axios';
import { useCurrentToken } from '@/hooks/use-current-token';

export async function deleteBooking(id: any, token: any) {
    
    try {
        const response = await axios.delete(`http://localhost:3001/booking/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (response.status === 200) {
            console.log('Booking deleted successfully');
            // Aquí podrías agregar lógica para actualizar el estado y eliminar la fila de la tabla
        }
    } catch (error) {
        console.error('Error deleting booking:', error);
    }
}