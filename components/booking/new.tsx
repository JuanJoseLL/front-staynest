'use client'
import { BookingForm } from '@/components/booking/booking-form'; 

const NewBookingPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Create New Booking</h1>
            <BookingForm />
        </div>
    );
};

export default NewBookingPage;
