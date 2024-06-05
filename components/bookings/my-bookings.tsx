import Link from "next/link";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";



interface Booking {
    id: string;
    user_id: string;
    roomId: string;
    check_in: string;
    check_out: string;
    guests: number;
    price: number;

}

interface MyBookingsPropps{
    bookings: Booking[]

}

export const MyBookings = ({bookings}:MyBookingsPropps) => {
    

    return (
        <Card className="w-[800px] shadow-md">
        <CardHeader>
            <p className="text-2xl font-semibold text-center">
                Users
            </p>
        </CardHeader>
        <CardContent className="space-y-4">
            <Table>
                <TableCaption>Registered Users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="trucate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">ID</TableHead>
                       
                        <TableHead className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>Check In</TableHead>
                        <TableHead className="text-right truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">Check Out</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings.map((booking)=>(
                        
                                <TableRow key={booking.id}>
                                     
                                    <TableCell className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>{booking.id}</TableCell>
                                    <TableCell className='truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>{booking.check_in}</TableCell>
                                    <TableCell className="text-right truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">{booking.check_out}</TableCell>
                                </TableRow> 
                        
                    ))}
                    
                </TableBody>
            </Table>       
            
        </CardContent>
    </Card>
    
    )
}