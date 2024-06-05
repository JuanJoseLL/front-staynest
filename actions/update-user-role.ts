import { User } from '@/auth';
import axios from 'axios';

export const updateUserRole = async (user: User, newRole: string, token: string) => {
    try {
        const response = await axios.patch(`${process.env.BASE_URL}/user/${user.id}`, {
            ...user,
            role: newRole
        });
        return response.data;
    }catch(error) {
        console.error("Error updating user role:", error);
        return error;
    }
}