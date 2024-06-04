'use client'
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; // Cambiado de next/router a next/navigation
import Link from 'next/link'

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

export const BookingList = ({ bookings }: { bookings: Booking[] }) => {
    const router = useRouter();

    return (
        <Card className='w-[800px] shadow-md'>
        <CardHeader>
            <p className="text-2xl font-semibold text-center">
                Bookings
            </p>

            <Link href='/bookings/create-booking'>Create booking</Link>
        </CardHeader>
            <CardContent className='space-y-4'>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 max-h-[400px] mx-auto overflow-auto">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                                <p>Check-in: {booking.check_in}</p>
                                <p>Check-out: {booking.check_out}</p>
                                <p>Property ID: {booking.property_id}</p>
                                <p>User ID: {booking.user_id}</p>
                                <p>Number of People: {booking.num_people}</p>
                                <p>Payment Method: {booking.payment_method}</p>
                                <p>Is Paid: {booking.is_paid ? 'Yes' : 'No'}</p>
                                <p>Is Confirmed: {booking.is_confirmed ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
