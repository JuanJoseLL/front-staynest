// create-booking.ts
import axios from 'axios';

interface Booking {
    id: string;
    userId: string;
    roomId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    price: number;
}

export async function createBooking(formData: any) {
    console.log("Creando booking con datos:", formData);
    try {
        const response = await axios.post('http://localhost:3001/booking', {
            formData
        });

        if (response.status !== 201) {
            throw new Error('Error creating booking');
        }

        return { success: 'Booking created successfully!' };
    } catch (error: any) {
        return { error: error.message };
    }
}
