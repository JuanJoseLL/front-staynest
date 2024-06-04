import * as z from 'zod';

export const BookingSchema = z.object({
    check_in: z.string().nonempty('Check-in date is required'),
    check_out: z.string().nonempty('Check-out date is required'),
    property_type: z.enum(['APARTMENT', 'HOUSE', 'VILLA']),
    property_id: z.string().nonempty('Property ID is required'),
    user_id: z.string().nonempty('User ID is required'),
    num_people: z.number().min(1, 'Number of people must be at least 1'),
    payment_method: z.enum(['CREDIT_CARD', 'PAYPAL', 'BANK_TRANSFER']),
    is_paid: z.boolean().optional(),
    is_confirmed: z.boolean().optional(),
});
