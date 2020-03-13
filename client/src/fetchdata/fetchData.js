import axios from 'axios';

export default async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/players');
        return res.data;
    } catch(err) {
        return {
            error: { message: err.message }
        }
    }
}