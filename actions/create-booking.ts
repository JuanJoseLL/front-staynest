import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
import axios from 'axios';
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
interface Booking {
    id: string;
    userId: string;
    roomId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    price: number;

}
export async function createBooking(formData: Booking) {
    const user: User|undefined = await currentUser();
    console.log( "aqui estoy creando booking")
    try {
        const response = await axios.post('http://localhost:3001/booking', {
            formData
        })

        if (response.status !== 201) {
            throw new Error('Error creating booking');
        }

        return { success: 'Booking created successfully!' };
    } catch (error: any) {
        return { error: error.message };
    }
}
