import { getBookings } from "@/actions/get-bookings";
import { useCurrentToken } from "@/lib/auth";

import { BookingList } from "@/components/booking/booking-list";


const BookingsListPage = async () =>{
    const token = await useCurrentToken();
    const bookings = await getBookings(token as string); 
    console.log("hola");
    return (
        
            <BookingList bookings={bookings}/>
        
    )

}

export default BookingsListPage;