
import axios from 'axios';
import { currentUser } from "@/lib/auth";
 interface Booking { 
    id: string;
    check_in: string;
    check_out: string;
    property_id: string;
    user_id: string;
    num_people: number;
    payment_method: string;
    is_paid: boolean;
    is_confirmed: boolean;
}
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export const getBookings = async (token: string) => {
    const user:User|undefined = await currentUser();
    try {
        const response = await axios.get(`https://staynest.icybeach-62331649.eastus.azurecontainerapps.io/booking/${user?.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const bookings: Booking[] = response.data;
        return bookings;
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
    }
}
