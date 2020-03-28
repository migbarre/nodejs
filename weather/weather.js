const axios = require('axios');

const get = async(lat, lon) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=ef445ab211c681c5befa4847cabfd8a4&units=metric`,
        timeout: 1000
    });

    const response = await instance.get();

    if (response.data.cod !== 200) {
        throw new Error(`Something went wrong finding weather`);
    }

    return response.data.main.temp;
}

module.exports = {
    get
};