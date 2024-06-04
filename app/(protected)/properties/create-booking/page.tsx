import { getBookings } from "@/actions/get-bookings";
import { RegisterForm } from "@/components/auth/register-form";
import { useCurrentToken } from "@/lib/auth";



const BookingForm = async () =>{
    //const token = await useCurrentToken();
    //const bookings = await getBookings(token as string); ;
    return (
        
            <BookingForm/>
        
    )

}

export default BookingForm;