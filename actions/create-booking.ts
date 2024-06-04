import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export async function createBooking(formData: FormData) {
    const user:User|undefined = await currentUser();
    try {
        const response = await fetch(`https://staynest.icybeach-62331649.eastus.azurecontainerapps.io/booking/${user?.id}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Error creating booking');
        }

        return { success: 'Booking created successfully!' };
    } catch (error: any) {
        return { error: error.message };
    }
}
