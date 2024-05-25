import { UserList } from "@/components/user/user-list";
import axios from 'axios';


interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
  


const UserListPage = async () => {
    const users = await getUsers();
    return (
        <UserList users={users}/>
    )
}

async function getUsers() {
    try {
        const response = await axios.get('http://localhost:3001/user'); // Replace with your actual API endpoint
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

export default UserListPage;