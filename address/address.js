const axios = require('axios');

const get = async(address) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ address }`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '0c465a81eemsh626ee218c4c9b40p1a3148jsnec647d10784f' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`Data not found for ${ address }`);
    }

    const data = response.data.Results[0];

    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        name,
        lat,
        lon
    };
}

module.exports = {
    get
};