import axios from 'axios';

export const getReports = async ( token: string, type: string) => {
    
    try {
        const response = await axios.get(`${process.env.BASE_URL}/report/${type}`, {
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