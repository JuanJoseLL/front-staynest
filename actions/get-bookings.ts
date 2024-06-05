import axios from 'axios';

interface Booking {
    id: string;
    user_id: string;
    roomId: string;
    check_in: string;
    check_out: string;
    guests: number;
    price: number;

}
export const getBookings= async (token: string, userId: string) => {
    try {
        const response = await axios.get(`${process.env.BASE_URL}/booking`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        
        }); 
        const bookings: Booking[] = response.data
        const userBookings = bookings.filter(booking => booking.user_id === userId);

        return userBookings
      } catch (error) {
        console.error("Error fetching properties:", error);
        return []
      }
}