import axios from 'axios';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export const getUsers= async () => {
    try {
        const response = await axios.get('http://localhost:3001/user'); 
        const users: User[] = response.data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }));
        
        return users
      } catch (error) {
        console.error("Error fetching users:", error);
        return []
      }
}
