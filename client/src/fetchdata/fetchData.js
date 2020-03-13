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

export const getMoreThanTenSearches = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/players');
        return res.data.filter(element => element.searches > 10);
    } catch(err) {
        return {
            error: { message: err.message }
        }
    }
}