import axios from 'axios';

export const getReports = async ( token: string, type: string) => {
    
    try {
        const response = await axios.get(`http://localhost:3001/report/${type}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        
        }); 
        const reports = response.data
        return reports
      } catch (error) {
            console.error("User not found:", error);
        return error
      }
}