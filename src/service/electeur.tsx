import axios from 'axios';
export async function getElecteurs() {
    try {
        const response = await axios.get('http://localhost:8081/api/electeur/getAll');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
