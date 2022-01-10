import axios from 'axios';

const Request = async (city) => {
    try {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: city,
                unit: 'imperial',
                appid: process.env.REACT_APP_API_KEY
            }
        });
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export default Request;
